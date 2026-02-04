import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "خانم رضایی",
    role: "والد دانش‌آموز پایه دهم",
    content: "از زمانی که فرزندم به مدرسه جهان دانش آمده، شاهد پیشرفت چشمگیری در تحصیل و اخلاق او بوده‌ام. کادر آموزشی بسیار دلسوز و حرفه‌ای هستند.",
    rating: 5,
  },
  {
    id: 2,
    name: "آقای محمدی",
    role: "والد دانش‌آموز پایه هشتم",
    content: "فضای آموزشی مدرسه واقعاً عالی است. فرزندم هر روز با اشتیاق به مدرسه می‌رود و این برای ما بسیار ارزشمند است.",
    rating: 5,
  },
  {
    id: 3,
    name: "خانم احمدی",
    role: "والد دانش‌آموز پایه یازدهم",
    content: "مشاوره تحصیلی مدرسه کمک زیادی به فرزندم برای انتخاب رشته مناسب کرد. از همکاری و توجه معلمان بسیار راضی هستیم.",
    rating: 5,
  },
  {
    id: 4,
    name: "آقای کریمی",
    role: "والد دانش‌آموز پایه نهم",
    content: "برنامه‌های فوق برنامه متنوع و کیفیت آموزش در این مدرسه واقعاً متفاوت است. خوشحالم که فرزندم را اینجا ثبت‌نام کردم.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            نظرات والدین
          </span>
          <h2 className="section-title">والدین درباره ما چه می‌گویند</h2>
          <p className="section-subtitle">
            افتخار ماست که رضایت والدین گرامی را جلب کرده‌ایم
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="bg-card rounded-3xl shadow-elevated p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Quote className="text-primary" size={32} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="pt-8"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="text-accent fill-accent" size={20} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                  "{testimonials[current].content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === current ? "bg-primary w-8" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
