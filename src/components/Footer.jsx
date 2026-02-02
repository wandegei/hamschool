import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  X as XIcon,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
} from 'lucide-react';
import { SCHOOL_INFO } from '../lib/constants';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Newsletter Subscription",
      description: "This feature isn't implemented yet—but you can request it next! 🚀",
    });
    setEmail('');
  };

  const quickLinks = {
    'About Us': [
      { name: 'Our History', path: '/about' },
      { name: 'Mission & Vision', path: '/about' },
      { name: 'Leadership', path: '/about' },
      { name: 'Facilities', path: '/about' },
    ],
    'Academics': [
      { name: 'Curriculum', path: '/academics' },
      { name: 'Subjects', path: '/academics' },
      { name: 'Academic Calendar', path: '/academics' },
      { name: 'Resources', path: '/academics' },
    ],
    'Admissions': [
      { name: 'How to Apply', path: '/admissions' },
      { name: 'Requirements', path: '/admissions' },
      { name: 'Fees Structure', path: '/admissions' },
      { name: 'FAQs', path: '/admissions' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, url: SCHOOL_INFO.socialMedia.facebook, name: 'Facebook' },
    { icon: Instagram, url: SCHOOL_INFO.socialMedia.instagram, name: 'Instagram' },
    { icon: XIcon, url: SCHOOL_INFO.socialMedia.x, name: 'X' },
    { icon: Linkedin, url: SCHOOL_INFO.socialMedia.linkedin, name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-accent text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary p-2 rounded-lg transition-transform hover:scale-110">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-heading text-lg font-bold">{SCHOOL_INFO.name}</span>
                <p className="text-xs text-secondary">{SCHOOL_INFO.motto}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">{SCHOOL_INFO.tagline}</p>

            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-secondary flex-shrink-0" />
                <span className="text-gray-300">{SCHOOL_INFO.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <div className="flex flex-col">
                  {SCHOOL_INFO.phone.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone}`}
                      className="text-gray-300 hover:text-secondary transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a
                  href={`mailto:${SCHOOL_INFO.email}`}
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  {SCHOOL_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(quickLinks).map(([title, links]) => (
            <div key={title}>
              <span className="font-heading text-lg font-bold mb-4 block border-b-2 border-primary pb-2">
                {title}
              </span>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-secondary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <span className="font-heading text-lg font-bold mb-4 block border-b-2 border-primary pb-2">
              Stay Connected
            </span>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for updates and news.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                required
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark transition-transform hover:scale-105"
              >
                Subscribe
              </Button>
            </form>

            <div className="mt-6">
  <p className="text-sm font-semibold mb-3">Follow Us</p>
  <div className="flex space-x-3">
    {socialLinks.map((social) => (
      <a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 p-2 rounded-lg hover:bg-primary hover:scale-110 transition-all flex items-center justify-center"
        aria-label={social.name}
      >
        <social.icon className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
      </a>
    ))}
  </div>
</div>

          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} {SCHOOL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
