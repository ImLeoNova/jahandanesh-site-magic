import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, GraduationCap } from "lucide-react";

const teachers = [
  {
    id: 1,
    name: "دکتر محمد احمدی",
    subject: "ریاضیات",
    experience: "۱۵ سال",
    education: "دکترای ریاضیات کاربردی",
    avatar: "م",
  },
  {
    id: 2,
    name: "مهندس زهرا رضایی",
    subject: "علوم کامپیوتر",
    experience: "۱۰ سال",
    education: "فوق لیسانس مهندسی نرم‌افزار",
    avatar: "ز",
  },
  {
    id: 3,
    name: "دکتر علی محمودی",
    subject: "فیزیک",
    experience: "۱۲ سال",
    education: "دکترای فیزیک",
    avatar: "ع",
  },
  {
    id: 4,
    name: "خانم مریم کریمی",
    subject: "ادبیات فارسی",
    experience: "۲۰ سال",
    education: "فوق لیسانس زبان و ادبیات فارسی",
    avatar: "م",
  },
  {
    id: 5,
    name: "آقای حسین نوری",
    subject: "زبان انگلیسی",
    experience: "۸ سال",
    education: "فوق لیسانس آموزش زبان انگلیسی",
    avatar: "ح",
  },
  {
    id: 6,
    name: "دکتر فاطمه صادقی",
    subject: "شیمی",
    experience: "۱۴ سال",
    education: "دکترای شیمی آلی",
    avatar: "ف",
  },
];

const TeachersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="teachers" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            کادر آموزشی
          </span>
          <h2 className="section-title">معلمین مجرب ما</h2>
          <p className="section-subtitle">
            تیمی از بهترین معلمان با تجربه و تحصیلات عالی
          </p>
        </motion.div>

        {/* Teachers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold shrink-0">
                  {teacher.avatar}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {teacher.subject}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award size={14} className="text-accent" />
                      <span>{teacher.experience} تجربه</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <GraduationCap size={14} className="text-accent" />
                      <span>{teacher.education}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="btn-outline">
            مشاهده همه معلمین
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeachersSection;
