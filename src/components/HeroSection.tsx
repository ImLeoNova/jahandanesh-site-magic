import { motion } from "framer-motion";
import { ArrowLeft, Play, Users, Award, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";

const stats = [
  { icon: Users, value: "۱۵۰۰+", label: "دانش‌آموز" },
  { icon: Award, value: "۲۵+", label: "سال تجربه" },
  { icon: BookOpen, value: "۵۰+", label: "معلم مجرب" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="مدرسه جهان دانش"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-navy/95 via-navy/80 to-navy/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm">ثبت‌نام سال تحصیلی جدید آغاز شد</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              مدرسه
              <span className="text-secondary"> جهان دانش</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-medium text-white/90">
                آینده‌سازان فردا
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed"
            >
              با بیش از ۲۵ سال تجربه در آموزش و پرورش، ما متعهد به تربیت نسلی 
              خلاق، متفکر و آماده برای چالش‌های آینده هستیم.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href="#contact" className="btn-secondary flex items-center gap-2 group">
                ثبت‌نام آنلاین
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
              </a>
              <button className="flex items-center gap-3 px-6 py-3 rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all group">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Play size={16} fill="currentColor" />
                </div>
                <span>تور مجازی</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-2">
                    <stat.icon size={24} className="text-secondary" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="glass-dark rounded-3xl p-8 shadow-elevated">
              <h3 className="text-white text-xl font-bold mb-4">چرا جهان دانش؟</h3>
              <ul className="space-y-4">
                {[
                  "کادر آموزشی مجرب و متعهد",
                  "امکانات آموزشی مدرن",
                  "فضای فیزیکی استاندارد",
                  "فعالیت‌های فوق برنامه متنوع",
                  "مشاوره تحصیلی تخصصی",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60"
      >
        <span className="text-sm mb-2">اسکرول کنید</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
