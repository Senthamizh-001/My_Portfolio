import React from 'react';
import { Code, Github, Linkedin, Mail, Heart, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Senthamizh-001', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/senthamizh-s-26b810284', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:senthamizh20780@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const skills = [
    { name: 'React.js', href: '#' },
    { name: 'JavaScript', href: '#' },
    { name: 'HTML/CSS', href: '#' },
    { name: 'Tailwind CSS', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">Senthamizh S</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Frontend Developer passionate about crafting engaging web experiences using modern technologies.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Tamil Nadu, India</span>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Technologies</h3>
              <ul className="space-y-2">
                {skills.map((skill, index) => (
                  <li key={index}>
                    <a
                      href={skill.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {skill.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
              <div className="space-y-2">
                <a 
                  href="mailto:senthamizh20780@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  senthamizh20780@gmail.com
                </a>
                <a 
                  href="tel:+916384570369"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  +91 6384570369
                </a>
                <p className="text-gray-400">Tamil Nadu, India</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 text-sm">
                  Available for freelance projects and collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by Senthamizh S</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} Senthamizh S. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;