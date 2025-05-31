
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Monitor, Book, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Fine Art Commissions",
      description: "Custom portraits, paintings, and artistic pieces tailored to your vision using traditional mediums like oil, watercolor, and charcoal.",
      features: ["Portrait Paintings", "Landscape Art", "Abstract Compositions", "Charcoal Drawings"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Monitor,
      title: "Graphic Design",
      description: "Professional visual design services for events, branding, marketing materials, and digital content creation.",
      features: ["Event Branding", "Logo Design", "Poster Creation", "Digital Artwork"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "IT & Cyber Services",
      description: "Comprehensive digital services including typesetting, online solutions, printing services, and technical consultation.",
      features: ["Typesetting", "Online Services", "Printing Solutions", "Digital Consultation"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Book,
      title: "Teaching & Tutoring",
      description: "Educational services in Physics, Chemistry, and Pretechnical Studies with personalized learning approaches.",
      features: ["Physics Tutoring", "Chemistry Lessons", "Pretechnical Studies", "Academic Consultation"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive creative and technical services that blend artistic vision with professional expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute -top-2 -left-2 w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Offerings:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${service.color} text-white font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                    Learn More
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Placeholder */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Client Testimonials
            </h3>
            <p className="text-gray-600 italic">
              "Thomas's unique blend of artistic talent and technical expertise brought our project to life in ways we never imagined possible."
            </p>
            <p className="text-gray-500 mt-2">- Coming Soon -</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
