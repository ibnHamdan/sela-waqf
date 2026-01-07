
import React from 'react';

interface ImpactCardProps {
  icon: string;
  title: string;
  description: string;
  colorClass: string;
  bgClass: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({ icon, title, description, colorClass, bgClass }) => (
  <div className="group bg-surface-light dark:bg-surface-dark rounded-3xl p-8 shadow-sm hover:shadow-2xl border border-slate-100 dark:border-slate-700 transition-all duration-300 transform hover:-translate-y-2">
    <div className={`w-16 h-16 rounded-2xl ${bgClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
      <span className={`material-icons-outlined text-4xl ${colorClass}`}>
        {icon}
      </span>
    </div>
    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const ImpactSection: React.FC = () => {
  const cards = [
    {
      icon: 'restaurant',
      title: 'الدعم الغذائي',
      description: 'توفير السلال الغذائية والاحتياجات الأساسية لضمان الأمن الغذائي للأسر المتعففة في مختلف المناطق.',
      colorClass: 'text-teal-600 group-hover:text-white',
      bgClass: 'bg-teal-50 dark:bg-teal-900/30 group-hover:bg-primary'
    },
    {
      icon: 'savings',
      title: 'الدعم المالي',
      description: 'تقديم المساعدات المالية المباشرة لسد الاحتياجات الضرورية والطارئة، وتفريج كرب الأسر المحتاجة.',
      colorClass: 'text-amber-600 group-hover:text-white',
      bgClass: 'bg-amber-50 dark:bg-amber-900/30 group-hover:bg-secondary'
    },
    {
      icon: 'school',
      title: 'التعليم والتدريب',
      description: 'تمكين المستفيدين من دخول سوق العمل عبر فرص تعليمية متخصصة وبرامج تدريبية تواكب الاحتياج.',
      colorClass: 'text-blue-500 group-hover:text-white',
      bgClass: 'bg-blue-50 dark:bg-blue-900/30 group-hover:bg-blue-500'
    },
    {
      icon: 'handshake',
      title: 'التمكين الاقتصادي',
      description: 'دعم المشاريع الصغيرة والمتوسطة للأسر المنتجة لتحقيق الاعتماد الذاتي والاستدامة المالية طويلة الأمد.',
      colorClass: 'text-purple-600 group-hover:text-white',
      bgClass: 'bg-purple-50 dark:bg-purple-900/30 group-hover:bg-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-secondary/20 text-secondary dark:text-yellow-400 font-bold text-sm mb-4">
            أثرنا المجتمعي
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            مجالات عمل الوقف
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-l from-secondary to-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            نركز جهودنا في أربعة مسارات رئيسية تهدف إلى تحسين جودة الحياة وتحقيق الاستقرار الاقتصادي والاجتماعي للمستفيدين.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <ImpactCard key={idx} {...card} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold text-lg transition-colors group">
            <span>اطلع على تقارير الإنجاز</span>
            <span className="material-icons-outlined transform group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
