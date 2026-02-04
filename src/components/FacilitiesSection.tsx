import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Monitor, 
  FlaskConical, 
  Library, 
  Dumbbell, 
  Utensils, 
  Bus,
  Wifi,
  Shield
} from "lucide-react";

const facilities = [
  {
    icon: Monitor,
    title: "کلاس‌های هوشمند",
    description: "مجهز به تخته هوشمند و ویدئو پروژکتور",
  },
  {
    icon: FlaskConical,
    title: "آزمایشگاه علوم",
    description: "آزمایشگاه فیزیک، شیمی و زیست‌شناسی",
  },
  {
    icon: Library,
    title: "کتابخانه مجهز",
    description: "بیش از ۱۰,۰۰۰ جلد کتاب و منابع دیجیتال",
  },
  {
    icon: Dumbbell,
    title: "سالن ورزشی",
    description: "سالن چند منظوره با امکانات کامل",
  },
  {
    icon: Utensils,
    title: "سلف سرویس بهداشتی",
    description: "غذای سالم و متنوع با نظارت تغذیه",
  },
  {
    icon: Bus,
    title: "سرویس ایاب و ذهاب",
    description: "پوشش تمام مناطق شهر",
  },
  {
    icon: Wifi,
    title: "اینترنت پرسرعت",
    description: "دسترسی به منابع آموزشی آنلاین",
  },
  {
    icon: Shield,
    title: "امنیت کامل",
    description: "دوربین‌های مداربسته و نگهبانی ۲۴ ساعته",
  },
];

const FacilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 overflow-hidden">
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            امکانات
          </span>
          <h2 className="section-title">امکانات و تجهیزات</h2>
          <p className="section-subtitle">
            محیطی مدرن و امن برای یادگیری بهتر
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:from-primary group-hover:to-accent transition-all">
                <facility.icon className="text-primary group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {facility.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
