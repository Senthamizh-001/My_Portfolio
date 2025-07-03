import React from 'react';
import { Code, Palette, Zap, Heart, Award, Calendar, MapPin, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'HTML5 & CSS3', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript (ES6+)', level: 90, color: 'from-yellow-500 to-orange-500' },
    { name: 'React.js', level: 88, color: 'from-blue-500 to-cyan-500' },
    { name: 'Tailwind CSS', level: 92, color: 'from-cyan-500 to-blue-500' },
    { name: 'Git & GitHub', level: 87, color: 'from-gray-600 to-gray-800' },
    { name: 'Responsive Design', level: 93, color: 'from-pink-500 to-rose-500' },
  ];

  const stats = [
    { icon: Award, value: '25+', label: 'Projects Completed' },
    { icon: Heart, value: '50+', label: 'Happy Clients' },
    { icon: Calendar, value: '3+', label: 'Years Experience' },
    { icon: Code, value: '6+', label: 'Technologies' },
  ];

  const technologies = [
    { name: 'HTML5', color: 'bg-orange-500' },
    { name: 'CSS3', color: 'bg-blue-500' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'React.js', color: 'bg-cyan-500' },
    { name: 'Tailwind CSS', color: 'bg-teal-500' },
    { name: 'Git & GitHub', color: 'bg-gray-700' },
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
              Frontend Developer passionate about creating responsive and user-friendly web applications using modern technologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Transforming Ideas into Digital Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I specialize in creating responsive and user-friendly web applications using modern technologies. 
                  With a strong foundation in frontend development, I transform ideas into seamless digital solutions 
                  that provide exceptional user experiences.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My expertise spans across HTML5, CSS3, JavaScript, and React.js, with a keen eye for 
                  UI/UX principles. I'm passionate about writing clean, maintainable code and staying up-to-date 
                  with the latest web development trends and best practices.
                </p>
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

              {/* UI/UX Principles */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                <h4 className="text-xl font-semibold mb-4">UI/UX Principles</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• User-centered design approach</li>
                  <li>• Accessibility and inclusive design</li>
                  <li>• Mobile-first responsive layouts</li>
                  <li>• Performance optimization</li>
                  <li>• Cross-browser compatibility</li>
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