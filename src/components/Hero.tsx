import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // Open Google Drive folder in new tab
    window.open('https://drive.google.com/drive/folders/1BrS39Dru0uoErBkz8WDEIpkz0RkupIJm', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full opacity-5 animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm">
              <img 
                src="/Senz_Ph.jpg" 
                alt="Senthamizh S - Frontend Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Senthamizh S
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 font-light">
              Frontend Developer & Web Designer
            </p>
            
            <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Passionate about crafting engaging web experiences. Let's build something amazing together!
            </p>

            {/* Location */}
            <div className="flex items-center justify-center space-x-2 text-blue-200">
              <MapPin className="w-5 h-5" />
              <span>Tamil Nadu, India</span>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button 
                onClick={scrollToAbout}
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>
              
              <button 
                onClick={handleResumeDownload}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-8">
              {[
                { icon: Github, href: 'https://github.com/Senthamizh-001', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/senthamizh-s-26b810284', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:senthamizh20780@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="text-white/70 hover:text-white transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;