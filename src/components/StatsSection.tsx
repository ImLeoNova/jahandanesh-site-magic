import { Users, GraduationCap, Award, BookOpen, Trophy, Star } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const stats = [
  { icon: Users, value: "۱۵۰۰+", label: "دانش‌آموز فعال", description: "در تمام مقاطع تحصیلی" },
  { icon: GraduationCap, value: "۵۰+", label: "معلم مجرب", description: "با تحصیلات عالی" },
  { icon: Award, value: "۲۵+", label: "سال تجربه", description: "در آموزش و پرورش" },
  { icon: Trophy, value: "۲۰۰+", label: "افتخارات", description: "در مسابقات علمی" },
  { icon: BookOpen, value: "۹۵٪", label: "قبولی کنکور", description: "در رشته‌های برتر" },
  { icon: Star, value: "۹۸٪", label: "رضایت والدین", description: "از کیفیت آموزش" },
];

const StatsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-gradient-to-br from-navy via-primary to-accent overflow-hidden">
      <div className="container" ref={ref}>
        <div className={`text-center mb-12 transition-all duration-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">آمار و دستاوردها</h2>
          <p className="text-white/70 max-w-2xl mx-auto">افتخار می‌کنیم که طی ۲۵ سال فعالیت، توانسته‌ایم به این دستاوردها برسیم</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center group transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white font-medium mb-1">{stat.label}</div>
              <div className="text-white/60 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
