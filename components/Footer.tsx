
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img 
              alt="شعار وقف البر والصلة" 
              className="h-20 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
              src="https://raw.githubusercontent.com/t-shatti/waqf-logo/main/logo.png" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://lh3.googleusercontent.com/aida-public/AB6AXuDnB3bqEq-dhhZzC5h2A8wNq1-MaGNQMag_s-YwVTEIXUOg_sYKl7nkaHKEiYZc3MMzG3jBM-RKSSRdAr79_o7Jcl3JCqlNoNktlxD8DHOoNvKT1Spa0V9NBzKnnop8ycxruGNgVwZ6xiOpM201IFQQ-TwMJ64CYb9F9Qgqf4vn6qart_FiXrQWlmRuEii4koRgHgDp5qMpGNXfc-j8JCYeMFwdxt5V-BdY3_fkAdjKXiEDPniMkL2NkkcMjHAeLdxSPSJyeOPsvlY";
              }}
            />
          </div>
          
          <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} وقف البر والصلة. جميع الحقوق محفوظة.
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-300" aria-label="Facebook">
              <span className="material-icons-outlined text-2xl">facebook</span>
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-300" aria-label="Website">
              <span className="material-icons-outlined text-2xl">public</span>
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-300" aria-label="Contact">
              <span className="material-icons-outlined text-2xl">alternate_email</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-slate-400">
          <a href="#" className="hover:text-primary">سياسة الخصوصية</a>
          <a href="#" className="hover:text-primary">الشروط والأحكام</a>
          <a href="#" className="hover:text-primary">ميثاق العميل</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
