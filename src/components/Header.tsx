import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap, Phone, Mail } from "lucide-react";

const navItems = [
  { name: "صفحه اصلی", href: "#home" },
  { name: "درباره ما", href: "#about" },
  { name: "رویدادها", href: "#events" },
  { name: "بلاگ", href: "#blog" },
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
            <a href="tel:02112345678" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={14} />
              <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
            </a>
            <a href="mailto:info@jahandanesh.ir" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={14} />
              <span>info@jahandanesh.ir</span>
            </a>
          </div>
          <div className="text-white/80">
            ساعت کاری: شنبه تا چهارشنبه ۷:۳۰ - ۱۴:۳۰
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass shadow-elevated py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-sky flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow">
              <GraduationCap className="text-white" size={28} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">جهان دانش</span>
              <span className="text-xs text-muted-foreground">آینده‌سازان فردا</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative px-4 py-2 text-foreground/80 font-medium rounded-lg hover:text-primary hover:bg-primary/5 transition-all group"
              >
                {item.name}
                <span className="absolute bottom-0 right-4 left-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden lg:block btn-secondary"
          >
            ثبت‌نام
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-[120px] right-0 left-0 z-40 glass shadow-elevated"
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
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-secondary text-center mt-2"
              >
                ثبت‌نام
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
