import { jsPDF } from 'jspdf';
// import { toast } from '@/components/ui/use-toast';

export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};

/**
 * Generates and downloads a PDF file using jsPDF
 * @param {string} filename - The name of the file to download (e.g., 'curriculum.pdf')
 * @param {string} title - The title of the document
 * @param {string} description - Description to include in the PDF body
 * @returns {Promise<boolean>} - True if successful, false otherwise
 */
export const handleFileDownload = async (filename, title, description) => {
  try {
    // Simulate network delay for better UX (showing loading state)
    await new Promise(resolve => setTimeout(resolve, 800));

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    
    // Header - School Name
    doc.setFontSize(22);
    doc.setTextColor(22, 163, 74); // Green #16a34a
    doc.text("HAM PREPARATORY SCHOOL", pageWidth / 2, 20, { align: 'center' });
    
    // Subheader - Location
    doc.setFontSize(14);
    doc.setTextColor(100, 100, 100); // Gray
    doc.text("KAWOKO - The Fountain of Success", pageWidth / 2, 30, { align: 'center' });
    
    // Divider Line
    doc.setDrawColor(245, 158, 11); // Gold
    doc.setLineWidth(1);
    doc.line(20, 35, pageWidth - 20, 35);
    
    // Document Title
    doc.setFontSize(18);
    doc.setTextColor(30, 58, 138); // Navy
    doc.text(title, pageWidth / 2, 50, { align: 'center' });
    
    // Body Content
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    
    const splitDescription = doc.splitTextToSize(description || "Document content unavailable.", pageWidth - 40);
    doc.text(splitDescription, 20, 70);
    
    // Specific content based on file type
    let yPos = 80 + (splitDescription.length * 7);
    
    if (filename.includes('curriculum')) {
      doc.setFontSize(14);
      doc.text("Curriculum Highlights:", 20, yPos);
      yPos += 10;
      doc.setFontSize(12);
      const items = [
        "• Comprehensive coverage of Uganda National Curriculum",
        "• Integrated Religious Education (Islamic & Secular)",
        "• Mathematics, Science, English, and Social Studies",
        "• Computer Studies and ICT integration",
        "• Games  and Sports"
      ];
      items.forEach(item => {
        doc.text(item, 25, yPos);
        yPos += 8;
      });
    } else if (filename.includes('calendar')) {
      doc.setFontSize(14);
      doc.text("Term Dates 2026:", 20, yPos);
      yPos += 10;
      doc.setFontSize(12);
      const terms = [
        "Term 1: January 6 - March 28, 2026",
        "Term 2: April 20 - July 3, 2026",
        "Term 3: August 10 - November 20, 2026"
      ];
      terms.forEach(term => {
        doc.text(term, 25, yPos);
        yPos += 8;
      });
    }
    
    // Footer
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text("Contact: +256 701 094 410 | info@hamprepschool.ac.ug", pageWidth / 2, pageHeight - 15, { align: 'center' });
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
    
    // Save the PDF
    doc.save(filename);
    
    return true;
  } catch (error) {
    console.error('PDF Generation Error:', error);
    return false;
  }
};