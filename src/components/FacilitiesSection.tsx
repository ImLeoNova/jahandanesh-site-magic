import { Monitor, FlaskConical, Library, Dumbbell, Utensils, Bus, Wifi, Shield } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const facilities = [
  { icon: Monitor, title: "کلاس‌های هوشمند", description: "مجهز به تخته هوشمند و ویدئو پروژکتور" },
  { icon: FlaskConical, title: "آزمایشگاه علوم", description: "آزمایشگاه فیزیک، شیمی و زیست‌شناسی" },
  { icon: Library, title: "کتابخانه مجهز", description: "بیش از ۱۰,۰۰۰ جلد کتاب و منابع دیجیتال" },
  { icon: Dumbbell, title: "سالن ورزشی", description: "سالن چند منظوره با امکانات کامل" },
  { icon: Utensils, title: "سلف سرویس بهداشتی", description: "غذای سالم و متنوع با نظارت تغذیه" },
  { icon: Bus, title: "سرویس ایاب و ذهاب", description: "پوشش تمام مناطق شهر" },
  { icon: Wifi, title: "اینترنت پرسرعت", description: "دسترسی به منابع آموزشی آنلاین" },
  { icon: Shield, title: "امنیت کامل", description: "دوربین‌های مداربسته و نگهبانی ۲۴ ساعته" },
];

const FacilitiesSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 overflow-hidden">
      <div className="container" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">امکانات</span>
          <h2 className="section-title">امکانات و تجهیزات</h2>
          <p className="section-subtitle">محیطی مدرن و امن برای یادگیری بهتر</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={facility.title}
              className={`group bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 text-center ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:from-primary group-hover:to-accent transition-all">
                <facility.icon className="text-primary group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{facility.title}</h3>
              <p className="text-muted-foreground text-sm">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
