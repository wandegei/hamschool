import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Globe, Palette, Languages } from 'lucide-react';
import SEO from '../components/SEO';
import Card from '../components/Card';
import { useToast } from '../components/ui/use-toast';
import AcademicCalendar from '../components/AcademicCalendar';
import DownloadableResources from '../components/DownloadableResources';

const Academics = () => {
  // Toast is handled within child components, but hook is available if needed at page level
  const { toast } = useToast();

  const subjects = [
    {
      category: 'Sciences',
      icon: Microscope,
      color: 'from-primary to-primary-dark',
      items: ['Biology', 'Chemistry', 'Physics', 'Mathematics']
    },
    {
      category: 'Languages',
      icon: Languages,
      color: 'from-secondary to-secondary-dark',
      items: ['English', 'Luganda', 'Swahili']
    },
    {
      category: 'Humanities',
      icon: Globe,
      color: 'from-accent to-accent-dark',
      items: ['Social Studies', 'Religious Education', 'History', 'Geography']
    },
    {
      category: 'Arts',
      icon: Palette,
      color: 'from-primary to-secondary',
      items: ['Music', 'Art & Craft', 'Drama', 'Physical Education']
    }
  ];

  const methodology = [
    {
      title: 'Interactive Learning',
      description: 'Hands-on activities and practical demonstrations to enhance understanding'
    },
    {
      title: 'Small Class Sizes',
      description: 'Individual attention with teacher-student ratio ensuring personalized support'
    },
    {
      title: 'Modern Technology',
      description: 'Computer-aided learning and digital resources for 21st-century education'
    },
    {
      title: 'Continuous Assessment',
      description: 'Regular evaluations to track progress and identify areas for improvement'
    }
  ];

  return (
    <>
      <SEO 
        title="Academics"
        description="Explore Ham Preparatory School's comprehensive curriculum, subjects, teaching methodology, and academic programs."
        keywords="curriculum, subjects, academic programs, teaching methods, Ham Prep academics"
      />

      <div className="min-h-screen pt-24">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                Academic Excellence
              </h1>
              <p className="text-xl text-white/90">
                A comprehensive curriculum designed to nurture well-rounded students
              </p>
            </motion.div>
          </div>
        </section>

        {/* Curriculum Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
                Our Curriculum
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                Ham Preparatory School follows the Uganda National Curriculum complemented with religious studies. 
                We offer a balanced education that combines academic excellence with moral and practical development.
              </p>
            </motion.div>

            {/* Subject Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {subjects.map((category, index) => (
                <Card key={index} className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${category.color} mb-4`}>
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="text-gray-700 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Methodology */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Teaching Approach
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Modern, student-centered methods that inspire learning and growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {methodology.map((method, index) => (
                <Card key={index} className="p-8">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                      {method.title}
                    </h3>
                    <p className="text-gray-700">{method.description}</p>
                  </motion.div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Class Structure */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
                Class Structure
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                    Nursery Section
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Age-appropriate learning activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Play-based education</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Foundation skills development</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-secondary mb-4">
                    Primary Section (P1-P6)
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                      <span>Comprehensive curriculum coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                      <span>Exam preparation and practice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                      <span>Leadership and character building</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Academic Calendar */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AcademicCalendar />
            </div>
          </div>
        </section>

        {/* Downloadable Resources */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <DownloadableResources />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Academics;