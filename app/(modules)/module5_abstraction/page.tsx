'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Module5Page() {
  const [selectedDevice, setSelectedDevice] = useState<'tv' | 'ac' | 'light'>('tv');
  const [isOn, setIsOn] = useState(false);

  const devices = {
    tv: { emoji: '📺', name: 'TV', onAction: 'بيعرض الصورة والصوت', offAction: 'الشاشة اتفت' },
    ac: { emoji: '❄️', name: 'AC', onAction: 'بيضرب هوا بارد', offAction: 'التكييف وقف' },
    light: { emoji: '💡', name: 'Light', onAction: 'النور ولع', offAction: 'النور اتفي' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-rose-400 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs px-3 py-1 bg-rose-500/20 text-rose-400 rounded-full">Module 5</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/30 rounded-full text-rose-400 text-sm mb-6">
            <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
            Pillar 4 of OOP
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Abstraction
          </h1>
          <p className="text-xl text-gray-400" dir="rtl">
            التجريد - إخفاء التعقيد وإظهار الضروري فقط
          </p>
        </div>

        {/* What is Abstraction */}
        <section className="mb-16">
          <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🎨</span>
              <span dir="rtl">إيه هو التجريد Abstraction؟</span>
            </h2>

            <div className="space-y-6 text-gray-300 leading-loose" dir="rtl">
              <div className="p-5 bg-rose-950/30 border border-rose-500/20 rounded-xl">
                <h3 className="text-lg font-bold text-rose-400 mb-3">🚗 تشبيه العربية</h3>
                <p>
                  لما بتسوق <span className="text-rose-400 font-bold">عربية</span>:
                </p>
                <ul className="mt-3 space-y-2 mr-4">
                  <li>• بتدوس <span className="text-teal-400 font-bold">دواسة البنزين</span> → العربية بتمشي</li>
                  <li>• مش محتاج تعرف إزاي <span className="text-yellow-400 font-bold">المحرك شغال</span> جوه</li>
                  <li>• مش محتاج تفهم <span className="text-purple-400 font-bold">نظام الحقن</span> أو الجيربوكس</li>
                </ul>
                <p className="mt-3 text-rose-400 font-bold">
                  ده التجريد: إخفاء التفاصيل المعقدة وإظهار الـ interface البسيط! 🎯
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900/50 rounded-xl border border-white/5">
                  <h4 className="text-emerald-400 font-bold mb-2">✅ الفرق بين Abstraction و Encapsulation</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <span className="text-rose-400 font-bold">Abstraction</span>: إخفاء التعقيد (مش محتاج تعرف إزاي)</li>
                    <li>• <span className="text-emerald-400 font-bold">Encapsulation</span>: حماية البيانات (مينفعش تغير)</li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-xl border border-white/5">
                  <h4 className="text-blue-400 font-bold mb-2">📌 الفايدة</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• تبسيط الاستخدام للمبرمجين</li>
                    <li>• إخفاء التفاصيل الداخلية</li>
                    <li>• سهولة التعديل في المستقبل</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual - Layers of Abstraction */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            <span dir="rtl">🏗️ طبقات التجريد</span>
          </h2>

          <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8">
            <svg viewBox="0 0 400 220" className="w-full h-56 mb-6">
              {/* User Layer */}
              <rect x="100" y="10" width="200" height="40" rx="8" fill="#4c1d95" stroke="#a855f7" strokeWidth="2" />
              <text x="200" y="30" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">👤 User / Developer</text>
              <text x="200" y="43" textAnchor="middle" fill="#e9d5ff" fontSize="8">Presses button or calls method</text>

              {/* Arrow */}
              <path d="M200 50 L200 65" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrowPurple)" />

              {/* Interface Layer */}
              <rect x="80" y="70" width="240" height="40" rx="8" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
              <text x="200" y="90" textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="bold">🔌 Interface / Abstract Class</text>
              <text x="200" y="103" textAnchor="middle" fill="#93c5fd" fontSize="8">Contract defining available methods</text>

              {/* Arrow */}
              <path d="M200 110 L200 125" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />

              {/* Implementation Layer */}
              <rect x="60" y="130" width="280" height="40" rx="8" fill="#14532d" stroke="#22c55e" strokeWidth="2" />
              <text x="200" y="150" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="bold">⚙️ Implementation Details</text>
              <text x="200" y="163" textAnchor="middle" fill="#86efac" fontSize="8">Complex code running behind the scenes</text>

              {/* Arrow */}
              <path d="M200 170 L200 185" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowGreenAbs)" />

              {/* Hardware/System Layer */}
              <rect x="40" y="190" width="320" height="25" rx="8" fill="#1f2937" stroke="#6b7280" strokeWidth="1" />
              <text x="200" y="207" textAnchor="middle" fill="#9ca3af" fontSize="9">💾 System / Hardware / Database</text>

              {/* Markers */}
              <defs>
                <marker id="arrowPurple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L9,3 z" fill="#a855f7" />
                </marker>
                <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
                </marker>
                <marker id="arrowGreenAbs" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L9,3 z" fill="#22c55e" />
                </marker>
              </defs>

              {/* Labels on side */}
              <text x="20" y="35" fill="#a855f7" fontSize="8" transform="rotate(-90, 20, 35)">High Level</text>
              <text x="380" y="180" fill="#22c55e" fontSize="8" transform="rotate(-90, 380, 180)">Low Level</text>
            </svg>

            <div className="text-center text-sm text-gray-400" dir="rtl">
              💡 المستخدم بيتعامل مع الطبقة العليا بس - مش محتاج يعرف التفاصيل اللي تحت
            </div>
          </div>
        </section>

        {/* Real World Examples */}
        <section className="mb-16">
          <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🌍</span>
              <span dir="rtl">أمثلة من الحياة الحقيقية</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-blue-950/30 border border-blue-500/20 rounded-xl">
                <div className="text-center mb-3">
                  <span className="text-4xl">📱</span>
                </div>
                <h4 className="text-blue-400 font-bold text-center mb-2" dir="rtl">الموبايل</h4>
                <p className="text-sm text-gray-400 text-center" dir="rtl">
                  بتفتحه وتستخدمه - مش محتاج تفهم الـ circuits جوه
                </p>
              </div>

              <div className="p-5 bg-teal-950/30 border border-teal-500/20 rounded-xl">
                <div className="text-center mb-3">
                  <span className="text-4xl">☕</span>
                </div>
                <h4 className="text-teal-400 font-bold text-center mb-2" dir="rtl">ماكينة القهوة</h4>
                <p className="text-sm text-gray-400 text-center" dir="rtl">
                  بتدوس زرار - مش محتاج تعرف إزاي بتسخن المية
                </p>
              </div>

              <div className="p-5 bg-amber-950/30 border border-amber-500/20 rounded-xl">
                <div className="text-center mb-3">
                  <span className="text-4xl">🏧</span>
                </div>
                <h4 className="text-amber-400 font-bold text-center mb-2" dir="rtl">ATM</h4>
                <p className="text-sm text-gray-400 text-center" dir="rtl">
                  بتسحب فلوس - مش محتاج تعرف إزاي بيتواصل مع البنك
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="mb-16">
          <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">📦</span>
              Abstract Class
            </h2>

            {/* Code - LTR */}
            <div className="bg-slate-900 rounded-xl overflow-hidden" dir="ltr">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="ml-4 text-sm text-gray-400">smartDevice.ts</span>
              </div>

              <div className="grid md:grid-cols-2">
                <pre className="p-4 text-sm overflow-x-auto border-l border-white/10">
                  <code>{`// Abstract Class - القالب المجرد
abstract class SmartDevice {
  protected isOn: boolean = false;
  
  // Regular method - جاهزة للاستخدام
  togglePower(): void {
    this.isOn = !this.isOn;
    if (this.isOn) {
      this.turnOn();
    } else {
      this.turnOff();
    }
  }

  // Abstract Methods - لازم تتنفذ
  abstract turnOn(): void;
  abstract turnOff(): void;
  abstract getStatus(): string;
}

// Implementation 1 - TV
class SmartTV extends SmartDevice {
  turnOn(): void {
    console.log("📺 TV is now ON");
  }
  
  turnOff(): void {
    console.log("📺 TV is now OFF");
  }
  
  getStatus(): string {
    return this.isOn ? "Playing" : "Off";
  }
}

// Implementation 2 - AC
class SmartAC extends SmartDevice {
  turnOn(): void {
    console.log("❄️ AC is cooling");
  }
  
  turnOff(): void {
    console.log("❄️ AC stopped");
  }
  
  getStatus(): string {
    return this.isOn ? "Cooling" : "Off";
  }
}`}</code>
                </pre>

                <div className="p-4 text-sm bg-slate-950/50" dir="rtl">
                  <h4 className="text-rose-400 font-bold mb-4">🔍 شرح كل جزء:</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-rose-950/40 rounded-lg border-r-4 border-rose-500">
                      <span className="text-rose-400 font-bold">🏛️ الـ Abstract Class</span>
                      <p className="text-gray-400 text-xs mt-1">
                        <code className="text-purple-400">abstract class SmartDevice</code> - مينفعش تعمل منه Object مباشرة، لازم class يورثه
                      </p>
                    </div>
                    <div className="p-3 bg-blue-950/40 rounded-lg border-r-4 border-blue-500">
                      <span className="text-blue-400 font-bold">⚡ Method جاهزة</span>
                      <p className="text-gray-400 text-xs mt-1">
                        <code className="text-teal-400">togglePower()</code> فيها code جاهز - كل الأولاد بيورثوها زي ما هي
                      </p>
                    </div>
                    <div className="p-3 bg-purple-950/40 rounded-lg border-r-4 border-purple-500">
                      <span className="text-purple-400 font-bold">📋 Abstract Methods</span>
                      <p className="text-gray-400 text-xs mt-1">
                        <code className="text-amber-400">abstract turnOn()</code> - مفيهاش code! كل child لازم ينفذها بطريقته
                      </p>
                    </div>
                    <div className="p-3 bg-emerald-950/40 rounded-lg border-r-4 border-emerald-500">
                      <span className="text-emerald-400 font-bold">🔧 التنفيذ المختلف</span>
                      <p className="text-gray-400 text-xs mt-1">
                        <code className="text-rose-400">SmartTV</code> و <code className="text-rose-400">SmartAC</code> كل واحد نفذ الـ abstract methods بطريقته الخاصة!
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
          <div className="bg-gradient-to-br from-rose-900/20 to-pink-900/20 border border-rose-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🎮</span>
              <span dir="rtl">جرب بنفسك - Smart Home</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Device Selector */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-rose-400 mb-4" dir="rtl">اختار الجهاز:</h3>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {(['tv', 'ac', 'light'] as const).map((device) => (
                    <button
                      key={device}
                      onClick={() => {
                        setSelectedDevice(device);
                        setIsOn(false);
                      }}
                      className={`p-4 rounded-xl text-center transition ${selectedDevice === device
                        ? 'bg-rose-600 text-white'
                        : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                        }`}
                    >
                      <span className="text-3xl">{devices[device].emoji}</span>
                      <p className="text-sm mt-1">{devices[device].name}</p>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setIsOn(!isOn)}
                  className={`w-full py-4 rounded-xl font-bold text-white transition ${isOn
                    ? 'bg-red-600 hover:bg-red-500'
                    : 'bg-emerald-600 hover:bg-emerald-500'
                    }`}
                >
                  {isOn ? '🔴 Turn Off (turnOff)' : '🟢 Turn On (turnOn)'}
                </button>
              </div>

              {/* Result */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-emerald-400 mb-4" dir="rtl">الحالة:</h3>

                <div className="text-center">
                  <div className={`text-8xl transition-all duration-300 ${isOn ? 'opacity-100 scale-110' : 'opacity-50 scale-100'}`}>
                    {devices[selectedDevice].emoji}
                  </div>

                  <div className={`mt-4 p-4 rounded-xl transition-all ${isOn
                    ? 'bg-emerald-950/50 border border-emerald-500/30'
                    : 'bg-slate-800/50 border border-white/10'
                    }`}>
                    <p className="text-sm text-gray-400 mb-1" dir="ltr">getStatus()</p>
                    <p className={`text-xl font-bold ${isOn ? 'text-emerald-400' : 'text-gray-500'}`} dir="rtl">
                      {isOn ? devices[selectedDevice].onAction : devices[selectedDevice].offAction}
                    </p>
                  </div>

                  <div className="mt-4 p-3 bg-slate-800/50 rounded-lg font-mono text-xs text-gray-400" dir="ltr">
                    device.togglePower() → {isOn ? 'ON ✓' : 'OFF'}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-950/30 border border-yellow-500/20 rounded-xl" dir="rtl">
              <p className="text-sm text-yellow-400">
                💡 <span className="font-bold">لاحظ:</span> كل الأجهزة عندها نفس الـ interface (<code className="text-purple-400">togglePower</code>, <code className="text-purple-400">turnOn</code>, <code className="text-purple-400">turnOff</code>) - لكن كل واحد بيشتغل بطريقته الخاصة!
              </p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-16">
          <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6" dir="rtl">📝 ملخص Abstraction</h2>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-4 bg-rose-950/30 border border-rose-500/20 rounded-xl text-center">
                <span className="text-3xl">🎨</span>
                <h4 className="text-rose-400 font-bold mt-2">Hide Complexity</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">إخفاء التفاصيل المعقدة</p>
              </div>
              <div className="p-4 bg-purple-950/30 border border-purple-500/20 rounded-xl text-center">
                <span className="text-3xl">🔌</span>
                <h4 className="text-purple-400 font-bold mt-2">Simple Interface</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">واجهة سهلة الاستخدام</p>
              </div>
              <div className="p-4 bg-blue-950/30 border border-blue-500/20 rounded-xl text-center">
                <span className="text-3xl">🏛️</span>
                <h4 className="text-blue-400 font-bold mt-2">Abstract Class</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">قالب + abstract methods</p>
              </div>
              <div className="p-4 bg-emerald-950/30 border border-emerald-500/20 rounded-xl text-center">
                <span className="text-3xl">🔧</span>
                <h4 className="text-emerald-400 font-bold mt-2">Implementation</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">التنفيذ الفعلي</p>
              </div>
            </div>
          </div>
        </section>

        {/* OOP Pillars Summary */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-rose-900/20 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center" dir="rtl">🏆 أركان OOP الأربعة</h2>

            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/module2_encapsulation" className="p-4 bg-emerald-950/30 border border-emerald-500/20 rounded-xl text-center hover:border-emerald-400 transition">
                <span className="text-3xl">🔒</span>
                <h4 className="text-emerald-400 font-bold mt-2">Encapsulation</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">حماية البيانات</p>
              </Link>
              <Link href="/module3_inheritance" className="p-4 bg-amber-950/30 border border-amber-500/20 rounded-xl text-center hover:border-amber-400 transition">
                <span className="text-3xl">👨‍👩‍👧</span>
                <h4 className="text-amber-400 font-bold mt-2">Inheritance</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">الوراثة</p>
              </Link>
              <Link href="/module4_polymorphism" className="p-4 bg-purple-950/30 border border-purple-500/20 rounded-xl text-center hover:border-purple-400 transition">
                <span className="text-3xl">🎭</span>
                <h4 className="text-purple-400 font-bold mt-2">Polymorphism</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">تعدد الأشكال</p>
              </Link>
              <div className="p-4 bg-rose-950/30 border border-rose-500/30 rounded-xl text-center ring-2 ring-rose-500/50">
                <span className="text-3xl">🎨</span>
                <h4 className="text-rose-400 font-bold mt-2">Abstraction</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">التجريد ✓</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/module4_polymorphism" className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Polymorphism
          </Link>
          <Link href="/" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-500 hover:to-purple-500 transition flex items-center gap-2">
            🏠 Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
