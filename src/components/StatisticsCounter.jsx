import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Trophy, BookOpen } from 'lucide-react';

const StatisticsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { icon: Users, label: 'Students Enrolled', value: 1200, suffix: '+', color: 'text-primary' },
    { icon: GraduationCap, label: 'Qualified Teachers', value: 85, suffix: '+', color: 'text-secondary' },
    { icon: Trophy, label: 'Success Rate', value: 98, suffix: '%', color: 'text-accent' },
    { icon: BookOpen, label: 'Academic Programs', value: 15, suffix: '+', color: 'text-primary' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-r from-accent to-accent-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              isVisible={isVisible}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon: Icon, label, value, suffix, color, isVisible, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="bg-white rounded-xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4`}>
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
      <div className="font-heading text-4xl font-bold text-gray-900 mb-2">
        {count}{suffix}
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
};

export default StatisticsCounter;