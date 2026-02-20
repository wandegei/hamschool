import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);

  // Track mouse for parallax & cursor sparkles
  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      // Add sparkle at mouse
      setSparkles((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.6 + 0.4,
        },
      ]);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  // Clean up old sparkles
  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((prev) => prev.filter((s) => Date.now() - s.id < 800));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Gradient animation for background overlay
  const gradientAnimation = {
    background: [
      'linear-gradient(to right, #1E3A8A, #10B981, #F59E0B)',
      'linear-gradient(to right, #10B981, #F59E0B, #1E3A8A)',
      'linear-gradient(to right, #F59E0B, #1E3A8A, #10B981)',
    ],
    transition: { duration: 15, repeat: Infinity, ease: 'linear' },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          x: (mousePos.x - window.innerWidth / 2) / 50,
          y: (mousePos.y - window.innerHeight / 2) / 50,
        }}
      >
        <img
          src="https://svxrsjrkghluzxwtmjvt.supabase.co/storage/v1/object/public/HamImages/WhatsApp%20Image%202026-02-19%20at%205.12.36%20PM.jpeg"
          alt="Students in classroom"
          className="w-full h-full object-cover scale-105"
        />
        <motion.div
          className="absolute inset-0 mix-blend-multiply"
          animate={gradientAnimation}
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      {/* Floating Shapes & Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${40 + i * 10} h-${40 + i * 10} bg-white/10 rounded-full blur-3xl`}
            animate={{
              y: [0, (i + 1) * 30, 0],
              x: [0, (i + 1) * 20 * (i % 2 === 0 ? 1 : -1), 0],
              rotate: [0, 15, 0],
            }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
            }}
          />
        ))}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40"
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Cursor Sparkles */}
        {sparkles.map((s) => (
          <motion.div
            key={s.id}
            className="absolute bg-white rounded-full"
            style={{
              width: s.size,
              height: s.size,
              top: s.y,
              left: s.x,
              opacity: s.opacity,
            }}
            animate={{ y: [0, -10, 0], opacity: [s.opacity, 0, 0] }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block bg-secondary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              Excellence in Education Since 2000
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-green-400 animate-text-shimmer mb-6"
          >
            The Fountain of Success
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto font-medium drop-shadow-md"
          >
            Nurturing young minds with excellent education in both Religious & Secular curriculum
          </motion.p>

          {/* Buttons with Sparkle Burst */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <SparkleButton to="/admissions" text="Apply Now" icon={<ArrowRight className="ml-2 w-5 h-5" />} />
            <SparkleButton to="/about" text="Learn More" icon={<BookOpen className="ml-2 w-5 h-5" />} outline />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center shadow-lg"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </motion.div>
      </motion.div>

      {/* Text Shimmer */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -500px 0; }
          100% { background-position: 500px 0; }
        }
        .animate-text-shimmer {
          background-size: 200% auto;
          animation: shimmer 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

// Button with Sparkle Burst
const SparkleButton = ({ to, text, icon, outline }) => {
  const [sparkles, setSparkles] = useState([]);

  const handleHover = (e) => {
    const rect = e.target.getBoundingClientRect();
    const newSparkles = [...Array(5)].map(() => ({
      id: Date.now() + Math.random(),
      x: rect.left + Math.random() * rect.width,
      y: rect.top + Math.random() * rect.height,
      size: Math.random() * 4 + 2,
    }));
    setSparkles(newSparkles);
    setTimeout(() => setSparkles([]), 800);
  };

  return (
    <div className="relative">
      <Link to={to}>
        <Button
          onMouseEnter={handleHover}
          size="lg"
          className={`transition-all duration-300 ${outline ? 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent' : 'bg-primary text-white hover:bg-primary-dark'} px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:scale-105`}
        >
          {text} {icon}
        </Button>
      </Link>
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute bg-white rounded-full"
          style={{ width: s.size, height: s.size, top: s.y, left: s.x }}
          animate={{ y: [0, -10, 0], opacity: [1, 0, 0], scale: [1, 1.5, 0.5] }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
};

export default Hero;
