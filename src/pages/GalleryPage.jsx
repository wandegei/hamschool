import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Gallery from '../components/Gallery';

const GalleryPage = () => {
  return (
    <>
      <SEO 
        title="Gallery"
        description="Explore photos from Ham Preparatory School - Kawoko showcasing school life, events, facilities, and student achievements."
        keywords="school gallery, photos, school life, events, facilities"
      />

      <div className="min-h-screen pt-24">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-accent to-primary text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                School Gallery
              </h1>
              <p className="text-xl text-white/90">
                Capturing moments of learning, growth, and achievement
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <Gallery />
          </div>
        </section>
      </div>
    </>
  );
};

export default GalleryPage;