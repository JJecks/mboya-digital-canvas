
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-emerald-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-60 right-32 w-48 h-48 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-56 h-56 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="w-48 h-48 mx-auto mb-8 rounded-full shadow-2xl border-4 border-white/20 overflow-hidden">
          <img 
            src="/lovable-uploads/179b2967-f99c-46db-97ba-c5a3a23930cd.png" 
            alt="Thomas Ouko Mboya"
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gold-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent animate-fade-in">
          Thomas Ouko Mboya
        </h1>
        
        <h2 className="text-2xl md:text-3xl mb-8 text-gray-200 font-light tracking-wide animate-fade-in">
          Visual Art • Digital Precision • Academic Excellence
        </h2>
        
        <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Merging inborn creative gifts with technical expertise to create meaningful digital experiences and visual narratives.
        </p>
        
        <Button 
          onClick={scrollToAbout}
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          Explore My Work
          <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
