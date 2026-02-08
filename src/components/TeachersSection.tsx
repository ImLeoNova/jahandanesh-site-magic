import { Award, GraduationCap } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const teachers = [
  { id: 1, name: "دکتر محمد احمدی", subject: "ریاضیات", experience: "۱۵ سال", education: "دکترای ریاضیات کاربردی", avatar: "م" },
  { id: 2, name: "مهندس زهرا رضایی", subject: "علوم کامپیوتر", experience: "۱۰ سال", education: "فوق لیسانس مهندسی نرم‌افزار", avatar: "ز" },
  { id: 3, name: "دکتر علی محمودی", subject: "فیزیک", experience: "۱۲ سال", education: "دکترای فیزیک", avatar: "ع" },
  { id: 4, name: "خانم مریم کریمی", subject: "ادبیات فارسی", experience: "۲۰ سال", education: "فوق لیسانس زبان و ادبیات فارسی", avatar: "م" },
  { id: 5, name: "آقای حسین نوری", subject: "زبان انگلیسی", experience: "۸ سال", education: "فوق لیسانس آموزش زبان انگلیسی", avatar: "ح" },
  { id: 6, name: "دکتر فاطمه صادقی", subject: "شیمی", experience: "۱۴ سال", education: "دکترای شیمی آلی", avatar: "ف" },
];

const TeachersSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="teachers" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">کادر آموزشی</span>
          <h2 className="section-title">معلمین مجرب ما</h2>
          <p className="section-subtitle">تیمی از بهترین معلمان با تجربه و تحصیلات عالی</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher, index) => (
            <div
              key={teacher.id}
              className={`group bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold shrink-0">{teacher.avatar}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{teacher.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{teacher.subject}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground"><Award size={14} className="text-accent" /><span>{teacher.experience} تجربه</span></div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground"><GraduationCap size={14} className="text-accent" /><span>{teacher.education}</span></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-600 delay-500 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <button className="btn-outline">مشاهده همه معلمین</button>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
