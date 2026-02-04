import { GraduationCap, Phone, Mail, MapPin, Instagram, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold">جهان دانش</h3>
                <p className="text-sm text-white/60">آینده‌سازان فردا</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              مدرسه جهان دانش با بیش از ۲۵ سال تجربه در آموزش و پرورش، 
              متعهد به ارائه بهترین کیفیت آموزشی است.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">دسترسی سریع</h4>
            <ul className="space-y-3">
              {[
                { name: "صفحه اصلی", href: "#home" },
                { name: "درباره ما", href: "#about" },
                { name: "رویدادها", href: "#events" },
                { name: "معلمین", href: "#teachers" },
                { name: "گالری", href: "#gallery" },
                { name: "تماس با ما", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/70 hover:text-accent transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">اطلاعات تماس</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Phone size={16} className="text-accent" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Mail size={16} className="text-accent" />
                <span>info@jahandanesh.ir</span>
              </li>
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                <span>تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
              </li>
            </ul>
            
            {/* Portal Link */}
            <div className="mt-6">
              <Link
                to="/portal"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors text-sm"
              >
                <span>ورود به پورتال</span>
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">خبرنامه</h4>
            <p className="text-white/70 text-sm mb-4">
              برای دریافت آخرین اخبار و رویدادها عضو خبرنامه شوید.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="ایمیل شما"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-accent outline-none transition-colors text-sm"
              />
              <button className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center hover:bg-accent/90 transition-colors">
                <Send size={18} className="text-white" />
              </button>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Send size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © ۱۴۰۴ مدرسه جهان دانش. تمامی حقوق محفوظ است.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">حریم خصوصی</a>
            <a href="#" className="hover:text-white transition-colors">قوانین و مقررات</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
