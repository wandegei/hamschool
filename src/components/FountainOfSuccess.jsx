import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Calendar } from 'lucide-react';
import ResourceCard from '../components/ResourceCard';
import { staggerContainer, staggerItem } from '../lib/animations';

const FountainOfSuccess = () => {
  const resources = [
    {
      id: 1,
      title: "Curriculum Syllabus",
      description: "Our integrated curriculum combining National standards with religious values for holistic development.",
      fileSize: "2.4 MB",
      fileName: "curriculum-syllabus-2026.pdf",
      icon: BookOpen
    },
    {
      id: 2,
      title: "Academic Calendar",
      description: "Stay updated with term dates, holidays, and key events for the 2026 academic year.",
      fileSize: "1.2 MB",
      fileName: "academic-calendar-2026.pdf",
      icon: Calendar
    },
    {
      id: 3,
      title: "Study Guides",
      description: "Essential learning materials and revision guides to support academic excellence.",
      fileSize: "1.8 MB",
      fileName: "study-guides-2026.pdf",
      icon: FileText
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2 block">
            Ham Preparatory School
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            The Fountain of Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nurturing young minds with excellent education in both <span className="text-primary font-semibold">Religious</span> & <span className="text-secondary font-semibold">Secular</span> curriculum.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {resources.map((resource) => (
            <motion.div key={resource.id} variants={staggerItem} className="h-full">
              <ResourceCard {...resource} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FountainOfSuccess;