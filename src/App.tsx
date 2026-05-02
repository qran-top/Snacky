/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Send, IceCream, Star, PartyPopper, Truck, Music, Instagram, Mail, Phone, MapPin } from "lucide-react";

const base = import.meta.env.BASE_URL;

const MENU_ITEMS = [
  {
    id: 1,
    title: "بطاط حلزوني",
    description: "بطاط مقرمش طازج مع نكهات مميزة",
    image: `${base}images/spiral_potato.png`,
  },
  {
    id: 2,
    title: "آيس كريم",
    description: "آيس كريم بارد ومنعش لجميع أذواقكم",
    image: `${base}images/ice_cream.png`,
  },
  {
    id: 3,
    title: "نفيش",
    description: "نفيش طازج وحار بمذاق رائع",
    image: `${base}images/popcorn.png`,
  },
  {
    id: 4,
    title: "شعر بنات",
    description: "حلاوة غزل البنات الوردية والناعمة",
    image: `${base}images/cotton_candy.png`,
  },
  {
    id: 5,
    title: "ذرة",
    description: "حبوب الذرة بالزبدة والليمون",
    image: `${base}images/corn.png`,
  },
  {
    id: 6,
    title: "فرايز",
    description: "بطاط مقلية ذهبية ومقرمشة",
    image: `${base}images/fries.png`,
  },
];

const CONTACT_INFO = {
  phones: ["60002799", "60002797"],
  email: "Snacky.q8@hotmail.com",
  socials: {
    instagram: "Snacky.q8",
    tiktok: "Snacky.q8",
    snapchat: "Snacky.q8",
  },
};

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-amber-50 text-slate-800 font-sans selection:bg-orange-100" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-50/80 backdrop-blur-md border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-orange-600 uppercase leading-none">Snacky</span>
              <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase mt-1">Mobile Snack Station • سناكات متنقلة</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-slate-600 font-semibold text-sm uppercase tracking-wide">
            <a href="#home" className="hover:text-orange-600 transition-colors">الرئيسية</a>
            <a href="#about" className="hover:text-orange-600 transition-colors">عن سناكي</a>
            <a href="#menu" className="hover:text-orange-600 transition-colors">المنيو</a>
            <a href="#contact" className="hover:text-orange-600 transition-colors">اتصل بنا</a>
          </div>
          <a
            href={`tel:${CONTACT_INFO.phones[0]}`}
            className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold text-sm hover:scale-105 transition-all shadow-xl shadow-slate-200"
          >
            احجز الآن
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="col-span-12 lg:col-span-7 flex flex-col items-start gap-6"
          >
            <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-bold">
              نغطّي جميع مناطق الكويت 🇰🇼
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-800 leading-tight">
              أحلى فعاليات للأطفال والكبار!<br />
              <span className="text-orange-500 underline decoration-amber-300 underline-offset-8">سناكي يمركم!</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              سيارة سناكي عبارة عن سناكات متنقلة توصل لجميع المناطق وجميع المناسبات، الفعاليات، الزوارة، والأعياد الوطنية والميلاد. ما يحتاج تروح لأي مكان... نحن نأتي إليك!
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl flex items-center gap-3 hover:bg-slate-800 transition-colors">
                تواصل واتساب
                <Send className="w-5 h-5 -rotate-90" />
              </button>
              <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-amber-200 shadow-sm">
                <div className="flex -space-x-2 space-x-reverse">
                  {[
                    `${base}images/popcorn.png`,
                    `${base}images/ice_cream.png`,
                    `${base}images/fries.png`
                  ].map((src, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img
                        src={src}
                        alt="User"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-xs">
                  <p className="font-bold text-slate-900">+500 عميل سعيد</p>
                  <p className="text-slate-400">نخدم جميع مناطق الكويت</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={`${base}images/hero_truck.png`}
                alt="Truck"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 right-6">
                <PartyPopper className="w-12 h-12 text-orange-400" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-orange-100 flex flex-col items-center justify-center text-center">
              <div className="text-3xl mb-2">🍿</div>
              <h3 className="font-bold text-slate-800">نفيش</h3>
            </div>
            <div className="bg-orange-500 p-6 rounded-3xl shadow-lg text-white flex flex-col items-center justify-center text-center">
              <div className="text-3xl mb-2">🌽</div>
              <h3 className="font-bold">ذرة</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services/About */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 text-slate-300 font-bold text-9xl uppercase tracking-tighter mix-blend-multiply pointer-events-none origin-top-right rotate-90 select-none">
          Catering
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-5xl font-black text-slate-800 mb-6">ليش تختار سناكي؟</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                نحن نهتم بأدق التفاصيل لنضمن نجاح فعاليتك. خدمتنا متكاملة وسريعة وتضيف جو من البهجة لمناسباتكم.
              </p>
            </div>
            <div className="w-48 h-2 bg-orange-500 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "نوصلكم وين ما كنتم", desc: "نغطي جميع مناطق الكويت ونصلكم في الوقت المحدد." },
              { icon: Music, title: "أجواء الفرح", desc: "نضيف لمسة من المرح والبهجة لمناسباتكم الخاصة." },
              { icon: Star, title: "جودة وطعم", desc: "نستخدم أفضل المكونات لنقدم لكم طعماً لا ينسى." },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-amber-50 p-10 rounded-[2.5rem] border border-amber-200 group transition-all"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:bg-orange-500 group-hover:scale-110 transition-all">
                  <feature.icon className="text-orange-500 w-8 h-8 group-hover:text-white transition-all" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-amber-200 pb-12">
            <div>
              <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4 block">قائمتنا المختارة</span>
              <h2 className="text-5xl font-black text-slate-800">قائمة اللذة لدينا</h2>
            </div>
            <div className="text-left font-bold text-slate-200 text-6xl uppercase tracking-tighter opacity-40 hidden lg:block select-none">
              Snacks
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {MENU_ITEMS.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-amber-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-10 text-center">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed italic">"{item.description}"</p>
                  <button className="w-full py-4 bg-amber-50 text-slate-800 font-bold rounded-2xl border border-amber-200 group-hover:bg-slate-900 group-hover:text-white transition-all">
                    عرض التفاصيل
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-32 bg-orange-500/10 blur-3xl opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">لقطات من فعالياتنا</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>
          <div className="flex gap-8 overflow-x-auto pb-10 hide-scrollbar cursor-grab active:cursor-grabbing">
            {[
              { src: `${base}images/spiral_potato.png`, title: "بطاط حلزوني مميز" },
              { src: `${base}images/cotton_candy.png`, title: "شعر بنات طازج" },
              { src: `${base}images/popcorn.png`, title: "نفيش حار وفريش" },
              { src: `${base}images/corn.png`, title: "ذرة بالزبدة والليمون" }
            ].map((img, idx) => (
              <div key={idx} className="min-w-[400px] h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5 flex-shrink-0 group relative">
                <img
                  src={img.src}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                  <p className="text-white font-bold text-xl">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-amber-50 text-slate-800 pt-24 pb-12 overflow-hidden relative border-t border-amber-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-20">
            <div>
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 bg-orange-500 rounded-[1.5rem] flex items-center justify-center text-white text-3xl font-black shadow-xl">
                  S
                </div>
                <div>
                  <h2 className="text-4xl font-black text-slate-800 uppercase leading-none">Snacky</h2>
                  <p className="text-orange-600 font-bold uppercase tracking-widest text-xs mt-1">Creative Catering</p>
                </div>
              </div>
              <p className="text-slate-500 text-xl leading-relaxed max-w-md italic mb-12">
                "أحلى فعاليات للأطفال والكبار! ما يحتاج تروح لمكان… سناكي يمركم!"
              </p>
              
              <div className="flex gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-amber-200 text-xl">📸</div>
                  <div className="text-sm">
                    <p className="text-slate-400 font-bold leading-none mb-1 text-[10px]">INSTAGRAM</p>
                    <p className="font-bold text-slate-700">@Snacky.q8</p>
                  </div>
                </div>
                <div className="w-px h-12 bg-amber-200 mx-4" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-amber-200 text-xl">🎵</div>
                  <div className="text-sm">
                    <p className="text-slate-400 font-bold leading-none mb-1 text-[10px]">TIKTOK</p>
                    <p className="font-bold text-slate-700">@Snacky.q8</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-amber-200">
              <h3 className="text-3xl font-black mb-10 text-slate-900">احجز لفعاليتك</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">تواصل هاتفي</span>
                  {CONTACT_INFO.phones.map((p) => (
                    <a key={p} href={`tel:${p}`} className="text-2xl font-black text-orange-600 hover:text-orange-500 transition-colors tracking-tight">{p}</a>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">البريد الإلكتروني</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-bold text-slate-700 break-all">{CONTACT_INFO.email}</a>
                </div>
              </div>
              <button className="w-full mt-12 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-xl shadow-slate-200 hover:scale-[1.02] transition-transform">
                ارسل لنا رسالة الآن
              </button>
            </div>
          </div>

          <div className="pt-10 border-t border-amber-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-sm font-medium">
              &copy; {new Date().getFullYear()} سناكي كويت. نصلكم جميع مناطق الكويت.
            </p>
            <div className="text-slate-300 font-black text-4xl uppercase tracking-tighter opacity-20 select-none">
              Geometric Balance
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
