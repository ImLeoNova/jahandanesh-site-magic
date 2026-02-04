import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Play, Users, Award, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage1 from "@/assets/hero-school.jpg";
import heroImage2 from "@/assets/gallery-1.jpg";
import heroImage3 from "@/assets/gallery-2.jpg";
import heroImage4 from "@/assets/gallery-3.jpg";

const slides = [
  {
    image: heroImage1,
    title: "مدرسه جهان دانش",
    subtitle: "آینده‌سازان فردا",
    description: "با بیش از ۲۵ سال تجربه در آموزش و پرورش، ما متعهد به تربیت نسلی خلاق، متفکر و آماده برای چالش‌های آینده هستیم.",
  },
  {
    image: heroImage2,
    title: "آموزش با کیفیت",
    subtitle: "تعهد به برتری",
    description: "کادر آموزشی مجرب ما با استفاده از روش‌های نوین تدریس، بهترین فرصت‌های یادگیری را برای دانش‌آموزان فراهم می‌کند.",
  },
  {
    image: heroImage3,
    title: "فعالیت‌های متنوع",
    subtitle: "رشد همه‌جانبه",
    description: "برنامه‌های فوق برنامه ورزشی، هنری و علمی برای شکوفایی استعدادها و پرورش مهارت‌های زندگی.",
  },
  {
    image: heroImage4,
    title: "محیط یادگیری مدرن",
    subtitle: "امکانات پیشرفته",
    description: "کلاس‌های مجهز، آزمایشگاه‌های علمی و فضاهای ورزشی استاندارد برای تجربه بهتر آموزش.",
  },
];

const stats = [
  { icon: Users, value: "۱۵۰۰+", label: "دانش‌آموز" },
  { icon: Award, value: "۲۵+", label: "سال تجربه" },
  { icon: BookOpen, value: "۵۰+", label: "معلم مجرب" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-navy/95 via-navy/85 to-navy/70" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <ChevronRight size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>

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
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm">ثبت‌نام سال تحصیلی جدید آغاز شد</span>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  {slides[currentSlide].title}
                  <br />
                  <span className="text-3xl md:text-4xl lg:text-5xl font-medium text-white/90">
                    {slides[currentSlide].subtitle}
                  </span>
                </h1>

                <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

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
                    <stat.icon size={24} className="text-accent" />
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
                    <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60"
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
