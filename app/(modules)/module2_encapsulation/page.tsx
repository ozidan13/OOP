'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Module2Page() {
  const [balance, setBalance] = useState(1000);
  const [depositAmount, setDepositAmount] = useState('100');
  const [withdrawAmount, setWithdrawAmount] = useState('50');
  const [logs, setLogs] = useState<string[]>(['💰 تم إنشاء الحساب برصيد 1000 جنيه']);

  const deposit = () => {
    const amount = parseInt(depositAmount) || 0;
    if (amount > 0) {
      setBalance(balance + amount);
      setLogs([...logs, `✅ إيداع ${amount} جنيه - الرصيد الجديد: ${balance + amount}`]);
    } else {
      setLogs([...logs, `❌ خطأ: المبلغ لازم يكون أكبر من صفر`]);
    }
  };

  const withdraw = () => {
    const amount = parseInt(withdrawAmount) || 0;
    if (amount <= 0) {
      setLogs([...logs, `❌ خطأ: المبلغ لازم يكون أكبر من صفر`]);
    } else if (amount > balance) {
      setLogs([...logs, `❌ خطأ: الرصيد مش كفاية! (طلبت ${amount} والموجود ${balance})`]);
    } else {
      setBalance(balance - amount);
      setLogs([...logs, `✅ سحب ${amount} جنيه - الرصيد الجديد: ${balance - amount}`]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-emerald-400 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">Module 2</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Pillar 1 of OOP
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Encapsulation
          </h1>
          <p className="text-xl text-gray-400" dir="rtl">
            التغليف - حماية البيانات والتحكم في الوصول
          </p>
        </div>

        {/* What is Encapsulation */}
        <section className="mb-16">
          <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🔒</span>
              <span dir="rtl">إيه هو التغليف Encapsulation؟</span>
            </h2>

            <div className="space-y-6 text-gray-300 leading-loose" dir="rtl">
              <div className="p-5 bg-emerald-950/30 border border-emerald-500/20 rounded-xl">
                <h3 className="text-lg font-bold text-emerald-400 mb-3">💊 تشبيه الكبسولة</h3>
                <p>
                  فكر في <span className="text-emerald-400 font-bold">كبسولة الدوا</span>:
                </p>
                <ul className="mt-3 space-y-2 mr-4">
                  <li>• الدوا اللي جوه <span className="text-yellow-400 font-bold">محمي</span> - مش هتقدر تلمسه مباشرة</li>
                  <li>• بتاخد الكبسولة كلها <span className="text-teal-400 font-bold">كوحدة واحدة</span></li>
                  <li>• مش محتاج تعرف التركيبة الكيميائية عشان تستخدمها</li>
                </ul>
                <p className="mt-3 text-emerald-400 font-bold">
                  ده بالظبط الـ Encapsulation: تجميع البيانات مع الدوال اللي بتتعامل معاها، وإخفاء التفاصيل! 🎯
                </p>
              </div>

              {/* SVG Visualization */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Without Encapsulation */}
                <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4">
                  <h4 className="text-red-400 font-bold mb-3 text-center">❌ من غير Encapsulation</h4>
                  <svg viewBox="0 0 200 120" className="w-full h-32" dir="ltr">
                    <rect x="60" y="20" width="80" height="80" rx="8" fill="#1f1f1f" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,3" />
                    <text x="100" y="45" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">BankAccount</text>
                    <text x="100" y="65" textAnchor="middle" fill="#fca5a5" fontSize="9">balance = 1000</text>

                    <path d="M20 60 L55 60" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed)" />
                    <text x="10" y="50" fill="#ef4444" fontSize="7">Anyone</text>
                    <text x="5" y="70" fill="#ef4444" fontSize="6">can modify!</text>

                    <defs>
                      <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
                      </marker>
                    </defs>
                  </svg>
                  <p className="text-xs text-red-400 text-center mt-2">
                    ⚠️ أي حد يقدر يغير الرصيد لـ -1000!
                  </p>
                </div>

                {/* With Encapsulation */}
                <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-4">
                  <h4 className="text-emerald-400 font-bold mb-3 text-center">✅ مع Encapsulation</h4>
                  <svg viewBox="0 0 200 120" className="w-full h-32" dir="ltr">
                    <rect x="50" y="10" width="100" height="100" rx="12" fill="none" stroke="#10b981" strokeWidth="3" />

                    <rect x="65" y="25" width="70" height="30" rx="4" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
                    <text x="100" y="38" textAnchor="middle" fill="#6ee7b7" fontSize="7">🔒 private</text>
                    <text x="100" y="50" textAnchor="middle" fill="#a7f3d0" fontSize="8">_balance = 1000</text>

                    <rect x="65" y="65" width="30" height="20" rx="3" fill="#14532d" stroke="#22c55e" strokeWidth="1" />
                    <text x="80" y="78" textAnchor="middle" fill="#86efac" fontSize="6">deposit()</text>

                    <rect x="105" y="65" width="30" height="20" rx="3" fill="#14532d" stroke="#22c55e" strokeWidth="1" />
                    <text x="120" y="78" textAnchor="middle" fill="#86efac" fontSize="6">withdraw()</text>

                    <path d="M20 75 L60 75" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowGreen)" />
                    <text x="5" y="70" fill="#10b981" fontSize="7">Through</text>
                    <text x="2" y="82" fill="#10b981" fontSize="6">methods only</text>

                    <defs>
                      <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
                      </marker>
                    </defs>
                  </svg>
                  <p className="text-xs text-emerald-400 text-center mt-2">
                    ✓ الـ balance محمي - التعديل بس من خلال الـ methods
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Access Modifiers */}
        <section className="mb-16">
          <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🎚️</span>
              Access Modifiers
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Public */}
              <div className="bg-blue-950/30 border border-blue-500/30 rounded-xl p-5">
                <div className="text-center mb-4">
                  <span className="text-4xl">🌍</span>
                  <h3 className="text-xl font-bold text-blue-400 mt-2">Public</h3>
                </div>
                <div className="text-sm text-gray-300 space-y-2" dir="rtl">
                  <p>متاح للـ <span className="text-blue-400 font-bold">كل الناس</span></p>
                  <p>زي باب البيت الرئيسي - أي حد يقدر يدخل منه</p>
                </div>
                <div className="mt-3 p-2 bg-slate-900/50 rounded font-mono text-xs" dir="ltr">
                  <span className="text-blue-400">public</span> name: string;
                </div>
              </div>

              {/* Private */}
              <div className="bg-red-950/30 border border-red-500/30 rounded-xl p-5">
                <div className="text-center mb-4">
                  <span className="text-4xl">🔐</span>
                  <h3 className="text-xl font-bold text-red-400 mt-2">Private</h3>
                </div>
                <div className="text-sm text-gray-300 space-y-2" dir="rtl">
                  <p>متاح للـ <span className="text-red-400 font-bold">Class نفسها بس</span></p>
                  <p>زي الخزنة السرية - صاحب البيت بس يقدر يفتحها</p>
                </div>
                <div className="mt-3 p-2 bg-slate-900/50 rounded font-mono text-xs" dir="ltr">
                  <span className="text-red-400">private</span> _balance: number;
                </div>
              </div>

              {/* Protected */}
              <div className="bg-yellow-950/30 border border-yellow-500/30 rounded-xl p-5">
                <div className="text-center mb-4">
                  <span className="text-4xl">👨‍👩‍👧</span>
                  <h3 className="text-xl font-bold text-yellow-400 mt-2">Protected</h3>
                </div>
                <div className="text-sm text-gray-300 space-y-2" dir="rtl">
                  <p>متاح للـ <span className="text-yellow-400 font-bold">Class والأولاد</span></p>
                  <p>زي أسرار العيلة - العيلة بس تعرفها</p>
                </div>
                <div className="mt-3 p-2 bg-slate-900/50 rounded font-mono text-xs" dir="ltr">
                  <span className="text-yellow-400">protected</span> id: number;
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getters and Setters */}
        <section className="mb-16">
          <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🚪</span>
              Getters & Setters
            </h2>

            <div className="space-y-6 text-gray-300 leading-loose">
              <div className="p-5 bg-purple-950/30 border border-purple-500/20 rounded-xl" dir="rtl">
                <h3 className="text-lg font-bold text-purple-400 mb-3">🎫 إيه هي الـ Getters و Setters؟</h3>
                <p>
                  لو البيانات الـ private زي <span className="text-yellow-400 font-bold">الخزنة</span>، فالـ Getters و Setters هم زي <span className="text-purple-400 font-bold">موظف البنك</span>:
                </p>
                <ul className="mt-3 space-y-2 mr-4">
                  <li>• <span className="text-teal-400 font-bold">Getter</span>: بيجيبلك القيمة (زي لما تسأل عن الرصيد)</li>
                  <li>• <span className="text-rose-400 font-bold">Setter</span>: بيغير القيمة بعد ما يتحقق (زي لما تعمل إيداع)</li>
                </ul>
              </div>

              {/* Code Example - LTR */}
              <div className="bg-slate-900 rounded-xl overflow-hidden" dir="ltr">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <span className="ml-4 text-sm text-gray-400">bankAccount.ts</span>
                </div>

                <div className="grid md:grid-cols-2">
                  <pre className="p-4 text-sm overflow-x-auto border-l border-white/10">
                    <code>{`class BankAccount {
  // Private - محمي ومش ظاهر
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  // Getter - للقراءة بس
  get balance(): number {
    return this._balance;
  }

  // Setter - للتعديل مع validation
  set balance(value: number) {
    if (value < 0) {
      throw new Error("الرصيد مينفعش يكون سالب!");
    }
    this._balance = value;
  }

  // Safe deposit method
  deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
    }
  }

  // Safe withdraw method
  withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      return true;
    }
    return false;
  }
}`}</code>
                  </pre>

                  <div className="p-4 text-sm bg-slate-950/50" dir="rtl">
                    <h4 className="text-purple-400 font-bold mb-4">🔍 شرح كل جزء:</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-red-950/40 rounded-lg border-r-4 border-red-500">
                        <span className="text-red-400 font-bold">🔒 البيانات المحمية</span>
                        <p className="text-gray-400 text-xs mt-1">
                          الـ <code className="text-teal-400">_balance</code> عليه <code className="text-red-400">private</code> - يعني محدش يقدر يوصله من بره الـ class!
                        </p>
                      </div>
                      <div className="p-3 bg-teal-950/40 rounded-lg border-r-4 border-teal-500">
                        <span className="text-teal-400 font-bold">👁️ الـ Getter</span>
                        <p className="text-gray-400 text-xs mt-1">
                          لما حد يستخدم <code className="text-purple-400">account.balance</code>، الـ getter بيرجع القيمة بدون ما يكشف الـ private variable
                        </p>
                      </div>
                      <div className="p-3 bg-rose-950/40 rounded-lg border-r-4 border-rose-500">
                        <span className="text-rose-400 font-bold">✏️ الـ Setter مع Validation</span>
                        <p className="text-gray-400 text-xs mt-1">
                          قبل ما يغير القيمة، بيتحقق إنها مش سالبة! لو سالبة، بيرمي Error 💥
                        </p>
                      </div>
                      <div className="p-3 bg-emerald-950/40 rounded-lg border-r-4 border-emerald-500">
                        <span className="text-emerald-400 font-bold">🛡️ Methods آمنة</span>
                        <p className="text-gray-400 text-xs mt-1">
                          الـ <code className="text-blue-400">deposit()</code> و <code className="text-blue-400">withdraw()</code> بيتحققوا قبل ما يعملوا أي حاجة
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
          <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🏦</span>
              <span dir="rtl">جرب بنفسك - حساب بنكي محمي</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Bank Account Display */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-white/10">
                <div className="text-center mb-6">
                  <span className="text-6xl">💳</span>
                  <h3 className="text-lg font-bold text-emerald-400 mt-2">BankAccount</h3>
                </div>

                <div className="bg-emerald-950/50 border border-emerald-500/30 rounded-xl p-6 text-center mb-6">
                  <p className="text-sm text-gray-400 mb-1" dir="rtl">الرصيد الحالي</p>
                  <p className="text-4xl font-bold text-emerald-400">{balance} <span className="text-lg" dir="rtl">جنيه</span></p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1" dir="rtl">مبلغ الإيداع</label>
                    <input
                      type="number"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-lg text-white text-sm"
                    />
                    <button
                      onClick={deposit}
                      className="w-full mt-2 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-sm transition"
                    >
                      <span dir="rtl">إيداع 💵</span>
                    </button>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1" dir="rtl">مبلغ السحب</label>
                    <input
                      type="number"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-lg text-white text-sm"
                    />
                    <button
                      onClick={withdraw}
                      className="w-full mt-2 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-lg text-sm transition"
                    >
                      <span dir="rtl">سحب 💸</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Console Logs */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2">
                  <span>📋</span> <span dir="rtl">سجل العمليات</span>
                </h3>

                <div className="bg-slate-950 rounded-lg p-4 h-64 overflow-y-auto font-mono text-sm" dir="rtl">
                  {logs.map((log, i) => (
                    <div key={i} className="py-1 text-gray-300 border-b border-white/5 last:border-0">
                      {log}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setLogs(['💰 تم إنشاء الحساب برصيد 1000 جنيه'])}
                  className="mt-3 text-xs text-gray-500 hover:text-gray-300 transition"
                >
                  <span dir="rtl">🗑️ مسح السجل</span>
                </button>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-950/30 border border-yellow-500/20 rounded-xl" dir="rtl">
              <p className="text-sm text-yellow-400">
                💡 <span className="font-bold">لاحظ:</span> مش هتقدر تسحب أكتر من الرصيد! ده لأن الـ withdraw() بتتحقق الأول. ده معنى <span className="font-bold">حماية البيانات</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-16">
          <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6" dir="rtl">📝 ملخص Encapsulation</h2>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-emerald-950/30 border border-emerald-500/20 rounded-xl text-center">
                <span className="text-3xl">🔒</span>
                <h4 className="text-emerald-400 font-bold mt-2">Data Hiding</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">private و protected بيحموا البيانات</p>
              </div>
              <div className="p-4 bg-purple-950/30 border border-purple-500/20 rounded-xl text-center">
                <span className="text-3xl">🚪</span>
                <h4 className="text-purple-400 font-bold mt-2">Getters/Setters</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">التحكم في القراءة والكتابة</p>
              </div>
              <div className="p-4 bg-blue-950/30 border border-blue-500/20 rounded-xl text-center">
                <span className="text-3xl">✅</span>
                <h4 className="text-blue-400 font-bold mt-2">Validation</h4>
                <p className="text-xs text-gray-400 mt-1" dir="rtl">التحقق قبل التعديل</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/module1_classes_objects" className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Classes & Objects
          </Link>
          <Link href="/module3_inheritance" className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-lg hover:from-amber-500 hover:to-orange-500 transition flex items-center gap-2">
            <span dir="rtl">الوحدة التالية: Inheritance</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}