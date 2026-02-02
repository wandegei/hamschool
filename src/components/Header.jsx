import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCHOOL_INFO } from '../lib/constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'News', path: '/news' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Staff', path: '/staff' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 shadow-lg backdrop-blur-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 group relative"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
            className="bg-primary p-2 rounded-lg group-hover:bg-primary-dark transition-colors"
          >
            <GraduationCap className="w-8 h-8 text-white" />
          </motion.div>
          <div>
            <h1 className="font-heading text-xl md:text-2xl font-bold text-gray-900">
              {SCHOOL_INFO.name}
            </h1>
            <p className="text-xs text-primary font-medium">
              {SCHOOL_INFO.motto}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.path}
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
            >
              <Link
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium relative transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-white bg-primary'
                    : 'text-gray-700 hover:text-primary hover:bg-primary/10'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg overflow-hidden"
            >
              <div className="flex flex-col py-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    custom={idx}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={linkVariants}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 font-medium rounded-lg transition-all ${
                        location.pathname === link.path
                          ? 'bg-primary text-white'
                          : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Optional Gradient Overlay + Shimmer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'linear-gradient(to right, #10B981, #1E3A8A, #F59E0B)',
            'linear-gradient(to right, #1E3A8A, #F59E0B, #10B981)',
            'linear-gradient(to right, #F59E0B, #10B981, #1E3A8A)',
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ mixBlendMode: 'overlay', opacity: 0.1 }}
      />
    </header>
  );
};

export default Header;
