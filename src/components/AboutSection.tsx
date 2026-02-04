import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Heart, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "هدفمندی",
    description: "تمرکز بر اهداف آموزشی و تربیتی مشخص",
  },
  {
    icon: Lightbulb,
    title: "نوآوری",
    description: "استفاده از روش‌های نوین آموزشی",
  },
  {
    icon: Heart,
    title: "مهربانی",
    description: "ایجاد فضای صمیمی و دوستانه",
  },
  {
    icon: Shield,
    title: "امنیت",
    description: "محیطی امن برای رشد دانش‌آموزان",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-muted/50 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              درباره ما
            </span>
            <h2 className="section-title">
              <span className="text-primary">۲۵ سال</span> تجربه در آموزش و پرورش
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              مدرسه جهان دانش با هدف ارائه آموزش با کیفیت و پرورش استعدادهای 
              دانش‌آموزان در سال ۱۳۷۸ تأسیس شد. ما با بهره‌گیری از کادر آموزشی 
              مجرب و امکانات مدرن، محیطی پویا و خلاق برای یادگیری فراهم کرده‌ایم.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              فلسفه آموزشی ما بر پایه احترام به شخصیت دانش‌آموز، تشویق به 
              تفکر انتقادی و پرورش خلاقیت استوار است. ما معتقدیم هر دانش‌آموز 
              استعدادهای منحصر به فردی دارد که باید شکوفا شود.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <value.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary to-sky overflow-hidden shadow-elevated">
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
                    ۲۵
                  </div>
                </div>
                <div className="aspect-square rounded-2xl bg-secondary flex items-center justify-center shadow-card">
                  <div className="text-center text-secondary-foreground">
                    <div className="text-4xl font-bold">۹۸٪</div>
                    <div className="text-sm">رضایت والدین</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center shadow-card">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">۵۰+</div>
                    <div className="text-sm text-muted-foreground">معلم مجرب</div>
                  </div>
                </div>
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-navy to-primary overflow-hidden shadow-elevated">
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-5xl font-bold">۱۵۰۰</div>
                      <div className="text-sm opacity-80">دانش‌آموز موفق</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-60 h-60 bg-secondary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
