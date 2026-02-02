import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import StatisticsCounter from '../components/StatisticsCounter';
import FountainOfSuccess from '../components/FountainOfSuccess';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import NewsCarousel from '../components/NewsCarousel';
import { Button } from '../components/ui/button';
import Card from '../components/Card';

const HomePage = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Quality Education',
      description: 'Excellence in both religious and secular curriculum from Nursery to Primary 6'
    },
    {
      icon: Users,
      title: 'Expert Teachers',
      description: 'Highly qualified and dedicated teaching staff committed to student success'
    },
    {
      icon: BookOpen,
      title: 'Vocational Studies',
      description: 'Practical skills training in Bakery, Computer Studies, Tailoring, and more'
    }
  ];

  return (
    <>
      <SEO 
        title="Home"
        description="Ham Preparatory School - Kawoko: The Fountain of Success. Excellent education for Nursery and Primary in both Religious & Secular curriculum."
        keywords="Ham Preparatory School, Kawoko, Uganda school, primary school, nursery school, quality education"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* Statistics Section */}
        <StatisticsCounter />
        
        {/* Fountain of Success Section - Resources */}
        <FountainOfSuccess />

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Ham Prep School?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We provide a nurturing environment where students excel academically and develop essential life skills
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-8 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* News Carousel */}
        <NewsCarousel />

        {/* Testimonials */}
        <TestimonialsCarousel />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-accent via-accent-dark to-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Join The Fountain of Success?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Enroll your child today and give them the foundation for a successful future
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/admissions">
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary-dark text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl group"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-accent hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;