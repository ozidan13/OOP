'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Module data
  const modules = [
    {
      id: 1,
      title: 'Introduction to OOP',
      slug: 'module1_classes_objects',
      descAr: 'مقدمة البرمجة الكائنية - Classes و Objects',
      color: 'from-blue-600 to-blue-800',
      topics: [
        { name: 'What is OOP?', descAr: 'إيه هي البرمجة الكائنية ومميزاتها' },
        { name: 'Classes & Objects', descAr: 'الـ Class بيكون زي القالب والـ Object هو المنتج' },
        { name: 'Constructors', descAr: 'دوال خاصة بتتنفذ لما نعمل Object جديد' },
        { name: 'Methods', descAr: 'الدوال اللي بتحدد سلوك الـ Object' },
      ]
    },
    {
      id: 2,
      title: 'Encapsulation',
      slug: 'module2_encapsulation',
      descAr: 'التغليف - حماية البيانات والتحكم في الوصول',
      color: 'from-emerald-600 to-emerald-800',
      topics: [
        { name: 'Access Modifiers', descAr: 'public و private و protected' },
        { name: 'Getters & Setters', descAr: 'التحكم في قراءة وكتابة البيانات' },
        { name: 'Information Hiding', descAr: 'إخفاء التفاصيل الداخلية' },
        { name: 'Data Validation', descAr: 'التحقق من صحة البيانات' },
      ]
    },
    {
      id: 3,
      title: 'Inheritance',
      slug: 'module3_inheritance',
      descAr: 'الوراثة - بناء علاقات بين الكلاسات',
      color: 'from-amber-600 to-amber-800',
      topics: [
        { name: 'Parent & Child Classes', descAr: 'الكلاس الأب والكلاس الابن' },
        { name: 'super Keyword', descAr: 'استدعاء الكلاس الأب' },
        { name: 'Method Overriding', descAr: 'إعادة تعريف الدوال في الكلاس الابن' },
        { name: 'Inheritance Hierarchies', descAr: 'شجرة الوراثة والعلاقات' },
      ]
    },
    {
      id: 4,
      title: 'Polymorphism',
      slug: 'module4_polymorphism',
      descAr: 'تعدد الأشكال - واجهة واحدة وتطبيقات متعددة',
      color: 'from-purple-600 to-purple-800',
      topics: [
        { name: 'Method Overloading', descAr: 'نفس اسم الدالة بـ parameters مختلفة' },
        { name: 'Method Overriding', descAr: 'تغيير سلوك الدوال الموروثة' },
        { name: 'Abstract Classes', descAr: 'كلاسات مش بنعمل منها Objects' },
        { name: 'Interfaces', descAr: 'عقود بتحدد شكل الكلاس' },
      ]
    },
    {
      id: 5,
      title: 'Abstraction',
      slug: 'module5_abstraction',
      descAr: 'التجريد - التركيز على المهم وإخفاء التفاصيل',
      color: 'from-rose-600 to-rose-800',
      topics: [
        { name: 'Essential Features', descAr: 'التركيز على الخصائص المهمة' },
        { name: 'Hiding Implementation', descAr: 'إخفاء تفاصيل التنفيذ' },
        { name: 'Abstract vs Interface', descAr: 'الفرق بين Abstract و Interface' },
        { name: 'Real-world Examples', descAr: 'أمثلة من الحياة الحقيقية' },
      ]
    },
  ];

  return (
    <section
      className="min-h-screen w-full flex flex-col items-center px-4 py-10 relative overflow-hidden"
      dir="rtl"
      style={{
        background: 'linear-gradient(135deg, #0a0a0f 0%, #121218 50%, #0a0a0f 100%)',
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/3 rounded-full blur-[120px]"></div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className={`relative z-10 w-full max-w-7xl transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              background: 'linear-gradient(90deg, #ffffff, #3B82F6, #8B5CF6, #ffffff)',
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradientText 6s ease infinite',
            }}
          >
            Object-Oriented Programming
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-arabic leading-relaxed">
            تعلم أساسيات البرمجة الكائنية: التغليف، الوراثة، تعدد الأشكال، والتجريد
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {modules.map((module, index) => (
            <div
              key={module.id}
              className={`
                bg-gray-900/60 backdrop-blur-sm border border-white/5 rounded-2xl p-5
                hover:border-white/10 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-black/20
                transition-all duration-300
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Module Header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                >
                  {module.id}
                </div>
                <span className="text-white font-semibold text-sm"> {module.title}</span>
              </div>

              {/* Topics */}
              <div className="space-y-2">
                {module.topics.map((topic, i) => (
                  <Link
                    key={i}
                    href={`/${module.slug}`}
                    className="block p-3 bg-white/[0.02] border border-white/5 rounded-lg hover:bg-white/[0.05] hover:border-white/10 transition-all duration-200 group"
                  >
                    <div className="text-white text-xs font-medium mb-1" style={{ direction: 'ltr', textAlign: 'left' }}>
                      {topic.name}
                    </div>
                    <div className="text-gray-400 text-xs leading-relaxed">
                      {topic.descAr}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-10 text-gray-500 text-sm">
          <p>
            © 2025-2026 OOP Master | صُمم بواسطة{' '}
            <a
              href="https://www.linkedin.com/in/osaadzin/"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Osama Zinhom
            </a>
          </p>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes gradientText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
