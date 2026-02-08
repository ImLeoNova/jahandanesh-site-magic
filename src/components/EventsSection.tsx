import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/use-in-view";

const events = [
  { id: "1", title: "جشنواره علمی دانش‌آموزان", date: "۱۵ اسفند ۱۴۰۴", time: "۹:۰۰ - ۱۴:۰۰", location: "سالن همایش مدرسه", category: "علمی", description: "نمایشگاه پروژه‌های علمی دانش‌آموزان با حضور داوران برجسته", featured: true },
  { id: "2", title: "مسابقات ورزشی بین‌کلاسی", date: "۲۲ اسفند ۱۴۰۴", time: "۸:۰۰ - ۱۲:۰۰", location: "زمین ورزشی", category: "ورزشی", description: "رقابت‌های فوتسال، والیبال و بسکتبال بین کلاس‌ها", featured: false },
  { id: "3", title: "جلسه اولیا و مربیان", date: "۲۸ اسفند ۱۴۰۴", time: "۱۶:۰۰ - ۱۸:۰۰", location: "کلاس‌های درس", category: "آموزشی", description: "ارائه گزارش پیشرفت تحصیلی و مشاوره با معلمان", featured: false },
  { id: "4", title: "اردوی علمی-تفریحی", date: "۵ فروردین ۱۴۰۵", time: "۷:۰۰ - ۱۸:۰۰", location: "موزه علوم و فناوری", category: "تفریحی", description: "بازدید از موزه علوم همراه با کارگاه‌های آموزشی", featured: true },
];

const categoryColors: Record<string, string> = {
  علمی: "bg-primary/10 text-primary",
  ورزشی: "bg-green-100 text-green-700",
  آموزشی: "bg-accent/10 text-accent",
  تفریحی: "bg-purple-100 text-purple-700",
};

const EventsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="events" className="py-24 overflow-hidden">
      <div className="container" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">رویدادها</span>
          <h2 className="section-title">رویدادهای پیش‌رو</h2>
          <p className="section-subtitle">از برنامه‌های آموزشی، فرهنگی و ورزشی مدرسه مطلع شوید</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {event.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">ویژه</span>
                </div>
              )}
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${categoryColors[event.category]}`}>{event.category}</span>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{event.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground"><Calendar size={16} className="text-primary" /><span>{event.date}</span></div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground"><Clock size={16} className="text-primary" /><span>{event.time}</span></div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin size={16} className="text-primary" /><span>{event.location}</span></div>
                </div>
                <Link to={`/event/${event.id}`} className="flex items-center gap-2 text-primary font-medium group/btn">
                  <span>اطلاعات بیشتر</span>
                  <ArrowLeft size={16} className="group-hover/btn:-translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-600 delay-500 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <button className="btn-outline">مشاهده همه رویدادها</button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
