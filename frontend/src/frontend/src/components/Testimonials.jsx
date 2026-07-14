
📄 /frontend/src/components/Testimonials.jsx
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { testimonials, businessInfo } from '../mock';

export const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-amber-400 font-semibold">{businessInfo.rating} Average Rating</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-zinc-900 border-zinc-800 hover:border-amber-500/50 transition-all">
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-amber-500 mb-4" />
                <div className="flex space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-2">Verified reviews from</p>
          <div className="inline-flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">Google</span>
            <div className="flex space-x-1">
              {renderStars(5)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
