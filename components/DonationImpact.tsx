
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const DonationImpact: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [impactMessage, setImpactMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const calculateImpact = async () => {
    if (!amount || isNaN(Number(amount))) return;

    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I am donating ${amount} SAR to a charity called "Waqf Al-Bir wa Al-Sila". Their main areas are Food Support, Financial Aid, Education, and Economic Empowerment. Write a short, inspiring message in Arabic (1-2 sentences) explaining how this specific amount can make a difference in one of these areas. Focus on being humble and appreciative.`,
        config: {
          systemInstruction: 'You are a compassionate representative of a charitable foundation. You speak professional and warm Arabic.',
          temperature: 0.7,
        }
      });

      setImpactMessage(response.text || 'شكرًا لمساهمتكم الكريمة في دعم أهدافنا.');
    } catch (error) {
      console.error('Gemini error:', error);
      setImpactMessage('شكرًا لعطائك. مساهمتكم تساهم في تغيير حياة الكثيرين نحو الأفضل.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-surface-dark p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">شاهد أثر عطائك</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            أدخل مبلغًا تقديريًا لتعرف كيف يمكن لتبرعك أن يغير حياة الآخرين
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-lg mx-auto mb-8">
            <div className="relative w-full">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="أدخل المبلغ (ر.س)"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary text-xl font-bold text-center"
              />
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400">ر.س</span>
            </div>
            <button
              onClick={calculateImpact}
              disabled={isLoading}
              className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all disabled:opacity-50 whitespace-nowrap"
            >
              {isLoading ? 'جاري التحليل...' : 'اكتشف الأثر'}
            </button>
          </div>

          {impactMessage && (
            <div className="animate-fade-in p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <p className="text-primary font-semibold text-lg italic">
                "{impactMessage}"
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DonationImpact;
