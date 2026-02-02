import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Calendar, Award } from 'lucide-react';
import ResourceCard from '../components/ResourceCard';
import { staggerContainer, staggerItem } from '../lib/animations';

const DownloadableResources = () => {
  const resources = [
    {
      id: 1,
      title: "Curriculum Syllabus",
      description: "Complete curriculum guidelines and learning objectives for all subjects from Nursery to Primary 6.",
      fileSize: "2.4 MB",
      fileName: "curriculum-syllabus-2026.pdf",
      icon: BookOpen
    },
    {
      id: 2,
      title: "Study Guides",
      description: "Comprehensive study materials, revision notes, and exam preparation guides for candidates.",
      fileSize: "1.8 MB",
      fileName: "study-guides-2026.pdf",
      icon: FileText
    },
    {
      id: 3,
      title: "Academic Calendar 2026",
      description: "Detailed academic calendar including term dates, holidays, and important school events.",
      fileSize: "1.2 MB",
      fileName: "academic-calendar-2026.pdf",
      icon: Calendar
    },
    {
      id: 4,
      title: "Extracurricular Activities",
      description: "Brochure detailing sports, music, dance, and drama clubs available for students.",
      fileSize: "3.5 MB",
      fileName: "extracurricular-activities-2026.pdf",
      icon: Award
    }
  ];

  return (
    <section className="w-full">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Downloadable Resources
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Access important documents, study materials, and guidelines to support your child's education.
        </p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {resources.map((resource) => (
          <motion.div key={resource.id} variants={staggerItem} className="h-full">
            <ResourceCard 
              {...resource}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default DownloadableResources;