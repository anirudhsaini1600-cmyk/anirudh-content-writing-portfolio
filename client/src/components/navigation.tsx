import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-neutral-100' : 'bg-white/95 backdrop-blur-sm border-b border-neutral-100'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-lg font-bold text-primary hover:text-blue-800 transition-colors"
              data-testid="nav-logo"
            >
              Portfolio
            </button>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('about')} 
                className="hover:text-primary transition-colors"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="hover:text-primary transition-colors"
                data-testid="nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="hover:text-primary transition-colors"
                data-testid="nav-work"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="hover:text-primary transition-colors"
                data-testid="nav-skills"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="hover:text-primary transition-colors"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-all duration-300 transform hover:scale-105"
            data-testid="nav-get-started"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
