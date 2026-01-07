
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 py-16 md:py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 dark:text-white mb-6 leading-tight animate-fade-in-up">
          نسعى لتحقيق <span className="text-primary">التكافل الاجتماعي</span> المستدام
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          في وقف البر والصلة، نعمل جاهدين لبناء جسور من العطاء تمتد لتغطي احتياجات الأسر، وتصنع مستقبلاً أكثر إشراقاً عبر حلول مبتكرة ومستدامة.
        </p>
        
        <div className="mt-10 animate-fade-in-up animation-delay-400">
           <a 
              href="#" 
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-bold transform hover:-translate-y-1"
            >
              تعرف على المزيد
            </a>
        </div>
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none opacity-50"></div>
    </header>
  );
};

export default Hero;
