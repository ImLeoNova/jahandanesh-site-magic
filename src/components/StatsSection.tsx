import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, GraduationCap, Award, BookOpen, Trophy, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "۱۵۰۰+",
    label: "دانش‌آموز فعال",
    description: "در تمام مقاطع تحصیلی",
  },
  {
    icon: GraduationCap,
    value: "۵۰+",
    label: "معلم مجرب",
    description: "با تحصیلات عالی",
  },
  {
    icon: Award,
    value: "۲۵+",
    label: "سال تجربه",
    description: "در آموزش و پرورش",
  },
  {
    icon: Trophy,
    value: "۲۰۰+",
    label: "افتخارات",
    description: "در مسابقات علمی",
  },
  {
    icon: BookOpen,
    value: "۹۵٪",
    label: "قبولی کنکور",
    description: "در رشته‌های برتر",
  },
  {
    icon: Star,
    value: "۹۸٪",
    label: "رضایت والدین",
    description: "از کیفیت آموزش",
  },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-br from-navy via-primary to-accent overflow-hidden">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            آمار و دستاوردها
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            افتخار می‌کنیم که طی ۲۵ سال فعالیت، توانسته‌ایم به این دستاوردها برسیم
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-white font-medium mb-1">{stat.label}</div>
              <div className="text-white/60 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
