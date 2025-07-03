import React from 'react';
import { Code, Palette, Zap, Heart, Award, Calendar, MapPin, Mail, Phone, GraduationCap, BookOpen, Folder } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'HTML5 & CSS3', level: 70, color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript (ES6+)', level: 70, color: 'from-yellow-500 to-orange-500' },
    { name: 'React.js', level: 65, color: 'from-blue-500 to-cyan-500' },
    { name: 'Tailwind CSS', level: 70, color: 'from-cyan-500 to-blue-500' },
    { name: 'Git & GitHub', level: 75, color: 'from-gray-600 to-gray-800' },
    { name: 'Responsive Design', level: 70, color: 'from-pink-500 to-rose-500' },
    { name: 'Java', level: 75, color: 'from-red-600 to-orange-600' },
    { name: 'Python', level: 60, color: 'from-green-500 to-blue-500' },
  ];

  const stats = [
    { icon: Folder, value: '10', label: 'Mini Projects Completed' },
    { icon: Heart, value: '2', label: 'Main Projects Undergoing' },
    { icon: GraduationCap, value: 'B.E.', label: 'College Studying Engineering' },
    { icon: Code, value: '8+', label: 'Technologies' },
  ];

  const technologies = [
    { name: 'HTML5', color: 'bg-orange-500' },
    { name: 'CSS3', color: 'bg-blue-500' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'React.js', color: 'bg-cyan-500' },
    { name: 'Tailwind CSS', color: 'bg-teal-500' },
    { name: 'Git & GitHub', color: 'bg-gray-700' },
    { name: 'Java', color: 'bg-red-600' },
    { name: 'Python', color: 'bg-green-600' },
  ];

  const education = [
    {
      degree: 'B.E. Electronics and Communication Engineering',
      year: '2026',
      grade: 'CGPA 7.64',
      institution: 'Rathinam Technical Campus, Anna University',
      location: 'Echanari, Coimbatore'
    },
    {
      degree: 'Higher Secondary Certificate',
      year: '2022',
      grade: '74.6%',
      institution: 'Tagore Matric.Hr.Sec.School',
      location: 'Deviyakurichi, Salem'
    },
    {
      degree: 'Secondary School Leaving Certificate',
      year: '2020',
      grade: '92%',
      institution: 'Tagore Matric.Hr.Sec.School',
      location: 'Deviyakurichi, Salem'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A motivated B.E. Electronics and Communication Engineer with strong technical skills and valuable knowledge gained through project experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Personal Statement */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  About Myself
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A motivated B.E. Electronics and Communication Engineer with strong technical skills and valuable 
                  knowledge gained through project experience. Eager to contribute effectively to innovative projects 
                  while continually enhancing my expertise and growing both professionally and personally in a 
                  dynamic organization.
                </p>
              </div>

              {/* Education Section */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  <span>Education</span>
                </h4>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-blue-200">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                      <div className="space-y-1">
                        <h5 className="font-semibold text-gray-900">{edu.degree}</h5>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{edu.year}</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded">{edu.grade}</span>
                        </div>
                        <p className="text-gray-700 font-medium">{edu.institution}</p>
                        <p className="text-gray-500 text-sm flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{edu.location}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Contact Details</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href="mailto:senthamizh20780@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                      senthamizh20780@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <a href="tel:+916384570369" className="text-gray-700 hover:text-green-600 transition-colors">
                      +91 6384570369
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Tamil Nadu, India</span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 ${tech.color} text-white rounded-lg font-medium text-sm hover:scale-105 transition-transform duration-200`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Code, title: 'Clean Code', desc: 'Writing maintainable, efficient code' },
                  { icon: Palette, title: 'Modern Design', desc: 'Creating beautiful, intuitive interfaces' },
                  { icon: Zap, title: 'Performance', desc: 'Optimizing for speed and efficiency' },
                ].map((value, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-1">{value.title}</h5>
                    <p className="text-sm text-gray-600">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Skills & Stats */}
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Technical Skills</h4>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Principles */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                <h4 className="text-xl font-semibold mb-4">Development Principles</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• User-centered design approach</li>
                  <li>• Accessibility and inclusive design</li>
                  <li>• Mobile-first responsive layouts</li>
                  <li>• Performance optimization</li>
                  <li>• Cross-browser compatibility</li>
                  <li>• Clean, maintainable code</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;