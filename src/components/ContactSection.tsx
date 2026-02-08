import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useInView } from "@/hooks/use-in-view";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const contactInfo = [
  { icon: Phone, title: "تلفن", value: "۰۳۴-۴۲۲۳۴۵۶۷", href: "tel:03442234567" },
  { icon: Mail, title: "ایمیل", value: "info@jahandanesh.ir", href: "mailto:info@jahandanesh.ir" },
  { icon: MapPin, title: "آدرس", value: "سیرجان، استان کرمان", href: "#" },
  { icon: Clock, title: "ساعات کاری", value: "شنبه تا چهارشنبه ۷:۳۰ - ۱۴:۳۰", href: "#" },
];

const SIRJAN_LAT = 29.4519;
const SIRJAN_LNG = 55.6803;

const ContactSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="py-24 bg-muted/50 overflow-hidden">
      <div className="container" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">تماس با ما</span>
          <h2 className="section-title">در ارتباط باشید</h2>
          <p className="section-subtitle">برای ثبت‌نام، مشاوره یا هرگونه سؤال با ما تماس بگیرید</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`bg-card rounded-2xl p-6 md:p-8 shadow-card transition-all duration-600 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <h3 className="text-xl font-bold mb-6">فرم تماس</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">نام و نام خانوادگی</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="نام خود را وارد کنید" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">شماره تماس</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="۰۹۱۲۳۴۵۶۷۸۹" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">ایمیل</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">موضوع</label>
                <select className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                  <option>ثبت‌نام</option>
                  <option>مشاوره تحصیلی</option>
                  <option>انتقادات و پیشنهادات</option>
                  <option>سایر</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">پیام</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="پیام خود را بنویسید..." />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send size={18} />
                ارسال پیام
              </button>
            </form>
          </div>

          <div className={`space-y-5 transition-all duration-600 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.href}
                  className={`flex items-start gap-3 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-all group duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <info.icon size={20} className="text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-0.5">{info.title}</h4>
                    <p className="text-muted-foreground text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className={`aspect-video rounded-2xl overflow-hidden shadow-card transition-all duration-500 delay-[800ms] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <MapContainer center={[SIRJAN_LAT, SIRJAN_LNG]} zoom={15} scrollWheelZoom={false} className="w-full h-full z-0">
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[SIRJAN_LAT, SIRJAN_LNG]}>
                  <Popup><strong>مدرسه جهان دانش</strong><br />سیرجان، استان کرمان</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
