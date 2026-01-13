'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Module4Page() {
  const [selectedShape, setSelectedShape] = useState<'circle' | 'rectangle' | 'triangle'>('circle');
  const [dimension1, setDimension1] = useState('5');
  const [dimension2, setDimension2] = useState('3');

  const calculateArea = () => {
    const d1 = parseFloat(dimension1) || 0;
    const d2 = parseFloat(dimension2) || 0;

    switch (selectedShape) {
      case 'circle': return (Math.PI * d1 * d1).toFixed(2);
      case 'rectangle': return (d1 * d2).toFixed(2);
      case 'triangle': return ((d1 * d2) / 2).toFixed(2);
    }
  };

  const shapes = {
    circle: { emoji: '⭕', name: 'Circle', label1: 'Radius (r)', label2: '' },
    rectangle: { emoji: '🟦', name: 'Rectangle', label1: 'Width', label2: 'Height' },
    triangle: { emoji: '🔺', name: 'Triangle', label1: 'Base', label2: 'Height' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-purple-400 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">Module 4</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            Pillar 3 of OOP
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Polymorphism
          </h1>
          <p className="text-xl text-gray-400" dir="rtl">
            تعدد الأشكال - نفس الـ interface، سلوكيات مختلفة
          </p>
        </div>

        {/* What is Polymorphism */}
        <section className="mb-16">
          <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🎭</span>
              <span dir="rtl">إيه هو تعدد الأشكال Polymorphism؟</span>
            </h2>

            <div className="space-y-6 text-gray-300 leading-loose" dir="rtl">
              <div className="p-5 bg-purple-950/30 border border-purple-500/20 rounded-xl">
                <h3 className="text-lg font-bold text-purple-400 mb-3">🎮 تشبيه الريموت</h3>
                <p>
                  فكر في <span className="text-purple-400 font-bold">زرار "Play" ▶️</span> في الريموت:
                </p>
                <ul className="mt-3 space-y-2 mr-4">
                  <li>• على <span className="text-teal-400 font-bold">التلفزيون</span> → بيشغل القناة</li>
                  <li>• على <span className="text-yellow-400 font-bold">CD Player</span> → بيشغل الأغنية</li>
                  <li>• على <span className="text-rose-400 font-bold">YouTube</span> → بيشغل الفيديو</li>
                </ul>
                <p className="mt-3 text-purple-400 font-bold">
                  نفس الزرار (play)، لكن النتيجة مختلفة حسب الجهاز! 🎯
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900/50 rounded-xl border border-white/5">
                  <h4 className="text-emerald-400 font-bold mb-2">✅ أنواع Polymorphism</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <span className="text-yellow-400 font-bold">Compile-time</span> - Method Overloading (نفس الاسم، parameters مختلفة)</li>
                    <li>• <span className="text-purple-400 font-bold">Runtime</span> - Method Overriding (نفس الـ method في child)</li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-xl border border-white/5">
                  <h4 className="text-blue-400 font-bold mb-2">📌 الفايدة</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• كود مرن وقابل للتوسع</li>
                    <li>• التعامل مع Objects مختلفة بنفس الطريقة</li>
                    <li>• Open/Closed Principle</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual - Same Interface, Different Behavior */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            <span dir="rtl">🔷 نفس الـ Interface، سلوكيات مختلفة</span>
          </h2>

          <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8">
            <svg viewBox="0 0 400 200" className="w-full h-52 mb-6" dir="ltr">
              {/* Interface Box */}
              <rect x="140" y="10" width="120" height="45" rx="8" fill="#581c87" stroke="#a855f7" strokeWidth="2" strokeDasharray="5,3" />
              <text x="200" y="30" textAnchor="middle" fill="#c084fc" fontSize="11" fontWeight="bold">«interface»</text>
              <text x="200" y="47" textAnchor="middle" fill="#e9d5ff" fontSize="10">Shape</text>

              {/* Interface method */}
              <rect x="155" y="60" width="90" height="20" rx="4" fill="#4c1d95" />
              <text x="200" y="74" textAnchor="middle" fill="#c4b5fd" fontSize="8">calculateArea()</text>

              {/* Connecting Lines */}
              <line x1="200" y1="80" x2="200" y2="100" stroke="#a855f7" strokeWidth="1" strokeDasharray="3,2" />
              <line x1="70" y1="100" x2="330" y2="100" stroke="#a855f7" strokeWidth="1" strokeDasharray="3,2" />
              <line x1="70" y1="100" x2="70" y2="115" stroke="#a855f7" strokeWidth="1" strokeDasharray="3,2" />
              <line x1="200" y1="100" x2="200" y2="115" stroke="#a855f7" strokeWidth="1" strokeDasharray="3,2" />
              <line x1="330" y1="100" x2="330" y2="115" stroke="#a855f7" strokeWidth="1" strokeDasharray="3,2" />

              {/* Circle */}
              <rect x="20" y="115" width="100" height="75" rx="8" fill="#164e63" stroke="#22d3ee" strokeWidth="2" />
              <text x="70" y="135" textAnchor="middle" fill="#67e8f9" fontSize="18">⭕</text>
              <text x="70" y="153" textAnchor="middle" fill="#a5f3fc" fontSize="10" fontWeight="bold">Circle</text>
              <text x="70" y="167" textAnchor="middle" fill="#cffafe" fontSize="7">calculateArea()</text>
              <text x="70" y="180" textAnchor="middle" fill="#5eead4" fontSize="7">→ π × r²</text>

              {/* Rectangle */}
              <rect x="150" y="115" width="100" height="75" rx="8" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
              <text x="200" y="135" textAnchor="middle" fill="#60a5fa" fontSize="18">🟦</text>
              <text x="200" y="153" textAnchor="middle" fill="#93c5fd" fontSize="10" fontWeight="bold">Rectangle</text>
              <text x="200" y="167" textAnchor="middle" fill="#bfdbfe" fontSize="7">calculateArea()</text>
              <text x="200" y="180" textAnchor="middle" fill="#60a5fa" fontSize="7">→ width × height</text>

              {/* Triangle */}
              <rect x="280" y="115" width="100" height="75" rx="8" fill="#14532d" stroke="#22c55e" strokeWidth="2" />
              <text x="330" y="135" textAnchor="middle" fill="#4ade80" fontSize="18">🔺</text>
              <text x="330" y="153" textAnchor="middle" fill="#86efac" fontSize="10" fontWeight="bold">Triangle</text>
              <text x="330" y="167" textAnchor="middle" fill="#bbf7d0" fontSize="7">calculateArea()</text>
              <text x="330" y="180" textAnchor="middle" fill="#4ade80" fontSize="7">→ ½ × b × h</text>
            </svg>

            <div className="text-center text-sm text-gray-400" dir="rtl">
              💡 كلهم عندهم <code className="text-purple-400">calculateArea()</code> لكن <span className="text-purple-400">كل واحد بيحسبها بطريقته</span>
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="mb-16">
          <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">📦</span>
              Interface & Implementation
            </h2>

            {/* Code - LTR */}
            <div className="bg-slate-900 rounded-xl overflow-hidden" dir="ltr">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="ml-4 text-sm text-gray-400">shapes.ts</span>
              </div>

              <div className="grid md:grid-cols-2">
                <pre className="p-4 text-sm overflow-x-auto border-l border-white/10">
                  <code>{`// Interface - العقد
interface Shape {
  calculateArea(): number;
  getInfo(): string;
}

// Implementation 1 - Circle
class Circle implements Shape {
  constructor(private radius: number) {}

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getInfo(): string {
    return \`Circle with radius \${this.radius}\`;
  }
}

// Implementation 2 - Rectangle
class Rectangle implements Shape {
  constructor(
    private width: number,
    private height: number
  ) {}

  calculateArea(): number {
    return this.width * this.height;
  }

  getInfo(): string {
    return \`Rectangle \${this.width}×\${this.height}\`;
  }
}

// Polymorphism in action!
function printArea(shape: Shape): void {
  console.log(\`Area: \${shape.calculateArea()}\`);
}

const circle = new Circle(5);
const rect = new Rectangle(4, 6);

printArea(circle);  // Area: 78.54
printArea(rect);    // Area: 24`}</code>
                </pre>

                <div className="p-4 text-sm bg-slate-950/50" dir="rtl">
                  <h4 className="text-purple-400 font-bold mb-4">🔍 شرح كل جزء:</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-950/40 rounded-lg border-r-4 border-purple-500">
                      <span className="text-purple-400 font-bold">📋 الـ Interface - العقد</span>
                      <p className="text-gray-400 text-xs mt-1">
                        <code className="text-teal-400">Shape</code> بيقول: "أي shape لازم يكون عنده <code className="text-blue-400">calculateArea()</code> و <code className="text-blue-400">getInfo()</code>"
                      </p>
                    </div>
                    <div className="p-3 bg-teal-950/40 rounded-lg border-r-4 border-teal-500">
                      <span className="text-teal-400 font-bold">🔌 implements - التنفيذ</span>
                      <p className="text-gray-400 text-xs mt-1">
                        <code className="text-amber-400">Circle implements Shape</code> يعني Circle بيوعد إنه ينفذ كل حاجة في الـ interface
                      </p>
                    </div>
                    <div className="p-3 bg-blue-950/40 rounded-lg border-r-4 border-blue-500">
                      <span className="text-blue-400 font-bold">🔢 كل واحد بيحسب بطريقته</span>
                      <p className="text-gray-400 text-xs mt-1">
                        Circle بيستخدم <code className="text-rose-400">π×r²</code> والـ Rectangle بيستخدم <code className="text-rose-400">width×height</code>
                      </p>
                    </div>
                    <div className="p-3 bg-amber-950/40 rounded-lg border-r-4 border-amber-500">
                      <span className="text-amber-400 font-bold">✨ السحر - Polymorphism!</span>
                      <p className="text-gray-400 text-xs mt-1">
                        الـ <code className="text-purple-400">printArea()</code> بتاخد أي <code className="text-teal-400">Shape</code> - مش مهم نوعه! كل واحد هيشتغل بطريقته
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
          <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 border border-purple-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🎮</span>
              <span dir="rtl">جرب بنفسك - حساب المساحة</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Shape Selector */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-purple-400 mb-4" dir="rtl">اختار الشكل:</h3>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {(['circle', 'rectangle', 'triangle'] as const).map((shape) => (
                    <button
                      key={shape}
                      onClick={() => setSelectedShape(shape)}
                      className={`p-4 rounded-xl text-center transition ${selectedShape === shape
                          ? 'bg-purple-600 text-white'
                          : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                        }`}
                    >
                      <span className="text-3xl">{shapes[shape].emoji}</span>
                      <p className="text-sm mt-1">{shapes[shape].name}</p>
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">{shapes[selectedShape].label1}</label>
                    <input
                      type="number"
                      value={dimension1}
                      onChange={(e) => setDimension1(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-lg text-white"
                    />
                  </div>
                  {shapes[selectedShape].label2 && (
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">{shapes[selectedShape].label2}</label>
                      <input
                        type="number"
                        value={dimension2}
                        onChange={(e) => setDimension2(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-lg text-white"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Result */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-emerald-400 mb-4" dir="rtl">النتيجة:</h3>

                <div className="text-center">
                  <span className="text-6xl">{shapes[selectedShape].emoji}</span>

                  <div className="mt-4 p-4 bg-purple-950/50 border border-purple-500/30 rounded-xl">
                    <p className="text-sm text-gray-400 mb-1" dir="ltr">shape.calculateArea()</p>
                    <p className="text-3xl font-bold text-purple-400">{calculateArea()}</p>
                    <p className="text-xs text-gray-500 mt-1">square units</p>
                  </div>

                  <div className="mt-4 p-3 bg-slate-800/50 rounded-lg font-mono text-xs text-gray-400" dir="ltr">
                    const shape = new {shapes[selectedShape].name}({dimension1}{shapes[selectedShape].label2 && `, ${dimension2}`});
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-950/30 border border-yellow-500/20 rounded-xl" dir="rtl">
              <p className="text-sm text-yellow-400">
                💡 <span className="font-bold">لاحظ:</span> كلهم بيستخدموا نفس الـ method اسمها <code className="text-purple-400">calculateArea()</code> - لكن كل واحد بيحسبها بطريقته!
              </p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-16">
          <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6" dir="rtl">📝 ملخص Polymorphism</h2>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-4 bg-purple-950/30 border border-purple-500/20 rounded-xl text-center">
                <span className="text-3xl">🎭</span>
                <h4 className="text-purple-400 font-bold mt-2">One Interface</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">نفس الـ interface</p>
              </div>
              <div className="p-4 bg-teal-950/30 border border-teal-500/20 rounded-xl text-center">
                <span className="text-3xl">🔀</span>
                <h4 className="text-teal-400 font-bold mt-2">Many Forms</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">سلوكيات مختلفة</p>
              </div>
              <div className="p-4 bg-blue-950/30 border border-blue-500/20 rounded-xl text-center">
                <span className="text-3xl">📋</span>
                <h4 className="text-blue-400 font-bold mt-2">Interface</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">العقد اللي بيتنفذ</p>
              </div>
              <div className="p-4 bg-amber-950/30 border border-amber-500/20 rounded-xl text-center">
                <span className="text-3xl">🏛️</span>
                <h4 className="text-amber-400 font-bold mt-2">Abstract</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">نص implementation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/module3_inheritance" className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Inheritance
          </Link>
          <Link href="/module5_abstraction" className="px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold rounded-lg hover:from-rose-500 hover:to-pink-500 transition flex items-center gap-2">
            <span dir="rtl">الوحدة التالية: Abstraction</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}
