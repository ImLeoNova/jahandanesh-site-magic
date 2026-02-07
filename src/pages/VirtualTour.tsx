import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, BookOpen, FlaskConical, Dumbbell, Monitor, Library } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const tourSpots = [
  {
    id: 1,
    title: "کلاس‌های هوشمند",
    description: "مجهز به تخته‌های هوشمند، پروژکتور و سیستم صوتی مدرن برای تجربه آموزشی بهتر.",
    image: gallery1,
    icon: Monitor,
  },
  {
    id: 2,
    title: "آزمایشگاه علوم",
    description: "آزمایشگاه مجهز با تجهیزات پیشرفته برای آزمایش‌های فیزیک، شیمی و زیست‌شناسی.",
    image: gallery2,
    icon: FlaskConical,
  },
  {
    id: 3,
    title: "کتابخانه",
    description: "کتابخانه‌ای با بیش از ۵۰۰۰ جلد کتاب و فضای مطالعه آرام و دلنشین.",
    image: gallery3,
    icon: Library,
  },
  {
    id: 4,
    title: "سالن ورزشی",
    description: "سالن ورزشی استاندارد با امکانات متنوع برای رشته‌های مختلف ورزشی.",
    image: gallery4,
    icon: Dumbbell,
  },
  {
    id: 5,
    title: "سالن همایش",
    description: "سالن همایش مجهز با ظرفیت ۳۰۰ نفر برای برگزاری مراسم و جشن‌ها.",
    image: gallery5,
    icon: GraduationCap,
  },
  {
    id: 6,
    title: "فضای سبز و حیاط",
    description: "حیاط بزرگ با فضای سبز مناسب برای تفریح و فعالیت‌های ورزشی دانش‌آموزان.",
    image: gallery6,
    icon: BookOpen,
  },
];

const VirtualTour = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              تور مجازی
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              فضاهای مدرسه جهان دانش
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              با فضاها و امکانات مدرسه آشنا شوید و ببینید چه محیطی برای آموزش و رشد فرزندانتان فراهم شده است
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tour Spots */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-16">
            {tourSpots.map((spot, index) => (
              <motion.div
                key={spot.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:direction-ltr" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="rounded-2xl overflow-hidden shadow-card">
                    <img
                      src={spot.image}
                      alt={spot.title}
                      className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <spot.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {spot.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {spot.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              مایل به بازدید حضوری هستید؟
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              برای هماهنگی بازدید حضوری از مدرسه با ما تماس بگیرید
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/#contact" className="btn-primary">
                تماس با ما
              </a>
              <Link to="/" className="btn-outline inline-flex items-center gap-2">
                <ArrowRight size={18} />
                بازگشت به صفحه اصلی
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VirtualTour;
