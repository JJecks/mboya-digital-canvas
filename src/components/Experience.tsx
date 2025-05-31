
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Graphics Designer",
      company: "JOOUST",
      location: "Bondo, Kenya",
      period: "March 2025",
      type: "Design Role",
      description: "Leading visual communication and branding initiatives for university events and academic materials.",
      achievements: ["Event Branding", "Academic Material Design", "Visual Identity"]
    },
    {
      title: "IT Specialist",
      company: "Barkawaga Primary & Junior",
      location: "Bondo, Kenya",
      period: "April 2024 - February 2025",
      type: "Technical Role",
      description: "Managed IT infrastructure and provided technical support for educational technology integration.",
      achievements: ["System Administration", "Tech Integration", "Staff Training"]
    },
    {
      title: "Science Teacher",
      company: "Barkawaga Junior School",
      location: "Bondo, Kenya",
      period: "May - August 2024",
      type: "Education",
      description: "Taught Physics and Chemistry to junior secondary students with innovative teaching methodologies.",
      achievements: ["Curriculum Development", "Student Mentoring", "Practical Labs"]
    },
    {
      title: "Manager",
      company: "Connect Cyber Café",
      location: "Bondo, Kenya",
      period: "January 2022 - March 2024",
      type: "Management",
      description: "Oversaw daily operations, customer service, and technical services in a busy cyber café environment.",
      achievements: ["Operations Management", "Customer Service", "Technical Support"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Education Science With IT",
      institution: "Jaramogi Oginga Odinga University of Science and Technology (JOOUST)",
      period: "September 2021 - Present",
      subjects: "Physics and Chemistry",
      status: "Final Year"
    }
  ];

  const achievements = [
    {
      title: "Certificate of Hospitality",
      organization: "JOOUST Christian Union",
      year: "2025",
      icon: Award
    },
    {
      title: "KCSE Grade A-",
      organization: "Kenya Certificate of Secondary Education",
      year: "2021",
      icon: GraduationCap
    },
    {
      title: "KCPE 386 Marks",
      organization: "Kenya Certificate of Primary Education",
      year: "2016",
      icon: GraduationCap
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through diverse roles combining education, technology, and creative excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Professional Experience */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-l-4 border-l-purple-500 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h4>
                        <p className="text-lg text-purple-600 font-semibold">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="border-purple-200 text-purple-700">
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Education</h3>
              {education.map((edu, index) => (
                <Card key={index} className="border-l-4 border-l-emerald-500 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{edu.degree}</h4>
                    <p className="text-emerald-600 font-semibold mb-2">{edu.institution}</p>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                    <p className="text-gray-700 mb-2">Major: {edu.subjects}</p>
                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                      {edu.status}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                          <achievement.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{achievement.title}</h4>
                          <p className="text-sm text-gray-600">{achievement.organization}</p>
                          <p className="text-xs text-gray-500">{achievement.year}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
