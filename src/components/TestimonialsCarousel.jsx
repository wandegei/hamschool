import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '../components/ui/button';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Namukasa',
      role: 'Parent',
      image: 'https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=200',
      rating: 5,
      text: 'Ham Preparatory School has transformed my daughter\'s learning journey. The teachers are dedicated, and the curriculum is well-balanced. I highly recommend this school to any parent seeking quality education.',
    },
    {
      name: 'David Mukasa',
      role: 'Parent',
      image: 'https://images.unsplash.com/photo-1701229404076-5629809b331d?w=200',
      rating: 5,
      text: 'The vocational training programs are exceptional. My son has developed practical skills alongside academic knowledge. The school truly prepares students for real-world success.',
    },
    {
      name: 'Grace Nakato',
      role: 'Former Student',
      image: 'https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=200',
      rating: 5,
      text: 'I attended Ham Prep from nursery to P6. The foundation I received here helped me excel in secondary school. The teachers genuinely care about each student\'s success.',
    },
    {
      name: 'John Ssemakula',
      role: 'Teacher',
      image: 'https://images.unsplash.com/photo-1701229404076-5629809b331d?w=200',
      rating: 5,
      text: 'Working at Ham Preparatory School has been incredibly rewarding. The supportive environment and modern facilities make teaching a joy. We truly embody our motto as the fountain of success.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What People Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied parents, students, and dedicated staff
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative"
            >
              <Quote className="absolute top-8 left-8 w-12 h-12 text-secondary/20" />
              
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover shadow-lg"
                />
                <div className="text-center md:text-left">
                  <h3 className="font-heading text-2xl font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-primary font-semibold">{testimonials[currentIndex].role}</p>
                  <div className="flex gap-1 justify-center md:justify-start mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-primary hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-primary hover:bg-primary hover:text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;