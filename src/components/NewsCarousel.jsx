import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { formatDate } from "../lib/utils";

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const newsItems = [
    {
      id: 1,
      title: "New Computer Lab Opening",
      excerpt:
        "We are excited to announce the opening of our state-of-the-art computer lab equipped with the latest technology to enhance digital learning.",
      image:
        "https://horizons-cdn.hostinger.com/1f45429d-a9a2-45db-8ba9-c11d21539189/f4ba0bef7c9b307c3b93b804a9bb333f.jpg",
      date: "2026-01-15",
      category: "Facilities",
    },
    {
      id: 2,
      title: "Outstanding Performance in National Exams",
      excerpt:
        "Our P6 students achieved a remarkable 98% pass rate in the national examinations, demonstrating academic excellence.",
      image:
        "https://horizons-cdn.hostinger.com/1f45429d-a9a2-45db-8ba9-c11d21539189/3d927806ed3d5cfab74c836476e47832.jpg",
      date: "2026-01-10",
      category: "Achievements",
    },
    {
      id: 3,
      title: "Annual Sports Day 2026",
      excerpt:
        "Join us for our annual sports day featuring athletics, football, and netball competitions. All parents and guardians are welcome!",
      image:
        "https://horizons-cdn.hostinger.com/1f45429d-a9a2-45db-8ba9-c11d21539189/1fb1932de7a2253c6b5615d95769dfd9.jpg",
      date: "2026-02-05",
      category: "Events",
    },
    {
      id: 4,
      title: "Scholarship Program Launch",
      excerpt:
        "Introducing our new scholarship program for outstanding students from underprivileged backgrounds. Applications now open.",
      image:
        "https://horizons-cdn.hostinger.com/1f45429d-a9a2-45db-8ba9-c11d21539189/7c911e8560bebe9d7ad47dabd256ff86.jpg",
      date: "2026-01-20",
      category: "Admissions",
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, newsItems.length]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed about school events, achievements, and announcements
          </p>
        </motion.div>

        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {newsItems.map((news) => (
                <div key={news.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <span className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {news.category}
                      </span>
                    </div>

                    <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
                      <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">
                          {formatDate(news.date)}
                        </span>
                      </div>

                      <h3 className="font-heading text-3xl font-bold mb-4">
                        {news.title}
                      </h3>

                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        {news.excerpt}
                      </p>

                      <Link to="/news">
                        <Button className="group bg-primary hover:bg-primary-dark">
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute inset-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <Button
              size="icon"
              onClick={() =>
                setCurrentIndex(
                  (prev) => (prev - 1 + newsItems.length) % newsItems.length
                )
              }
              className="pointer-events-auto bg-white/90 text-gray-900 rounded-full shadow-lg"
            >
              <ChevronLeft />
            </Button>

            <Button
              size="icon"
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % newsItems.length)
              }
              className="pointer-events-auto bg-white/90 text-gray-900 rounded-full shadow-lg"
            >
              <ChevronRight />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-gray-300 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
