import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';
import { validateEmail, validatePhone } from '../lib/utils';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    parentName: '',
    email: '',
    phone: '',
    currentSchool: '',
    classApplying: '',
    documents: null,
    termsAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.studentName.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter student's name",
        variant: "destructive"
      });
      return;
    }

    if (!formData.dateOfBirth) {
      toast({
        title: "Validation Error",
        description: "Please enter date of birth",
        variant: "destructive"
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    if (!validatePhone(formData.phone)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid phone number",
        variant: "destructive"
      });
      return;
    }

    if (!formData.termsAccepted) {
      toast({
        title: "Validation Error",
        description: "Please accept the terms and conditions",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Note: Supabase integration would go here
      // For now, saving to localStorage
      const applications = JSON.parse(localStorage.getItem('admission_applications') || '[]');
      const newApplication = {
        id: Date.now(),
        studentName: formData.studentName,
        dateOfBirth: formData.dateOfBirth,
        parentName: formData.parentName,
        email: formData.email,
        phone: formData.phone,
        currentSchool: formData.currentSchool,
        classApplying: formData.classApplying,
        documentsUrl: formData.documents ? formData.documents.name : null,
        created_at: new Date().toISOString()
      };
      applications.push(newApplication);
      localStorage.setItem('admission_applications', JSON.stringify(applications));

      toast({
        title: "Application Submitted Successfully! ✅",
        description: "We have received your application. Our admissions team will contact you soon.",
      });

      setFormData({
        studentName: '',
        dateOfBirth: '',
        parentName: '',
        email: '',
        phone: '',
        currentSchool: '',
        classApplying: '',
        documents: null,
        termsAccepted: false
      });

      // Reset file input
      const fileInput = document.getElementById('documents');
      if (fileInput) fileInput.value = '';
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-2xl p-8"
    >
      <h3 className="font-heading text-3xl font-bold text-gray-900 mb-6">
        Admission Application Form
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="studentName" className="block text-sm font-semibold text-gray-700 mb-2">
              Student Full Name *
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-gray-900"
              placeholder="Enter student's full name"
            />
          </div>

          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-semibold text-gray-700 mb-2">
              Date of Birth *
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-gray-900"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="parentName" className="block text-sm font-semibold text-gray-700 mb-2">
              Parent/Guardian Name *
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-gray-900"
              placeholder="Enter parent's name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-gray-900"
              placeholder="parent.email@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-gray-900"
              placeholder="+256 700 000 000"
            />
          </div>

          <div>
            <label htmlFor="currentSchool" className="block text-sm font-semibold text-gray-700 mb-2">
              Current School
            </label>
            <input
              type="text"
              id="currentSchool"
              name="currentSchool"
              value={formData.currentSchool}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-gray-900"
              placeholder="Previous school name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="classApplying" className="block text-sm font-semibold text-gray-700 mb-2">
            Class Applying For *
          </label>
          <select
            id="classApplying"
            name="classApplying"
            value={formData.classApplying}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-gray-900"
          >
            <option value="">Select class</option>
            <option value="Nursery">Nursery</option>
            <option value="P1">Primary 1</option>
            <option value="P2">Primary 2</option>
            <option value="P3">Primary 3</option>
            <option value="P4">Primary 4</option>
            <option value="P5">Primary 5</option>
            <option value="P6">Primary 6</option>
          </select>
        </div>

        <div>
          <label htmlFor="documents" className="block text-sm font-semibold text-gray-700 mb-2">
            Upload Documents (Birth Certificate, Previous Report)
          </label>
          <div className="relative">
            <input
              type="file"
              id="documents"
              name="documents"
              onChange={handleChange}
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-gray-900"
            />
            <Upload className="absolute right-4 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
          {formData.documents && (
            <p className="text-sm text-primary mt-2">Selected: {formData.documents.name}</p>
          )}
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="termsAccepted"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
            className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <label htmlFor="termsAccepted" className="text-sm text-gray-700">
            I accept the terms and conditions and confirm that all information provided is accurate. *
          </label>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-dark text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting Application...
            </>
          ) : (
            <>
              Submit Application
              <CheckCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default AdmissionForm;