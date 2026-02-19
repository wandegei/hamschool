import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Search, Filter } from 'lucide-react';
import SEO from '../components/SEO';
import Card from '../components/Card';
import { formatDate, truncateText } from '../lib/utils';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [news, setNews] = useState([]);

  // Mock news data (would be from Supabase in production)
  useEffect(() => {
    const mockNews = [
      {
        id: 1,
        title: 'New Computer Lab Opening Ceremony',
        content: 'We are thrilled to announce the official opening of our state-of-the-art computer laboratory. This modern facility is equipped with the latest technology to enhance our students\' digital literacy and prepare them for the technology-driven future.',
        image: 'https://horizons-cdn.hostinger.com/1f45429d-a9a2-45db-8ba9-c11d21539189/f4ba0bef7c9b307c3b93b804a9bb333f.jpg',
        date: '2026-01-15',
        category: 'Facilities'
      },
      {
        id: 2,
        title: 'Outstanding P7 Examination Results',
        content: 'Ham Preparatory School celebrates exceptional performance in the national Primary Leaving Examinations with a 98% pass rate. Our students have once again demonstrated academic excellence and dedication.',
        image: 'https://svxrsjrkghluzxwtmjvt.supabase.co/storage/v1/object/public/HamImages/WhatsApp%20Image%202026-02-19%20at%205.12.31%20PM.jpeg',
        date: '2026-01-10',
        category: 'Achievements'
      },
      {
        id: 3,
        title: 'Annual Sports Day 2026',
        content: 'Join us for our annual sports day featuring exciting competitions in athletics, football, netball, and more. All parents and guardians are warmly invited to support our young athletes.',
        image: 'https://horizons-cdn.hostinger.com/1f45429d-a9a2-45db-8ba9-c11d21539189/1fb1932de7a2253c6b5615d95769dfd9.jpg',
        date: '2026-02-05',
        category: 'Events'
      },
      {
        id: 4,
        title: 'New Scholarship Program Launch',
        content: 'We are proud to introduce our scholarship program aimed at supporting talented students from underprivileged backgrounds. Applications are now open for the 2026 academic year.',
        image: 'https://horizons-cdn.hostinger.com/1f45429d-a9a2-45db-8ba9-c11d21539189/7c911e8560bebe9d7ad47dabd256ff86.jpg',
        date: '2026-01-20',
        category: 'Admissions'
      },
      {
        id: 5,
        title: 'Science Fair Winners Announced',
        content: 'Congratulations to all participants in our annual Science Fair! Students showcased incredible creativity and scientific knowledge through their innovative projects.',
        image: 'https://horizons-cdn.hostinger.com/1f45429d-a9a2-45db-8ba9-c11d21539189/c35255ef9e082540bd99cbccf66bb4c6.jpg',
        date: '2026-01-25',
        category: 'Achievements'
      },
      {
        id: 6,
        title: 'Parent-Teacher Meeting Scheduled',
        content: 'Our next parent-teacher meeting is scheduled for February 15th. This is an important opportunity to discuss your child\'s progress and academic development.',
        image: 'https://horizons-cdn.hostinger.com/1f45429d-a9a2-45db-8ba9-c11d21539189/4ba0990d2a99c6a7726404f7cf7b0d8d.jpg',
        date: '2026-02-10',
        category: 'Events'
      }
    ];
    setNews(mockNews);
  }, []);

  const categories = ['All', ...new Set(news.map(item => item.category))];

  const filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO 
        title="News & Events"
        description="Stay updated with the latest news, events, and announcements from Ham Preparatory School - Kawoko."
        keywords="school news, events, announcements, Ham Prep updates"
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
                News & Events
              </h1>
              <p className="text-xl text-white/90">
                Stay informed about school activities, achievements, and announcements
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-gray-900"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-12 pr-8 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors appearance-none bg-white text-gray-900"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            {filteredNews.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No news items found.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {filteredNews.map((item, index) => (
                  <Card key={item.id} className="overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="relative h-48">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(item.date)}</span>
                        </div>
                        <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {truncateText(item.content, 120)}
                        </p>
                      </div>
                    </motion.div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default News;