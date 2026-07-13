📄 /frontend/src/components/Footer.jsx
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { businessInfo } from '../mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center font-bold text-black text-xl">
                F
              </div>
              <div>
                <h3 className="font-bold text-lg">{businessInfo.name}</h3>
                <p className="text-amber-400 text-sm">{businessInfo.tagline}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {businessInfo.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-amber-400">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <a href={`tel:${businessInfo.phone}`} className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${businessInfo.email}`} className="text-gray-400 hover:text-amber-400 transition-colors text-sm break-all">
                  {businessInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  {businessInfo.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-amber-400">Opening Hours</h4>
            <p className="text-gray-400 text-sm mb-2">Daily</p>
            <p className="text-white font-semibold mb-4">10:00 AM - 10:00 PM</p>
            
            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-black" />
              </a>
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-black" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {businessInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Crafted with care for your grooming needs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
