import { useState, useEffect } from "react";
import { ArrowLeft, Play, Users, Award, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
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
  const [slideKey, setSlideKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setSlideKey((k) => k + 1);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setSlideKey((k) => k + 1);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setSlideKey((k) => k + 1);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        key={slideKey}
        className="absolute inset-0 z-0 animate-hero-fade"
      >
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-navy/95 via-navy/85 to-navy/70" />
      </div>

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
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm">ثبت‌نام سال تحصیلی جدید آغاز شد</span>
            </div>

            <div key={slideKey} className="animate-fade-up">
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
            </div>

            <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <a href="#contact" className="btn-secondary flex items-center gap-2 group">
                ثبت‌نام آنلاین
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
              </a>
              <Link to="/virtual-tour" className="flex items-center gap-3 px-6 py-3 rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all group">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Play size={16} fill="currentColor" />
                </div>
                <span>تور مجازی</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 animate-fade-up" style={{ animationDelay: "400ms" }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-2">
                    <stat.icon size={24} className="text-accent" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Card */}
          <div className="hidden lg:block animate-slide-left" style={{ animationDelay: "500ms" }}>
            <div className="bg-navy rounded-3xl p-8 shadow-elevated">
              <h3 className="text-white text-xl font-bold mb-4">چرا جهان دانش؟</h3>
              <ul className="space-y-4">
                {[
                  "کادر آموزشی مجرب و متعهد",
                  "امکانات آموزشی مدرن",
                  "فضای فیزیکی استاندارد",
                  "فعالیت‌های فوق برنامه متنوع",
                  "مشاوره تحصیلی تخصصی",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-white/90 animate-slide-left"
                    style={{ animationDelay: `${700 + index * 100}ms` }}
                  >
                    <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setSlideKey((k) => k + 1);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 animate-fade-in" style={{ animationDelay: "1000ms" }}>
        <span className="text-sm mb-2">اسکرول کنید</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
