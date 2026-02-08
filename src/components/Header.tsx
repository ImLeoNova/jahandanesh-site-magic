import { useState, useEffect } from "react";
import { Menu, X, GraduationCap, Phone, Mail, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "صفحه اصلی", href: "#home" },
  { name: "درباره ما", href: "#about" },
  { name: "رویدادها", href: "#events" },
  { name: "معلمین", href: "#teachers" },
  { name: "گالری", href: "#gallery" },
  { name: "تماس با ما", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy text-white py-2 text-sm hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:02112345678" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} />
              <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
            </a>
            <a href="mailto:info@jahandanesh.ir" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={14} />
              <span>info@jahandanesh.ir</span>
            </a>
          </div>
          <Link to="/portal" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full transition-colors">
            <LogIn size={14} />
            <span>ورود به پورتال</span>
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 animate-fade-slide ${
          isScrolled
            ? "bg-card shadow-elevated py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow">
              <GraduationCap className="text-white" size={28} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">جهان دانش</span>
              <span className="text-xs text-muted-foreground">آینده‌سازان فردا</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-foreground/80 font-medium rounded-lg hover:text-primary hover:bg-primary/5 transition-all group animate-fade-slide"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute bottom-0 right-4 left-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/portal"
              className="flex items-center gap-2 px-4 py-2 text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors"
            >
              <LogIn size={18} />
              <span>پورتال</span>
            </Link>
            <a
              href="#contact"
              className="btn-primary animate-scale-in"
              style={{ animationDelay: "500ms" }}
            >
              ثبت‌نام
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed top-[120px] right-0 left-0 z-40 bg-card shadow-elevated animate-fade-slide"
        >
          <nav className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-foreground font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
              >
                {item.name}
              </a>
            ))}
            <Link
              to="/portal"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-primary font-medium rounded-lg hover:bg-primary/10 transition-all flex items-center gap-2"
            >
              <LogIn size={18} />
              ورود به پورتال
            </Link>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary text-center mt-2"
            >
              ثبت‌نام
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
