import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, User, Users, Shield, ArrowRight, ArrowLeft } from "lucide-react";

const roles = [
  {
    id: "admin",
    title: "مدیریت",
    description: "دسترسی به پنل مدیریت مدرسه، گزارش‌ها و تنظیمات سیستم",
    icon: Shield,
    gradient: "from-primary to-primary/80",
    bg: "bg-primary/5",
    border: "border-primary/20 hover:border-primary/50",
  },
  {
    id: "teacher",
    title: "معلم",
    description: "پنل آموزشی، مدیریت کلاس، نمرات و حضور و غیاب",
    icon: User,
    gradient: "from-accent to-accent/80",
    bg: "bg-accent/5",
    border: "border-accent/20 hover:border-accent/50",
  },
  {
    id: "parent",
    title: "والدین",
    description: "پیگیری وضعیت تحصیلی، نمرات و ارتباط با معلمان",
    icon: Users,
    gradient: "from-sky to-sky/80",
    bg: "bg-sky/5",
    border: "border-sky/20 hover:border-sky/50",
  },
];

const Portal = () => {
  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Link to="/" className="inline-flex items-center gap-3 mb-8 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <GraduationCap className="text-primary-foreground" size={32} />
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-foreground">جهان دانش</h1>
              <p className="text-muted-foreground text-sm">آینده‌سازان فردا</p>
            </div>
          </Link>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            ورود به پورتال
          </h2>
          <p className="text-muted-foreground">
            نوع کاربری خود را انتخاب کنید
          </p>
        </motion.div>

        {/* Role Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/login/${role.id}`}
                className="block group"
              >
                <div className={`${role.bg} border ${role.border} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card`}>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                    <role.icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {role.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {role.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm">
                    <span>ورود به پنل</span>
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <ArrowRight size={16} />
            <span>بازگشت به صفحه اصلی</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Portal;
