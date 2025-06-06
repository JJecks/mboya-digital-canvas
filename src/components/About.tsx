
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Globe, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const languages = ['English', 'Kiswahili', 'Luo', 'Gusii'];
  const interests = ['Poetry', 'Adventure', 'Wildlife Scrutiny', 'Digital Innovation'];

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1DgVQBghuroKSKaqoY1MM3jZIF5J22Yt1/view?usp=drive_link', '_blank');
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/179b2967-f99c-46db-97ba-c5a3a23930cd.png" 
                  alt="Thomas Ouko Mboya"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                🎨
              </div>
            </div>

            <div className="text-center lg:text-left">
              <Button 
                onClick={handleDownloadCV}
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 w-5 h-5" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Bio and Details */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                I am a Kenyan resident and a soon-to-be graduate of Jaramogi University, where I pursued a Bachelor's in Education Science With IT (Physics and Chemistry). I am moral, transparent, enthusiastic, dynamic and multi-talented, with a mission to merge my inborn creative gifts with technical expertise.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="w-8 h-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-800">Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-emerald-200 hover:border-emerald-400 transition-colors duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="w-8 h-8 text-emerald-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-800">Interests</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mission Statement */}
            <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-2" />
                  Mission
                </h3>
                <p className="text-gray-700 italic">
                  "To bridge the gap between artistic expression and technological innovation, creating meaningful experiences that inspire and educate."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
