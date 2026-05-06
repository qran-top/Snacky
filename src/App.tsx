/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
// Final deployment fix verification for snackyq8.com - Corrected Base Path

import { motion } from "motion/react";
import { Send, Star, PartyPopper, Truck, Music, Instagram, Video, Ghost } from "lucide-react";

// استيراد الصور من الملفات المرفوعة لضمان هوية سناكي الحقيقية
const friesImg = "/fries_cyan_cone.png";
const cottonCandy = "/cotton_candy_beach.png";
const spiralPotatoStick = "/spiral_potato_stick.png";
const popcornImg = "/popcorn_yellow_box.png";
const cornImg = "/corn_cup_hand.png";
const iceCreamImg = "/ice_cream_cone_mirror.png";
const heroTruck = "/snacky_van_full.png"; 

// صور إضافية للمعرض والمنيو
const iceCreamPopcorn = "/ice_cream_popcorn.png";
const popcornDetail = "/popcorn_box_detail.png";
const iceCreamPlain = "/ice_cream_cone_mirror.png";
const popcornYellow = "/popcorn_hand_holding.png";
const spiralPotatoesBox = "/spiral_potato_yellow_box.png";
const cornCupDetail = "/corn_scoop_detail.png";
const popcornCyanBox = "/popcorn_cyan_box.png";

const MENU_ITEMS = [
  {
    id: 1,
    title: "بطاط حلزوني",
    description: "بطاط حلزوني مقرمش طازج مع نكهات مميزة",
    image: spiralPotatoStick,
  },
  {
    id: 2,
    title: "آيس كريم سناكي",
    description: "آيس كريم بارد ومنعش، متوفر بالبوب كورن أو سادة",
    image: iceCreamPopcorn,
  },
  {
    id: 3,
    title: "نفيش (بوب كورن)",
    description: "نفيش طازج وحار بمذاق رائع في بوكس سناكي",
    image: popcornCyanBox,
  },
  {
    id: 4,
    title: "شعر بنات",
    description: "حلاوة غزل البنات الوردية والناعمة",
    image: cottonCandy,
  },
  {
    id: 5,
    title: "ذرة سناكي",
    description: "حبوب الذرة بالزبدة والليمون في كوب سناكي المميز",
    image: cornCupDetail,
  },
  {
    id: 6,
    title: "فرايز سناكي",
    description: "بطاط مقلية ذهبية ومقرمشة في قمع سناكي المبتكر",
    image: friesImg,
  },
  {
    id: 7,
    title: "بوكس بطاط حلزوني",
    description: "مجموعة من البطاط الحلزوني في بوكس للمشاركة",
    image: spiralPotatoesBox,
  },
];

const CONTACT_INFO = {
  phones: ["60002799", "60002797"],
  email: "Snacky.q8@hotmail.com",
  socials: {
    instagram: "https://instagram.com/Snacky.q8",
    tiktok: "https://tiktok.com/@snacky.q8",
    snapchat: "https://snapchat.com/add/snacky.q8",
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
    <>
      {/* Floating Social Bar */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[60] hidden xl:flex flex-col gap-4">
        {[
          { icon: Instagram, href: "https://instagram.com/snacky.q8", color: "hover:bg-pink-500" },
          { icon: Video, href: "https://tiktok.com/@snacky.q8", color: "hover:bg-slate-900" },
          { icon: Ghost, href: "https://snapchat.com/add/snacky.q8", color: "hover:bg-yellow-400 hover:text-slate-900" }
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            whileHover={{ scale: 1.1, x: 5 }}
            className={`w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary shadow-xl border border-white/50 transition-colors ${social.color} hover:text-white`}
          >
            <social.icon className="w-6 h-6" />
          </motion.a>
        ))}
      </div>

      {/* Main Container */}
      <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-cyan-100" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-cyan-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-2xl flex items-center justify-center text-white text-xl md:text-2xl font-black shadow-lg shadow-cyan-100">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-primary uppercase leading-none">Snacky</span>
              <span className="text-[8px] md:text-[10px] text-slate-500 font-medium tracking-widest uppercase mt-1">Mobile Snack Station • سناكات متنقلة</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-slate-600 font-semibold text-sm uppercase tracking-wide">
            <a href="#home" className="hover:text-primary transition-colors">الرئيسية</a>
            <a href="#about" className="hover:text-primary transition-colors">عن سناكي</a>
            <a href="#menu" className="hover:text-primary transition-colors">المنيو</a>
            <a href="#contact" className="hover:text-primary transition-colors">اتصل بنا</a>
          </div>
          <a
            href={`tel:${CONTACT_INFO.phones[0]}`}
            className="bg-slate-900 text-white px-4 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm hover:scale-105 transition-all shadow-xl shadow-slate-200"
          >
            احجز الآن
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 items-center relative z-10">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="col-span-12 lg:col-span-7 flex flex-col items-start gap-6"
          >
            <div className="inline-block px-4 py-1.5 bg-primary-light text-primary-dark rounded-full text-sm font-bold">
              نغطّي جميع مناطق الكويت 🇰🇼
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-slate-800 leading-tight">
              أجمل الفعاليات للأطفال والكبار!<br />
              <span className="text-primary underline decoration-secondary underline-offset-8">سناكي يصل إليكم</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
              سناكي هو عالم من السناكات المتنقلة بتصميم عصري وألوان مبهجة. نصل لجميع الجمعات والمناسبات والفعاليات لنضفي جواً من السعادة واللذة.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 w-full">
              <a 
                href={`https://wa.me/965${CONTACT_INFO.phones[0]}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white px-6 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg shadow-2xl shadow-green-100 flex items-center justify-center gap-3 hover:bg-green-600 transition-colors flex-1 md:flex-none"
              >
                تواصل واتساب
                <Send className="w-5 h-5 -rotate-90" />
              </a>
              <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-cyan-50 shadow-sm">
                <div className="flex -space-x-2 space-x-reverse">
                  {[
                    popcornImg,
                    iceCreamImg,
                    friesImg
                  ].map((src, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                      <img
                        src={src}
                        alt="Preview"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-xs">
                  <p className="font-bold text-slate-900">+500 عميل سعيد</p>
                  <p className="text-slate-400 text-[10px]">نخدم جميع مناطق الكويت</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="col-span-12 lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
              <img
                src={heroTruck}
                alt="Snacky Truck"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-black text-primary text-xl">سيارة سناكي</h3>
                  <div className="flex text-secondary">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
                <p className="text-sm text-slate-600 font-medium lowercase">@snacky.q8 • 60002799</p>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-6 -right-6 bg-secondary text-slate-800 p-6 rounded-3xl shadow-xl rotate-12 z-20 font-black flex flex-col items-center">
              <span className="text-2xl">🔥</span>
              <span>مميزة</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services/About */}
      <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-12">
            <div className="max-w-xl text-center md:text-right">
              <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">لماذا نحن؟</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-800 mb-8 leading-tight">هوية سناكي الفريدة وسحر المناسبات</h2>
              <p className="text-xl text-slate-500 leading-relaxed font-medium">
                تتميز سيارة سناكي بتصميمها المبتكر المقتبس من ألوان البحار والرمال الذهبية، مع شخصية سبونج بوب المحبوبة التي تجذب الكبار والصغار.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              <div className="w-full h-48 md:w-56 md:h-72 rounded-3xl overflow-hidden shadow-lg border-4 border-white rotate-3">
                <img src={popcornDetail} className="w-full h-full object-cover" alt="Detail" />
              </div>
              <div className="w-full h-48 md:w-56 md:h-72 rounded-3xl overflow-hidden shadow-lg border-4 border-white -rotate-3 mt-12">
                <img src={iceCreamPlain} className="w-full h-full object-cover" alt="Detail" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "تصميم عصري", desc: "سيارة سناكي الملونة بالسيان والأبيض بستايل 'الطلاء المنسال' تلفت الأنظار في أي مكان." },
              { icon: PartyPopper, title: "متعة بصرية وطعم رائع", desc: "نقدم الأشكال المفضلة مثل البطاط الحلزوني والنفيش الملون بطعم يجمع بين الجودة والشغف." },
              { icon: Star, title: "نظافة واحترافية", desc: "نلتزم بأعلى معايير النظافة والتعقيم، مع فريق عمل محترف يرتدي القفازات والزي الرسمي." },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[3.5rem] border border-cyan-50 group transition-all shadow-sm hover:shadow-xl hover:shadow-cyan-100/50"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-primary transition-all">
                  <feature.icon className="text-primary w-10 h-10 group-hover:text-white transition-all outline-none" />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-6">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">قائمتنا اللذيذة</span>
            <h2 className="text-4xl md:text-7xl font-black text-slate-800">جرب طعم سناكي المميز</h2>
            <div className="w-32 h-2 bg-secondary mx-auto mt-8 rounded-full" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {MENU_ITEMS.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group flex flex-col bg-slate-50 rounded-[4rem] overflow-hidden border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-cyan-100/30 transition-all duration-500"
              >
                <div className="relative h-96 overflow-hidden m-4 rounded-[3rem]">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="px-12 pb-12 pt-4 text-center">
                  <h3 className="text-2xl font-black text-slate-800 mb-4">{item.title}</h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed mb-10 h-12 overflow-hidden">
                    {item.description}
                  </p>
                  <button className="w-full py-5 bg-white text-primary font-black rounded-3xl border-2 border-primary/20 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all shadow-sm">
                    أضف لطلبك
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="text-right">
              <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">جولة في عالم سناكي</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-800">لقطات من الواقع</h2>
            </div>
            <p className="text-slate-500 max-w-sm font-medium">كل منتجاتنا تُحضر بعناية فائقة وتُقدم لكم في تغليف سناكي المبتكر لتكتمل متعة الطعم بالشكل الجميل.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="space-y-4 md:space-y-6">
              <div className="rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-white aspect-[3/4]">
                <img src={popcornDetail} alt="Gallery 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-white aspect-square">
                <img src={iceCreamPopcorn} alt="Gallery 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
            <div className="space-y-4 md:space-y-6 pt-12">
              <div className="rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-white aspect-square">
                <img src={popcornCyanBox} alt="Gallery 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-white aspect-[3/4]">
                <img src={spiralPotatoesBox} alt="Gallery 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-white aspect-[3/4]">
                <img src={cottonCandy} alt="Gallery 5" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-white aspect-square">
                <img src={cornCupDetail} alt="Gallery 6" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
            <div className="space-y-4 md:space-y-6 pt-12">
              <div className="rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-white aspect-square">
                <img src={friesImg} alt="Gallery 7" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-white aspect-[3/4]">
                <img src={heroTruck} alt="Gallery 8" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Full Width Image */}
      <section className="h-[60vh] relative mt-16 group overflow-hidden">
        <img src={popcornYellow} className="w-full h-full object-cover fixed-background" alt="Popcorn Background" />
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] flex items-center justify-center text-center p-6">
          <div className="max-w-4xl">
            <h2 className="text-white text-4xl md:text-7xl font-black mb-8 drop-shadow-2xl">طازج، لذيذ وممتع في كل لحظة!</h2>
            <div className="flex flex-wrap justify-center gap-12 text-white">
              <div className="flex flex-col">
                <span className="text-5xl font-black text-secondary">+10k</span>
                <span className="text-sm font-bold uppercase tracking-widest opacity-80">سناك تم تقديمه</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-black text-secondary">100%</span>
                <span className="text-sm font-bold uppercase tracking-widest opacity-80">طازج فريش</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-black text-secondary">24/7</span>
                <span className="text-sm font-bold uppercase tracking-widest opacity-80">دعم الفعاليات</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-white text-slate-800 pt-32 pb-12 overflow-hidden border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
            <div>
              <div className="flex items-center gap-5 mb-12">
                <div className="w-20 h-20 bg-primary rounded-[2.5rem] flex items-center justify-center text-white text-4xl font-black shadow-2xl shadow-cyan-200">
                  S
                </div>
                <div>
                  <h2 className="text-5xl font-black text-slate-800 uppercase leading-none">Snacky</h2>
                  <p className="text-primary font-black uppercase tracking-widest text-xs mt-2">سناكات متنقلة لكل مناسبة</p>
                </div>
              </div>
              <p className="text-slate-500 text-xl leading-relaxed max-w-md font-medium mb-16">
                "أجمل الفعاليات للأطفال والكبار، ولا تحتاجون للذهاب إلى أي مكان، سناكي يصل إليكم أينما كنتم ليصنع أجمل اللحظات السعيدة."
              </p>
              
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-black mb-10 text-slate-800 flex items-center gap-3">
                  <span className="w-2 h-8 bg-primary rounded-full" />
                  حساباتنا الرسمية
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noreferrer" className="group/social">
                    <div className="p-8 bg-slate-50/50 rounded-[2.5rem] flex flex-col items-center gap-5 transition-all duration-500 hover:bg-primary hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30 border border-transparent hover:border-white/20">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover/social:scale-110 transition-transform">
                        <Instagram className="w-8 h-8" />
                      </div>
                      <div className="text-center">
                        <p className="text-[10px] font-black text-slate-400 group-hover/social:text-white/70 uppercase tracking-widest mb-1">Instagram</p>
                        <p className="font-bold text-slate-700 group-hover/social:text-white">@Snacky.q8</p>
                      </div>
                    </div>
                  </a>

                  <a href={CONTACT_INFO.socials.tiktok} target="_blank" rel="noreferrer" className="group/social">
                    <div className="p-8 bg-slate-50/50 rounded-[2.5rem] flex flex-col items-center gap-5 transition-all duration-500 hover:bg-[#000000] hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 border border-transparent hover:border-white/20">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-sm group-hover/social:scale-110 transition-transform">
                        <Music className="w-8 h-8" />
                      </div>
                      <div className="text-center">
                        <p className="text-[10px] font-black text-slate-400 group-hover/social:text-white/70 uppercase tracking-widest mb-1">TikTok</p>
                        <p className="font-bold text-slate-700 group-hover/social:text-white">@Snacky.q8</p>
                      </div>
                    </div>
                  </a>

                  <a href={CONTACT_INFO.socials.snapchat} target="_blank" rel="noreferrer" className="group/social">
                    <div className="p-8 bg-slate-50/50 rounded-[2.5rem] flex flex-col items-center gap-5 transition-all duration-500 hover:bg-[#FFFC00] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FFFC00]/30 border border-transparent hover:border-white/20">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-sm group-hover/social:scale-110 transition-transform">
                        <Ghost className="w-8 h-8" />
                      </div>
                      <div className="text-center">
                        <p className="text-[10px] font-black text-slate-400 group-hover/social:text-slate-600 uppercase tracking-widest mb-1">Snapchat</p>
                        <p className="font-bold text-slate-700 group-hover/social:text-slate-900">@Snacky.q8</p>
                      </div>
                    </div>
                  </a>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="mt-10 p-8 bg-primary-light/30 rounded-[2.5rem] border border-primary/10 flex items-center gap-6"
                >
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20">
                    <PartyPopper className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-black text-primary-dark text-lg mb-1">خللك قريب!</p>
                    <p className="font-bold text-slate-600 text-sm leading-relaxed">
                      تابعنا وشاركنا لحظاتك السعيدة مع سناكي. ننتظركم دائماً بعروض وفعاليات مفاجئة!
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            </div>

            <div className="bg-primary p-12 md:p-16 rounded-[4rem] shadow-3xl shadow-cyan-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-125 transition-transform duration-1000" />
              <h3 className="text-3xl md:text-4xl font-black mb-12 text-white relative z-10">احجز لفعاليتك الآن</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] text-white/60 uppercase font-black tracking-widest">تواصل هاتفي</span>
                  {CONTACT_INFO.phones.map((p) => (
                    <a key={p} href={`tel:${p}`} className="text-3xl font-black text-white hover:text-secondary transition-colors tracking-tight">{p}</a>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] text-white/60 uppercase font-black tracking-widest">البريد الإلكتروني</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-bold text-white/90 break-all">{CONTACT_INFO.email}</a>
                </div>
              </div>
              <a 
                href={`https://wa.me/965${CONTACT_INFO.phones[0]}`}
                target="_blank"
                rel="noreferrer"
                className="block w-full mt-16 py-6 bg-white text-primary rounded-[2rem] font-black text-xl text-center shadow-2xl shadow-cyan-900/20 hover:scale-[1.02] transition-transform relative z-10"
              >
                ارسل لنا واتساب
              </a>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-400 text-sm font-bold opacity-80">
              &copy; {new Date().getFullYear()} سناكي كويت. نخدم جميع مناطق الكويت بحب وشغف.
            </p>
            <div className="text-primary font-black text-4xl uppercase tracking-tighter opacity-10 select-none">
              Snacky Brand Identity
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
        .text-primary { color: var(--color-primary); }
        .bg-primary { background-color: var(--color-primary); }
        .text-secondary { color: var(--color-secondary); }
        .bg-secondary { background-color: var(--color-secondary); }
        .bg-primary-light { background-color: var(--color-primary-light); }
        .text-primary-dark { color: var(--color-primary-dark); }
        .shadow-cyan-100 { --tw-shadow-color: #cffafe; --tw-shadow: var(--tw-shadow-colored); }
        .shadow-cyan-200 { --tw-shadow-color: #a5f3fc; --tw-shadow: var(--tw-shadow-colored); }
        .border-cyan-100 { border-color: #cffafe; }
        .border-cyan-50 { border-color: #ecfeff; }
      `}</style>
      </div>
    </>
  );
}
