import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    id: "1",
    title: "جشنواره علمی دانش‌آموزان",
    date: "۱۵ اسفند ۱۴۰۴",
    time: "۹:۰۰ - ۱۴:۰۰",
    location: "سالن همایش مدرسه",
    category: "علمی",
    description: "نمایشگاه پروژه‌های علمی دانش‌آموزان با حضور داوران برجسته",
    featured: true,
  },
  {
    id: "2",
    title: "مسابقات ورزشی بین‌کلاسی",
    date: "۲۲ اسفند ۱۴۰۴",
    time: "۸:۰۰ - ۱۲:۰۰",
    location: "زمین ورزشی",
    category: "ورزشی",
    description: "رقابت‌های فوتسال، والیبال و بسکتبال بین کلاس‌ها",
    featured: false,
  },
  {
    id: "3",
    title: "جلسه اولیا و مربیان",
    date: "۲۸ اسفند ۱۴۰۴",
    time: "۱۶:۰۰ - ۱۸:۰۰",
    location: "کلاس‌های درس",
    category: "آموزشی",
    description: "ارائه گزارش پیشرفت تحصیلی و مشاوره با معلمان",
    featured: false,
  },
  {
    id: "4",
    title: "اردوی علمی-تفریحی",
    date: "۵ فروردین ۱۴۰۵",
    time: "۷:۰۰ - ۱۸:۰۰",
    location: "موزه علوم و فناوری",
    category: "تفریحی",
    description: "بازدید از موزه علوم همراه با کارگاه‌های آموزشی",
    featured: true,
  },
];

const categoryColors: Record<string, string> = {
  علمی: "bg-primary/10 text-primary",
  ورزشی: "bg-green-100 text-green-700",
  آموزشی: "bg-accent/10 text-accent",
  تفریحی: "bg-purple-100 text-purple-700",
};

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="py-24 overflow-hidden">
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            رویدادها
          </span>
          <h2 className="section-title">رویدادهای پیش‌رو</h2>
          <p className="section-subtitle">
            از برنامه‌های آموزشی، فرهنگی و ورزشی مدرسه مطلع شوید
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 ${
                event.featured ? "md:col-span-1" : ""
              }`}
            >
              {event.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                    ویژه
                  </span>
                </div>
              )}

              <div className="p-6">
                {/* Category */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${categoryColors[event.category]}`}>
                  {event.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Meta */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} className="text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={16} className="text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={16} className="text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* CTA */}
                <Link 
                  to={`/event/${event.id}`}
                  className="flex items-center gap-2 text-primary font-medium group/btn"
                >
                  <span>اطلاعات بیشتر</span>
                  <ArrowLeft size={16} className="group-hover/btn:-translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="btn-outline">
            مشاهده همه رویدادها
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
