📄 /frontend/src/components/Hero.jsx
import React from 'react';
import { Phone, Calendar, Star, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { businessInfo } from '../mock';

export const Hero = () => {
  const handleBooking = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-amber-400 font-semibold">{businessInfo.rating} Rating</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300">{businessInfo.totalReviews}+ Happy Customers</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Premium Barbering in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Kluang, Johor
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
            {businessInfo.description}
          </p>
          <p className="text-lg text-amber-400 font-semibold mb-12">
            {businessInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => window.location.href = `tel:${businessInfo.phone}`}
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-8 py-6 rounded-lg shadow-lg shadow-amber-500/30 transition-all hover:shadow-amber-500/50 hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {businessInfo.phone}
            </Button>
            <Button
              onClick={handleBooking}
              size="lg"
              variant="outline"
              className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black font-bold text-lg px-8 py-6 rounded-lg transition-all hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
          </div>

          {/* Location Info */}
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <MapPin className="w-5 h-5 text-amber-400" />
            <span>{businessInfo.address}</span>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="text-3xl font-bold text-amber-400 mb-2">10+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="text-3xl font-bold text-amber-400 mb-2">5+</div>
              <div className="text-gray-300">Expert Barbers</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="text-3xl font-bold text-amber-400 mb-2">1000+</div>
              <div className="text-gray-300">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
