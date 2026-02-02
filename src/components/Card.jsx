import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const Card = ({ 
  children, 
  className, 
  hoverScale = true, 
  ...props 
}) => {
  return (
    <motion.div
      className={cn(
        'bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300',
        hoverScale && 'hover:shadow-2xl hover:scale-[1.02]',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;