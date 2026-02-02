import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download, Clock, Star, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import Card from '../components/Card';
import { useToast } from '../components/ui/use-toast';
import { jsPDF } from 'jspdf';

const AcademicCalendar = () => {
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);

  const generatePDF = async () => {
    try {
      setIsDownloading(true);
      // Simulate a brief delay for UX
      await new Promise(resolve => setTimeout(resolve, 800));

      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.width;
      
      // -- Header --
      // School Name
      doc.setFontSize(24);
      doc.setTextColor(16, 185, 129); // Primary Green
      doc.text("HAM PREPARATORY SCHOOL", pageWidth / 2, 20, { align: 'center' });
      
      // Motto
      doc.setFontSize(12);
      doc.setTextColor(30, 58, 138); // Navy
      doc.text("THE FOUNTAIN OF SUCCESS", pageWidth / 2, 28, { align: 'center' });
      
      // Divider
      doc.setDrawColor(245, 158, 11); // Gold
      doc.setLineWidth(1.5);
      doc.line(20, 35, pageWidth - 20, 35);

      // Document Title
      doc.setFontSize(20);
      doc.setTextColor(0, 0, 0);
      doc.text("ACADEMIC CALENDAR 2026", pageWidth / 2, 50, { align: 'center' });

      // -- Content --
      let yPos = 70;

      const terms = [
        {
          name: "TERM 1",
          dates: "January 6 - March 28, 2026",
          color: [16, 185, 129], // Green
          events: ["Beginning of Term Exams", "Sports Day", "Parent Visitation Day"]
        },
        {
          name: "TERM 2",
          dates: "April 20 - July 3, 2026",
          color: [245, 158, 11], // Gold/Orange
          events: ["Mid-Term Exams", "Music, Dance & Drama", "Study Tour"]
        },
        {
          name: "TERM 3",
          dates: "August 10 - November 20, 2026",
          color: [30, 58, 138], // Navy
          events: ["Mock Exams", "PLE Briefing", "End of Year Party"]
        }
      ];

      terms.forEach((term) => {
        // Term Header Box
        doc.setFillColor(term.color[0], term.color[1], term.color[2]);
        doc.rect(20, yPos, pageWidth - 40, 10, 'F');
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.text(`${term.name}: ${term.dates}`, 25, yPos + 7);

        // Events
        yPos += 18;
        doc.setTextColor(60, 60, 60);
        doc.setFont(undefined, 'normal');
        doc.setFontSize(11);
        doc.text("Key Events:", 25, yPos);
        
        yPos += 7;
        term.events.forEach(event => {
          doc.text(`• ${event}`, 35, yPos);
          yPos += 6;
        });
        
        yPos += 10; // Spacing between terms
      });

      // -- Footer Info --
      yPos += 10;
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.5);
      doc.line(20, yPos, pageWidth - 20, yPos);
      
      yPos += 10;
      doc.setFontSize(10);
      doc.setTextColor(80, 80, 80);
      doc.setFont(undefined, 'bold');
      doc.text("School Hours:", 25, yPos);
      doc.setFont(undefined, 'normal');
      doc.text("Monday - Friday, 7:30 AM - 4:30 PM", 60, yPos);

      // Contact Info Footer
      doc.setFontSize(9);
      doc.setTextColor(150, 150, 150);
      doc.text("Kawoko, Nansana Municipality | +256 701 094 410", pageWidth / 2, 280, { align: 'center' });

      doc.save('academic-calendar-2026.pdf');

      toast({
        title: "Download Complete! 🚀",
        description: "academic-calendar-2026.pdf has been saved.",
        className: "bg-green-50 border-green-200 text-green-800"
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Download Failed",
        description: "Could not generate PDF. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const terms = [
    {
      id: 1,
      name: 'Term 1',
      dates: 'January 6 - March 28, 2026',
      color: 'bg-primary',
      borderColor: 'border-primary',
      textColor: 'text-primary',
      events: ['Beginning of Term Exams', 'Sports Day', 'Parent Visitation Day']
    },
    {
      id: 2,
      name: 'Term 2',
      dates: 'April 20 - July 3, 2026',
      color: 'bg-secondary',
      borderColor: 'border-secondary',
      textColor: 'text-secondary',
      events: ['Mid-Term Exams', 'Music, Dance & Drama', 'Study Tour']
    },
    {
      id: 3,
      name: 'Term 3',
      dates: 'August 10 - November 20, 2026',
      color: 'bg-accent',
      borderColor: 'border-accent',
      textColor: 'text-accent',
      events: ['Mock Exams', 'PLE Briefing', 'End of Year Party']
    }
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Calendar Details */}
        <div className="flex-1 space-y-6">
          <Card className="p-8 border-l-4 border-primary h-full">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  Academic Calendar 2026
                </h3>
                <p className="text-gray-600 mt-2">
                  Our academic year is divided into three terms with breaks in between.
                </p>
              </div>
              <Button 
                onClick={generatePDF} 
                disabled={isDownloading}
                variant="outline" 
                size="sm" 
                className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-white transition-all"
              >
                {isDownloading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Download className="w-4 h-4 mr-2" />
                )}
                {isDownloading ? 'Generating...' : 'PDF'}
              </Button>
            </div>

            <div className="space-y-8 relative">
              {/* Vertical line connecting terms */}
              <div className="absolute left-1.5 top-4 bottom-4 w-0.5 bg-gray-100 hidden sm:block" />

              {terms.map((term, index) => (
                <motion.div 
                  key={term.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative sm:pl-8"
                >
                  <div className={`absolute left-0 top-2 w-3.5 h-3.5 rounded-full border-2 border-white shadow-sm ${term.color} hidden sm:block z-10`} />
                  
                  <div className={`p-4 rounded-xl bg-gray-50/50 border ${term.borderColor} border-opacity-20 hover:shadow-md transition-shadow`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className={`font-bold text-lg ${term.textColor}`}>{term.name}</h4>
                      <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-md border border-gray-100 shadow-sm inline-block w-max mt-1 sm:mt-0">
                        {term.dates}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {term.events.map((event, idx) => (
                        <span key={idx} className="text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded border border-gray-200 flex items-center gap-1.5">
                          <Star className={`w-3 h-3 ${term.textColor}`} />
                          {event}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 bg-gray-50 p-3 rounded-lg">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="font-medium">School Hours:</span>
                <span>Monday - Friday, 7:30 AM - 4:30 PM</span>
              </div>
              <Button 
                onClick={generatePDF} 
                disabled={isDownloading}
                className="w-full md:hidden"
              >
                {isDownloading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Download className="w-4 h-4 mr-2" />
                )}
                {isDownloading ? 'Downloading...' : 'Download Full Calendar'}
              </Button>
            </div>
          </Card>
        </div>

        {/* Visual Calendar Grid Mockup */}
        <div className="flex-1 lg:max-w-md">
          <Card className="p-6 bg-white h-full border border-gray-100 shadow-sm">
            <h4 className="font-heading text-xl font-bold text-gray-900 mb-6 flex items-center justify-between">
              <span>Year at a Glance</span>
              <span className="text-sm font-sans font-normal text-gray-400">2026</span>
            </h4>
            
            <div className="grid grid-cols-3 gap-3">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => {
                // Determine styling based on term
                let containerClass = "bg-gray-50 border-gray-100 text-gray-400";
                let dotClass = "bg-gray-300";
                
                // Term 1: Jan, Feb, Mar
                if (i >= 0 && i <= 2) {
                  containerClass = "bg-green-50 border-green-100 text-green-700";
                  dotClass = "bg-green-400";
                }
                // Term 2: Apr, May, Jun, Jul (First week) - Simplifying for visual grid
                if (i >= 3 && i <= 6) {
                  containerClass = "bg-amber-50 border-amber-100 text-amber-700";
                  dotClass = "bg-amber-400";
                }
                // Term 3: Aug, Sep, Oct, Nov
                if (i >= 7 && i <= 10) {
                  containerClass = "bg-blue-50 border-blue-100 text-blue-700";
                  dotClass = "bg-blue-400";
                }
                
                return (
                  <motion.div
                    key={month}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className={`rounded-lg p-3 text-center border transition-colors cursor-default ${containerClass}`}
                  >
                    <span className="text-xs font-bold block mb-2">{month}</span>
                    <div className="grid grid-cols-7 gap-1 px-1">
                      {[...Array(7)].map((_, d) => (
                        <div key={d} className={`h-1 w-1 rounded-full mx-auto ${d % 2 === 0 ? dotClass : 'bg-gray-200/50'}`} />
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8 justify-center border-t border-gray-100 pt-6">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span>Term 1</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <span>Term 2</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                <div className="w-3 h-3 rounded-full bg-blue-400" />
                <span>Term 3</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AcademicCalendar;