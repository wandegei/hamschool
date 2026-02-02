import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import StaffDirectory from '../components/StaffDirectory';

const StaffPage = () => {
  return (
    <>
      <SEO 
        title="Our Staff"
        description="Meet the dedicated teachers and staff at Ham Preparatory School - Kawoko committed to student success."
        keywords="teachers, staff, faculty, school team"
      />

      <div className="min-h-screen pt-24">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                Our Dedicated Team
              </h1>
              <p className="text-xl text-white/90">
                Meet the qualified professionals committed to your child's success
              </p>
            </motion.div>
          </div>
        </section>

        {/* Staff Directory */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <StaffDirectory />
          </div>
        </section>
      </div>
    </>
  );
};

export default StaffPage;