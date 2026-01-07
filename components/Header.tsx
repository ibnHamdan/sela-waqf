
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'areas', 'donate'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'areas', label: 'مجالات عملنا' },
    { id: 'donate', label: 'ادعم الأثر' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setIsMobileMenuOpen(false);
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md shadow-lg h-16' 
          : 'bg-transparent h-24'
      } border-b border-transparent ${isScrolled ? 'dark:border-slate-800 border-slate-200' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="group">
              <img 
                alt="شعار وقف البر والصلة" 
                className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'} w-auto drop-shadow-sm group-hover:scale-105`} 
                src="https://raw.githubusercontent.com/t-shatti/waqf-logo/main/logo.png" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://lh3.googleusercontent.com/aida-public/AB6AXuDnIy-lVvsoeVZExFcFsmNuLKjyfGbC_J_bypwf2oqrGRpG2QCzipyabrsrviq0E6-QutSIDmwMXBs8LrWCrNHcL1HAVhWcSi22OHvgtkP-WQcT8tySAEC7WuLhYUgT0lmsfOZZORgTM_k0G1O2C5RMYinDyR_AhaMWgDJfN39NQPSNuj6qTjxq-2omEtDI8lpBoQYN5QKmsAVi7IE6YxNppEXLWM9ggCg3wZNF5Xu_2O8nMzF6hEHiBNuAYpyXHvFv9NLhOjbkfjw";
                }}
              />
            </a>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  activeSection === link.id 
                    ? 'text-primary bg-primary/10' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="تبديل الوضع الليلي"
            >
              <span className="material-icons-outlined text-xl">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            
            <a 
              href="#donate" 
              onClick={(e) => handleLinkClick(e, 'donate')}
              className="hidden sm:inline-block bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-bold text-sm whitespace-nowrap"
            >
              تبرع الآن
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="القائمة الرئيسية"
            >
              <span className="material-icons-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div 
          className={`absolute top-0 right-0 h-full w-72 bg-white dark:bg-surface-dark shadow-2xl transition-transform duration-500 transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-10">
              <img 
                alt="شعار الوقف" 
                className="h-10 w-auto" 
                src="https://raw.githubusercontent.com/t-shatti/waqf-logo/main/logo.png" 
              />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <span className="material-icons-outlined">close</span>
              </button>
            </div>
            
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <a 
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`text-lg font-bold p-4 rounded-2xl transition-all duration-300 ${
                    activeSection === link.id 
                      ? 'bg-primary/10 text-primary border-r-4 border-primary' 
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-auto">
              <a 
                href="#donate" 
                onClick={(e) => handleLinkClick(e, 'donate')}
                className="block w-full text-center bg-primary hover:bg-primary-dark text-white py-4 rounded-2xl font-bold shadow-xl"
              >
                دعم الوقف
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
