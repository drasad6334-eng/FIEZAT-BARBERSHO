📄 /frontend/src/components/About.jsx
import React from 'react';
import { Clock, MapPin, Award, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { businessInfo, whyChooseUs } from '../mock';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - About Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About {businessInfo.name}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Welcome to {businessInfo.name}, your premier destination for professional barbering services in Kluang, Johor. We take pride in delivering exceptional haircuts and grooming services in a comfortable, welcoming environment.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our team of experienced barbers combines traditional barbering techniques with modern styling trends to give you the perfect look. Whether you're looking for a classic cut or a contemporary style, we've got you covered.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {businessInfo.description}
              </p>
            </div>

            {/* Right Column - Business Info */}
            <div className="space-y-6">
              {/* Hours Card */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Opening Hours</h3>
                  </div>
                  <div className="space-y-2">
                    {businessInfo.hours.map((schedule, index) => (
                      <div key={index} className="flex justify-between text-gray-700">
                        <span className="font-medium">{schedule.day}</span>
                        <span>{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Location</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{businessInfo.address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 font-semibold hover:underline"
                  >
                    Get Directions →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item) => (
                <Card key={item.id} className="border-2 hover:border-amber-500 transition-all text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {item.id === 1 && <Award className="w-8 h-8 text-amber-600" />}
                      {item.id === 2 && <Users className="w-8 h-8 text-amber-600" />}
                      {item.id === 3 && <Award className="w-8 h-8 text-amber-600" />}
                      {item.id === 4 && <Award className="w-8 h-8 text-amber-600" />}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
