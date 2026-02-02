import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '../components/ui/button';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'School Life', 'Events', 'Facilities', 'Achievements'];

  const images = [
    {
      url: 'https://horizons-cdn.hostinger.com/1f45429d-a9a2-45db-8ba9-c11d21539189/3d927806ed3d5cfab74c836476e47832.jpg',
      category: 'School Life',
      title: 'Students in Uniform'
    },
    {
      url: 'https://horizons-cdn.hostinger.com/1f45429d-a9a2-45db-8ba9-c11d21539189/f4ba0bef7c9b307c3b93b804a9bb333f.jpg',
      category: 'Facilities',
      title: 'School Buildings'
    },
    {
      url: 'https://horizons-cdn.hostinger.com/1f45429d-a9a2-45db-8ba9-c11d21539189/1fb1932de7a2253c6b5615d95769dfd9.jpg',
      category: 'School Life',
      title: 'Happy Students'
    },
    {
      url: 'https://horizons-cdn.hostinger.com/1f45429d-a9a2-45db-8ba9-c11d21539189/7c911e8560bebe9d7ad47dabd256ff86.jpg',
      category: 'Events',
      title: 'School Activities'
    },
    {
      url: 'https://horizons-cdn.hostinger.com/1f45429d-a9a2-45db-8ba9-c11d21539189/c35255ef9e082540bd99cbccf66bb4c6.jpg',
      category: 'Achievements',
      title: 'Student Success'
    },
    {
      url: 'https://horizons-cdn.hostinger.com/1f45429d-a9a2-45db-8ba9-c11d21539189/4ba0990d2a99c6a7726404f7cf7b0d8d.jpg',
      category: 'School Life',
      title: 'Learning Together'
    },
    {
      url: 'https://images.unsplash.com/photo-1687600154329-150952c73169',
      category: 'Facilities',
      title: 'Modern Classrooms'
    },
    {
      url: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72',
      category: 'Events',
      title: 'School Events'
    },
    {
      url: 'https://images.unsplash.com/photo-1688853739679-3bc19f690d98',
      category: 'Facilities',
      title: 'Campus View'
    },
    {
      url: 'https://images.unsplash.com/photo-1581056771370-4814aa6dd705',
      category: 'School Life',
      title: 'Students Learning'
    },
    {
      url: 'https://images.unsplash.com/photo-1603201667141-5a2d4c673378',
      category: 'Achievements',
      title: 'Academic Excellence'
    },
    {
      url: 'https://images.unsplash.com/photo-1698678640513-ff0b0032f85a',
      category: 'Events',
      title: 'Special Occasions'
    }
  ];

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? 'default' : 'outline'}
            className={`rounded-full ${
              selectedCategory === category
                ? 'bg-primary hover:bg-primary-dark'
                : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Image Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.url}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    {image.category}
                  </span>
                  <p className="text-white font-semibold">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center">
                <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">
                  {selectedImage.category}
                </span>
                <p className="text-white text-xl font-semibold">{selectedImage.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;