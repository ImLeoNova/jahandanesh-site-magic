import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, MapPin, ArrowRight, Users, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const eventsData = [
  { id: "1", title: "جشنواره علمی دانش‌آموزان", date: "۱۵ اسفند ۱۴۰۴", time: "۹:۰۰ - ۱۴:۰۰", location: "سالن همایش مدرسه", category: "علمی", image: gallery1, description: "نمایشگاه پروژه‌های علمی دانش‌آموزان با حضور داوران برجسته", fullDescription: `جشنواره علمی دانش‌آموزان یکی از مهم‌ترین رویدادهای سالانه مدرسه جهان دانش است که در آن دانش‌آموزان عزیز پروژه‌های علمی خود را به نمایش می‌گذارند.\n\nدر این جشنواره، دانش‌آموزان از پایه‌های مختلف تحصیلی، پروژه‌های خود را در زمینه‌های مختلف علمی از جمله فیزیک، شیمی، زیست‌شناسی و فناوری اطلاعات ارائه می‌دهند.\n\nداوران برجسته‌ای از دانشگاه‌های معتبر کشور در این جشنواره حضور خواهند داشت و پروژه‌های برتر معرفی و جایزه دریافت خواهند کرد.\n\nبرنامه جشنواره شامل نمایشگاه پروژه‌ها، ارائه شفاهی برترین پروژه‌ها، و مراسم اختتامیه و اهدای جوایز است.`, participants: "۲۵۰+" },
  { id: "2", title: "مسابقات ورزشی بین‌کلاسی", date: "۲۲ اسفند ۱۴۰۴", time: "۸:۰۰ - ۱۲:۰۰", location: "زمین ورزشی", category: "ورزشی", image: gallery2, description: "رقابت‌های فوتسال، والیبال و بسکتبال بین کلاس‌ها", fullDescription: `مسابقات ورزشی بین‌کلاسی فرصتی عالی برای دانش‌آموزان است تا روحیه ورزشکاری و کار تیمی خود را تقویت کنند.\n\nدر این رویداد، تیم‌های مختلف از کلاس‌های مختلف در رشته‌های فوتسال، والیبال و بسکتبال با یکدیگر رقابت می‌کنند.\n\nاین مسابقات با هدف ترویج ورزش و فعالیت بدنی در میان دانش‌آموزان و ایجاد حس همکاری و رقابت سالم برگزار می‌شود.`, participants: "۱۸۰+" },
  { id: "3", title: "جلسه اولیا و مربیان", date: "۲۸ اسفند ۱۴۰۴", time: "۱۶:۰۰ - ۱۸:۰۰", location: "کلاس‌های درس", category: "آموزشی", image: gallery3, description: "ارائه گزارش پیشرفت تحصیلی و مشاوره با معلمان", fullDescription: `جلسه اولیا و مربیان فرصتی مناسب برای والدین گرامی است تا با معلمان فرزندان خود ملاقات کنند و از وضعیت تحصیلی آنها مطلع شوند.\n\nدر این جلسه، کارنامه تحصیلی دانش‌آموزان ارائه شده و والدین می‌توانند با معلمان درباره نقاط قوت و ضعف فرزندان خود گفتگو کنند.\n\nمشاوران تحصیلی نیز در این جلسه حضور دارند تا راهنمایی‌های لازم را ارائه دهند.`, participants: "۴۰۰+" },
  { id: "4", title: "اردوی علمی-تفریحی", date: "۵ فروردین ۱۴۰۵", time: "۷:۰۰ - ۱۸:۰۰", location: "موزه علوم و فناوری", category: "تفریحی", image: gallery4, description: "بازدید از موزه علوم همراه با کارگاه‌های آموزشی", fullDescription: `اردوی علمی-تفریحی به موزه علوم و فناوری یکی از برنامه‌های محبوب دانش‌آموزان است.\n\nدر این اردو، دانش‌آموزان ضمن بازدید از بخش‌های مختلف موزه، در کارگاه‌های علمی متنوعی شرکت می‌کنند و با مفاهیم علمی به صورت عملی آشنا می‌شوند.\n\nاین اردو فرصتی عالی برای یادگیری تجربی و ایجاد خاطرات خوش برای دانش‌آموزان است.`, participants: "۱۲۰+" },
];

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const event = eventsData.find((e) => e.id === id) || eventsData[0];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container pb-12 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-accent text-white rounded-full text-sm font-medium mb-4">{event.category}</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{event.title}</h1>
          <p className="text-white/80 text-lg max-w-2xl">{event.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-2xl font-bold text-foreground mb-6">درباره این رویداد</h2>
              <div className="prose prose-lg max-w-none">
                {event.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">{paragraph}</p>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-card rounded-2xl shadow-card p-6 sticky top-24 animate-slide-left" style={{ animationDelay: "300ms" }}>
                <h3 className="text-lg font-bold text-foreground mb-6">اطلاعات رویداد</h3>
                <div className="space-y-4">
                  {[
                    { icon: Calendar, label: "تاریخ", value: event.date },
                    { icon: Clock, label: "ساعت", value: event.time },
                    { icon: MapPin, label: "مکان", value: event.location },
                    { icon: Users, label: "شرکت‌کنندگان", value: event.participants },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium text-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <button className="w-full btn-primary">ثبت‌نام در رویداد</button>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-border hover:border-primary hover:text-primary transition-colors">
                    <Share2 size={18} /><span>اشتراک‌گذاری</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 animate-fade-in" style={{ animationDelay: "500ms" }}>
            <Link to="/#events" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
              <ArrowRight size={18} /><span>بازگشت به رویدادها</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetail;
