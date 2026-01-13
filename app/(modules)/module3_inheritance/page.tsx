'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Module3Page() {
  const [selectedAnimal, setSelectedAnimal] = useState<'dog' | 'cat' | 'bird'>('dog');

  const animals = {
    dog: { emoji: '🐕', name: 'Dog', sound: 'وو وو! 🐕', move: 'بيجري على 4 رجول' },
    cat: { emoji: '🐈', name: 'Cat', sound: 'مياو! 🐱', move: 'بيمشي بهدوء' },
    bird: { emoji: '🐦', name: 'Bird', sound: 'تغريد! 🎵', move: 'بيطير في السما' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-amber-400 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full">Module 3</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm mb-6">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            Pillar 2 of OOP
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Inheritance
          </h1>
          <p className="text-xl text-gray-400" dir="rtl">
            الوراثة - الكلاسات بتورث بعضها
          </p>
        </div>

        {/* What is Inheritance */}
        <section className="mb-16">
          <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">👨‍👩‍👧‍👦</span>
              <span dir="rtl">إيه هي الوراثة Inheritance؟</span>
            </h2>

            <div className="space-y-6 text-gray-300 leading-loose" dir="rtl">
              <div className="p-5 bg-amber-950/30 border border-amber-500/20 rounded-xl">
                <h3 className="text-lg font-bold text-amber-400 mb-3">👪 تشبيه العيلة</h3>
                <p>
                  الوراثة في البرمجة زي <span className="text-amber-400 font-bold">الوراثة في الحياة</span>:
                </p>
                <ul className="mt-3 space-y-2 mr-4">
                  <li>• الابن بـ<span className="text-teal-400 font-bold">يورث</span> صفات من الأب (لون العين، الطول)</li>
                  <li>• بس ممكن يكون عنده <span className="text-purple-400 font-bold">صفات إضافية</span> خاصة بيه</li>
                  <li>• أو يـ<span className="text-rose-400 font-bold">غير سلوك</span> موروث (override)</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900/50 rounded-xl border border-white/5">
                  <h4 className="text-emerald-400 font-bold mb-2">✅ ليه الوراثة مهمة؟</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <span className="text-yellow-400">Code Reuse</span> - متكررش نفس الكود</li>
                    <li>• <span className="text-blue-400">Hierarchy</span> - تنظيم الكلاسات</li>
                    <li>• <span className="text-purple-400">Extensibility</span> - سهولة التوسع</li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-xl border border-white/5">
                  <h4 className="text-blue-400 font-bold mb-2">📌 المصطلحات</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <span className="text-amber-400">Parent/Base/Super</span> - الكلاس الأب</li>
                    <li>• <span className="text-teal-400">Child/Derived/Sub</span> - الكلاس الابن</li>
                    <li>• <span className="text-purple-400">extends</span> - "بيورث من"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Inheritance Tree */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            <span dir="rtl">🌳 شجرة الوراثة</span>
          </h2>

          <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8">
            {/* SVG Inheritance Tree - LTR for diagram */}
            <svg viewBox="0 0 400 250" className="w-full h-64 mb-6">
              {/* Animal (Parent) */}
              <rect x="150" y="10" width="100" height="50" rx="8" fill="#78350f" stroke="#f59e0b" strokeWidth="2" />
              <text x="200" y="30" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="bold">Animal</text>
              <text x="200" y="48" textAnchor="middle" fill="#fcd34d" fontSize="9">🐾 Parent Class</text>

              {/* Connecting Lines */}
              <line x1="200" y1="60" x2="200" y2="80" stroke="#f59e0b" strokeWidth="2" />
              <line x1="80" y1="80" x2="320" y2="80" stroke="#f59e0b" strokeWidth="2" />
              <line x1="80" y1="80" x2="80" y2="100" stroke="#f59e0b" strokeWidth="2" />
              <line x1="200" y1="80" x2="200" y2="100" stroke="#f59e0b" strokeWidth="2" />
              <line x1="320" y1="80" x2="320" y2="100" stroke="#f59e0b" strokeWidth="2" />

              {/* Dog */}
              <rect x="30" y="100" width="100" height="50" rx="8" fill="#164e63" stroke="#22d3ee" strokeWidth="2" />
              <text x="80" y="120" textAnchor="middle" fill="#67e8f9" fontSize="11" fontWeight="bold">🐕 Dog</text>
              <text x="80" y="138" textAnchor="middle" fill="#a5f3fc" fontSize="8">extends Animal</text>

              {/* Cat */}
              <rect x="150" y="100" width="100" height="50" rx="8" fill="#3730a3" stroke="#818cf8" strokeWidth="2" />
              <text x="200" y="120" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontWeight="bold">🐈 Cat</text>
              <text x="200" y="138" textAnchor="middle" fill="#c7d2fe" fontSize="8">extends Animal</text>

              {/* Bird */}
              <rect x="270" y="100" width="100" height="50" rx="8" fill="#14532d" stroke="#4ade80" strokeWidth="2" />
              <text x="320" y="120" textAnchor="middle" fill="#86efac" fontSize="11" fontWeight="bold">🐦 Bird</text>
              <text x="320" y="138" textAnchor="middle" fill="#bbf7d0" fontSize="8">extends Animal</text>

              {/* Properties inherited */}
              <rect x="100" y="180" width="200" height="60" rx="8" fill="#1f2937" stroke="#4b5563" strokeWidth="1" strokeDasharray="4,2" />
              <text x="200" y="200" textAnchor="middle" fill="#9ca3af" fontSize="10">Inherited from Animal:</text>
              <text x="200" y="220" textAnchor="middle" fill="#d1d5db" fontSize="9">name, age, eat(), sleep()</text>
            </svg>

            <div className="text-center text-sm text-gray-400" dir="rtl">
              💡 كل الأولاد (Dog, Cat, Bird) بيورثوا الـ properties والـ methods من Animal
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="mb-16">
          <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">📦</span>
              <code className="text-amber-400">extends</code> & <code className="text-teal-400">super</code>
            </h2>

            {/* Code Example - LTR */}
            <div className="bg-slate-900 rounded-xl overflow-hidden" dir="ltr">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="ml-4 text-sm text-gray-400">animals.ts</span>
              </div>

              <div className="grid md:grid-cols-2">
                <pre className="p-4 text-sm overflow-x-auto border-l border-white/10">
                  <code>{`// Parent Class (الأب)
class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eat(): string {
    return \`\${this.name} is eating 🍽️\`;
  }

  sleep(): string {
    return \`\${this.name} is sleeping 😴\`;
  }
}

// Child Class (الابن)
class Dog extends Animal {
  breed: string;  // خاصية جديدة

  constructor(name: string, age: number, breed: string) {
    super(name, age);  // نادي الأب!
    this.breed = breed;
  }

  // Method جديدة
  bark(): string {
    return \`\${this.name} says: Woof! 🐕\`;
  }

  // Override - تغيير سلوك
  eat(): string {
    return \`\${this.name} eats dog food 🦴\`;
  }
}

const buddy = new Dog("Buddy", 3, "Golden");
console.log(buddy.eat());   // Buddy eats dog food
console.log(buddy.sleep()); // Buddy is sleeping (inherited!)
console.log(buddy.bark());  // Buddy says: Woof!`}</code>
                </pre>

                <div className="p-4 text-sm bg-slate-950/50" dir="rtl">
                  <h4 className="text-amber-400 font-bold mb-4">🔍 شرح كل جزء:</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-amber-950/40 rounded-lg border-r-4 border-amber-500">
                      <span className="text-amber-400 font-bold">👴 الكلاس الأب Animal</span>
                      <p className="text-gray-400 text-xs mt-1">
                        فيه الـ properties الأساسية (<code className="text-teal-400">name</code>, <code className="text-teal-400">age</code>) والـ methods المشتركة (<code className="text-purple-400">eat()</code>, <code className="text-purple-400">sleep()</code>)
                      </p>
                    </div>
                    <div className="p-3 bg-teal-950/40 rounded-lg border-r-4 border-teal-500">
                      <span className="text-teal-400 font-bold">🔗 extends - الوصلة</span>
                      <p className="text-gray-400 text-xs mt-1">
                        <code className="text-amber-400">Dog extends Animal</code> يعني Dog بيورث كل حاجة من Animal تلقائياً!
                      </p>
                    </div>
                    <div className="p-3 bg-blue-950/40 rounded-lg border-r-4 border-blue-500">
                      <span className="text-blue-400 font-bold">📞 super() - نادي أبوك</span>
                      <p className="text-gray-400 text-xs mt-1">
                        لازم تنادي <code className="text-yellow-400">super()</code> في الـ constructor عشان تمرر البيانات للـ Parent
                      </p>
                    </div>
                    <div className="p-3 bg-purple-950/40 rounded-lg border-r-4 border-purple-500">
                      <span className="text-purple-400 font-bold">✨ حاجات جديدة</span>
                      <p className="text-gray-400 text-xs mt-1">
                        الـ Dog عنده <code className="text-teal-400">breed</code> و <code className="text-rose-400">bark()</code> - إضافات مش موجودة في Animal
                      </p>
                    </div>
                    <div className="p-3 bg-rose-950/40 rounded-lg border-r-4 border-rose-500">
                      <span className="text-rose-400 font-bold">🔄 Override - غير السلوك</span>
                      <p className="text-gray-400 text-xs mt-1">
                        الـ Dog عمل <code className="text-blue-400">eat()</code> بتاعته - بدل "is eating" بقت "eats dog food"!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🎮</span>
              <span dir="rtl">جرب بنفسك - الوراثة في الحيوانات</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Animal Selector */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-amber-400 mb-4" dir="rtl">اختار الحيوان:</h3>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {(['dog', 'cat', 'bird'] as const).map((animal) => (
                    <button
                      key={animal}
                      onClick={() => setSelectedAnimal(animal)}
                      className={`p-4 rounded-xl text-center transition ${selectedAnimal === animal
                        ? 'bg-amber-600 text-white'
                        : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                        }`}
                    >
                      <span className="text-3xl">{animals[animal].emoji}</span>
                      <p className="text-sm mt-1">{animals[animal].name}</p>
                    </button>
                  ))}
                </div>

                <div className="p-4 bg-slate-800/50 rounded-xl" dir="ltr">
                  <p className="text-sm text-gray-400 mb-2">Code:</p>
                  <pre className="text-xs text-amber-400 font-mono">
                    {`const animal = new ${animals[selectedAnimal].name}("Max", 3);`}
                  </pre>
                </div>
              </div>

              {/* Results */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-emerald-400 mb-4" dir="rtl">النتيجة:</h3>

                <div className="space-y-3">
                  <div className="p-4 bg-blue-950/30 border border-blue-500/20 rounded-lg">
                    <p className="text-xs text-blue-400 mb-1" dir="rtl">⬇️ موروث من Animal:</p>
                    <div className="text-white font-mono text-sm" dir="ltr">
                      <p>eat() → "Max is eating 🍽️"</p>
                      <p>sleep() → "Max is sleeping 😴"</p>
                    </div>
                  </div>

                  <div className="p-4 bg-amber-950/30 border border-amber-500/20 rounded-lg">
                    <p className="text-xs text-amber-400 mb-1" dir="rtl">✨ خاص بـ {animals[selectedAnimal].name}:</p>
                    <div className="text-white font-mono text-sm">
                      <p dir="ltr">makeSound() → "{animals[selectedAnimal].sound}"</p>
                      <p dir="rtl">move() → "{animals[selectedAnimal].move}"</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <span className="text-6xl">{animals[selectedAnimal].emoji}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-16">
          <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6" dir="rtl">📝 ملخص Inheritance</h2>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-4 bg-amber-950/30 border border-amber-500/20 rounded-xl text-center">
                <span className="text-3xl">👨‍👩‍👧</span>
                <h4 className="text-amber-400 font-bold mt-2">extends</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">الكلمة اللي بنورث بيها</p>
              </div>
              <div className="p-4 bg-blue-950/30 border border-blue-500/20 rounded-xl text-center">
                <span className="text-3xl">📞</span>
                <h4 className="text-blue-400 font-bold mt-2">super()</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">استدعاء الـ Parent</p>
              </div>
              <div className="p-4 bg-rose-950/30 border border-rose-500/20 rounded-xl text-center">
                <span className="text-3xl">🔄</span>
                <h4 className="text-rose-400 font-bold mt-2">Override</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">تغيير السلوك الموروث</p>
              </div>
              <div className="p-4 bg-emerald-950/30 border border-emerald-500/20 rounded-xl text-center">
                <span className="text-3xl">♻️</span>
                <h4 className="text-emerald-400 font-bold mt-2">Code Reuse</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">متكررش الكود</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/module2_encapsulation" className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Encapsulation
          </Link>
          <Link href="/module4_polymorphism" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-lg hover:from-purple-500 hover:to-violet-500 transition flex items-center gap-2">
            <span dir="rtl">الوحدة التالية: Polymorphism</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}
