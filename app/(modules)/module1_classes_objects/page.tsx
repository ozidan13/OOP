'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Module1Page() {
  const [objectCount, setObjectCount] = useState(0);
  const [objects, setObjects] = useState<{ id: number; name: string; age: number }[]>([]);
  const [inputName, setInputName] = useState('أحمد');
  const [inputAge, setInputAge] = useState('25');

  const createObject = () => {
    const newObj = {
      id: objectCount + 1,
      name: inputName,
      age: parseInt(inputAge) || 0
    };
    setObjects([...objects, newObj]);
    setObjectCount(objectCount + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-blue-400 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">Module 1</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            OOP Fundamentals
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Classes & Objects
          </h1>
          <p className="text-xl text-gray-400" dir="rtl">
            الـ Classes والـ Objects - أساس البرمجة الكائنية
          </p>
        </div>

        {/* What is OOP */}
        <section className="mb-16">
          <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              <span dir="rtl">إيه هي البرمجة الكائنية OOP؟</span>
            </h2>

            <div className="space-y-6 text-gray-300 leading-loose" dir="rtl">
              <div className="p-5 bg-blue-950/30 border border-blue-500/20 rounded-xl">
                <h3 className="text-lg font-bold text-blue-400 mb-3">📖 التشبيه البسيط</h3>
                <p>
                  تخيل إنك <span className="text-blue-400 font-bold">مصنع عربيات</span>:
                </p>
                <ul className="mt-3 space-y-2 mr-4">
                  <li>• عندك <span className="text-yellow-400 font-bold">رسمة هندسية</span> (Blueprint) للعربية ← ده اسمه <span className="text-teal-400 font-bold">Class</span></li>
                  <li>• لما تصنع عربية حقيقية من الرسمة دي ← ده اسمه <span className="text-emerald-400 font-bold">Object</span></li>
                  <li>• كل عربية ليها <span className="text-purple-400">لون ونوع وموديل</span> ← دول اسمهم <span className="text-purple-400 font-bold">Properties</span></li>
                  <li>• العربية بتقدر <span className="text-rose-400">تمشي وتقف وتزمر</span> ← دول اسمهم <span className="text-rose-400 font-bold">Methods</span></li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900/50 rounded-xl border border-white/5">
                  <h4 className="text-emerald-400 font-bold mb-2">✅ ليه OOP مهم؟</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• كود منظم ومرتب</li>
                    <li>• سهل تعيد استخدامه</li>
                    <li>• سهل الصيانة والتعديل</li>
                    <li>• بيمثل العالم الحقيقي</li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-xl border border-white/5">
                  <h4 className="text-blue-400 font-bold mb-2">📌 الأركان الأربعة</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <span className="text-yellow-400">Encapsulation</span> - التغليف</li>
                    <li>• <span className="text-green-400">Inheritance</span> - الوراثة</li>
                    <li>• <span className="text-purple-400">Polymorphism</span> - تعدد الأشكال</li>
                    <li>• <span className="text-rose-400">Abstraction</span> - التجريد</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Class vs Object Visual */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            <span dir="rtl">🏗️ الفرق بين Class و Object</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Class Side */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 border border-blue-500/30 rounded-2xl p-6">
              <div className="text-center mb-6">
                <span className="text-5xl">📐</span>
                <h3 className="text-xl font-bold text-blue-400 mt-2">Class</h3>
                <p className="text-sm text-gray-400" dir="rtl">الرسمة الهندسية / Blueprint</p>
              </div>

              {/* SVG Blueprint */}
              <svg viewBox="0 0 200 150" className="w-full h-40 mb-4">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3b82f6" strokeWidth="0.3" opacity="0.3" />
                  </pattern>
                </defs>
                <rect width="200" height="150" fill="url(#grid)" />
                <rect x="40" y="20" width="120" height="110" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,3" />
                <text x="100" y="45" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="bold">Person</text>
                <line x1="50" y1="55" x2="150" y2="55" stroke="#3b82f6" strokeWidth="1" />
                <text x="60" y="72" fill="#94a3b8" fontSize="10">- name: string</text>
                <text x="60" y="87" fill="#94a3b8" fontSize="10">- age: number</text>
                <line x1="50" y1="97" x2="150" y2="97" stroke="#3b82f6" strokeWidth="1" />
                <text x="60" y="114" fill="#a78bfa" fontSize="10">+ greet(): void</text>
              </svg>

              <div className="text-center text-sm text-gray-400" dir="rtl">
                الـ Class زي <span className="text-blue-400">القالب</span> - بيوصف الشكل بس مش موجود فعلياً
              </div>
            </div>

            {/* Object Side */}
            <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-950/30 border border-emerald-500/30 rounded-2xl p-6">
              <div className="text-center mb-6">
                <span className="text-5xl">🧑</span>
                <h3 className="text-xl font-bold text-emerald-400 mt-2">Object</h3>
                <p className="text-sm text-gray-400" dir="rtl">الحاجة الحقيقية / Instance</p>
              </div>

              {/* SVG Objects */}
              <svg viewBox="0 0 200 150" className="w-full h-40 mb-4">
                <rect x="10" y="20" width="80" height="55" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
                <text x="50" y="40" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">person1</text>
                <text x="20" y="55" fill="#6ee7b7" fontSize="8">name: "أحمد"</text>
                <text x="20" y="67" fill="#6ee7b7" fontSize="8">age: 25</text>

                <rect x="110" y="20" width="80" height="55" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
                <text x="150" y="40" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">person2</text>
                <text x="120" y="55" fill="#6ee7b7" fontSize="8">name: "سارة"</text>
                <text x="120" y="67" fill="#6ee7b7" fontSize="8">age: 30</text>

                <rect x="60" y="90" width="80" height="55" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
                <text x="100" y="110" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">person3</text>
                <text x="70" y="125" fill="#6ee7b7" fontSize="8">name: "محمد"</text>
                <text x="70" y="137" fill="#6ee7b7" fontSize="8">age: 22</text>
              </svg>

              <div className="text-center text-sm text-gray-400" dir="rtl">
                الـ Objects هي <span className="text-emerald-400">النسخ الحقيقية</span> - كل واحد ليه بياناته الخاصة
              </div>
            </div>
          </div>
        </section>

        {/* Constructor */}
        <section className="mb-16">
          <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🔧</span>
              <span dir="rtl">الـ Constructor - باني الكائنات</span>
            </h2>

            <div className="space-y-6 text-gray-300 leading-loose">
              <div className="p-5 bg-yellow-950/30 border border-yellow-500/20 rounded-xl" dir="rtl">
                <h3 className="text-lg font-bold text-yellow-400 mb-3">🏭 إيه هو الـ Constructor؟</h3>
                <p>
                  الـ Constructor هو <span className="text-yellow-400 font-bold">دالة خاصة</span> بتتنفذ تلقائياً لما تعمل Object جديد.
                </p>
                <p className="mt-2">
                  فكر فيه كـ <span className="text-teal-400 font-bold">"ماكينة التجميع"</span> في المصنع - بتاخد المواد الخام (الـ parameters) وتطلعلك المنتج النهائي (الـ Object).
                </p>
              </div>

              {/* Code Example - LTR */}
              <div className="bg-slate-900 rounded-xl overflow-hidden" dir="ltr">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <span className="ml-4 text-sm text-gray-400">person.ts</span>
                </div>

                <div className="grid md:grid-cols-2">
                  <pre className="p-4 text-sm overflow-x-auto border-l border-white/10">
                    <code>{`class Person {
  // Properties (الخصائص)
  name: string;
  age: number;

  // Constructor (الباني)
  constructor(name: string, age: number) {
    this.name = name;  // حفظ الاسم
    this.age = age;    // حفظ العمر
  }

  // Method (دالة)
  greet(): string {
    return \`أهلاً، أنا \${this.name}\`;
  }
}

// إنشاء Objects
const ahmed = new Person("أحمد", 25);
const sara = new Person("سارة", 30);`}</code>
                  </pre>

                  <div className="p-4 text-sm bg-slate-950/50" dir="rtl">
                    <h4 className="text-yellow-400 font-bold mb-4">📖 شرح الكود خطوة بخطوة:</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-950/40 rounded-lg border-r-4 border-blue-500">
                        <span className="text-blue-400 font-bold">📦 تعريف الـ Properties</span>
                        <p className="text-gray-400 text-xs mt-1">
                          عرّفنا إن كل Person هيكون عنده <code className="text-teal-400">name</code> (نص) و <code className="text-teal-400">age</code> (رقم)
                        </p>
                      </div>
                      <div className="p-3 bg-yellow-950/40 rounded-lg border-r-4 border-yellow-500">
                        <span className="text-yellow-400 font-bold">🏗️ الـ Constructor</span>
                        <p className="text-gray-400 text-xs mt-1">
                          لما نعمل <code className="text-purple-400">new Person()</code>، الـ constructor بياخد الـ name والـ age ويحفظهم في الـ Object
                        </p>
                      </div>
                      <div className="p-3 bg-purple-950/40 rounded-lg border-r-4 border-purple-500">
                        <span className="text-purple-400 font-bold">⚡ الـ Method</span>
                        <p className="text-gray-400 text-xs mt-1">
                          الـ <code className="text-rose-400">greet()</code> هي function بترجع رسالة تحية باسم الشخص
                        </p>
                      </div>
                      <div className="p-3 bg-emerald-950/40 rounded-lg border-r-4 border-emerald-500">
                        <span className="text-emerald-400 font-bold">✨ إنشاء Objects</span>
                        <p className="text-gray-400 text-xs mt-1">
                          كل <code className="text-blue-400">new Person()</code> بيعمل Object جديد ببياناته الخاصة
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🎮</span>
              <span dir="rtl">جرب بنفسك - إنشاء Objects</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Input Form */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-purple-400 mb-4" dir="rtl">أدخل البيانات:</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1" dir="rtl">الاسم (name)</label>
                    <input
                      type="text"
                      value={inputName}
                      onChange={(e) => setInputName(e.target.value)}
                      className="w-full px-4 py-2 bg-slate-800 border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      placeholder="أدخل الاسم"
                      dir="rtl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1" dir="rtl">العمر (age)</label>
                    <input
                      type="number"
                      value={inputAge}
                      onChange={(e) => setInputAge(e.target.value)}
                      className="w-full px-4 py-2 bg-slate-800 border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      placeholder="أدخل العمر"
                    />
                  </div>

                  <button
                    onClick={createObject}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-500 hover:to-blue-500 transition"
                  >
                    new Person() 🚀
                  </button>
                </div>

                <div className="mt-4 p-3 bg-slate-800/50 rounded-lg font-mono text-sm text-gray-400" dir="ltr">
                  <span className="text-purple-400">const</span> person{objectCount + 1} = <span className="text-yellow-400">new</span> Person(<span className="text-emerald-400">"{inputName}"</span>, <span className="text-blue-400">{inputAge}</span>);
                </div>
              </div>

              {/* Objects Display */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-emerald-400 mb-4" dir="rtl">
                  الـ Objects المُنشأة ({objects.length}):
                </h3>

                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {objects.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <span className="text-4xl">📦</span>
                      <p className="mt-2" dir="rtl">مفيش Objects لسه - اعمل واحد!</p>
                    </div>
                  ) : (
                    objects.map((obj) => (
                      <div key={obj.id} className="p-4 bg-emerald-950/30 border border-emerald-500/30 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-emerald-400 font-mono font-bold">person{obj.id}</span>
                          <span className="text-xs text-gray-500">Object #{obj.id}</span>
                        </div>
                        <div className="text-sm text-gray-300 font-mono" dir="ltr">
                          <div>name: <span className="text-yellow-400">"{obj.name}"</span></div>
                          <div>age: <span className="text-blue-400">{obj.age}</span></div>
                        </div>
                        <div className="mt-2 text-xs text-purple-400" dir="rtl">
                          greet() → "أهلاً، أنا {obj.name}"
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-16">
          <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6" dir="rtl">📝 ملخص سريع</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-blue-950/30 border border-blue-500/20 rounded-xl text-center">
                <span className="text-3xl">📐</span>
                <h4 className="text-blue-400 font-bold mt-2">Class</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">القالب أو الرسمة الهندسية</p>
              </div>
              <div className="p-4 bg-emerald-950/30 border border-emerald-500/20 rounded-xl text-center">
                <span className="text-3xl">🧩</span>
                <h4 className="text-emerald-400 font-bold mt-2">Object</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">النسخة الحقيقية من الـ Class</p>
              </div>
              <div className="p-4 bg-purple-950/30 border border-purple-500/20 rounded-xl text-center">
                <span className="text-3xl">📦</span>
                <h4 className="text-purple-400 font-bold mt-2">Properties</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">البيانات والخصائص</p>
              </div>
              <div className="p-4 bg-rose-950/30 border border-rose-500/20 rounded-xl text-center">
                <span className="text-3xl">⚡</span>
                <h4 className="text-rose-400 font-bold mt-2">Methods</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">الدوال والسلوكيات</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/" className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Home
          </Link>
          <Link href="/module2_encapsulation" className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-lg hover:from-emerald-500 hover:to-teal-500 transition flex items-center gap-2">
            <span dir="rtl">الوحدة التالية: Encapsulation</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}