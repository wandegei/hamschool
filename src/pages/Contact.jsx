import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import Card from '../components/Card';
import { SCHOOL_INFO } from '../lib/constants';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: SCHOOL_INFO.location,
      color: 'from-primary to-primary-dark'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: SCHOOL_INFO.phone.join(' / '),
      color: 'from-secondary to-secondary-dark'
    },
    {
      icon: Mail,
      title: 'Email',
      content: SCHOOL_INFO.email,
      color: 'from-accent to-accent-dark'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: SCHOOL_INFO.officeHours,
      color: 'from-primary to-secondary'
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: SCHOOL_INFO.socialMedia.facebook, name: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, url: SCHOOL_INFO.socialMedia.instagram, name: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Twitter, url: SCHOOL_INFO.socialMedia.twitter, name: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: Linkedin, url: SCHOOL_INFO.socialMedia.linkedin, name: 'LinkedIn', color: 'hover:bg-blue-700' }
  ];

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with Ham Preparatory School - Kawoko. Find our location, contact information, and send us a message."
        keywords="contact, location, phone, email, get in touch, Ham Prep contact"
      />

      <div className="min-h-screen pt-24">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-secondary to-accent text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-white/90">
                We'd love to hear from you. Visit us or send a message!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${info.color} mb-4`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {info.content}
                    </p>
                  </motion.div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>

              {/* Map and Social */}
              <div className="space-y-8">
                <Card className="p-0 overflow-hidden">
                  <div className="h-64 bg-gray-200">
                    <iframe
                      src="https://www.openstreetmap.org/export/embed.html?bbox=32.5%2C0.3%2C32.6%2C0.4&layer=mapnik"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      title="School Location Map"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                      Visit Our Campus
                    </h3>
                    <p className="text-gray-700 flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {SCHOOL_INFO.location}
                    </p>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 text-gray-700 transition-all duration-300 ${social.color} hover:text-white`}
                        aria-label={social.name}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;