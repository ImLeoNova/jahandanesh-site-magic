import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, User, Users, Shield, ArrowRight } from "lucide-react";

const roles = [
  {
    id: "admin",
    title: "مدیریت",
    description: "دسترسی به پنل مدیریت مدرسه",
    icon: Shield,
    color: "from-primary to-navy",
  },
  {
    id: "teacher",
    title: "معلم",
    description: "پنل آموزشی و مدیریت کلاس",
    icon: User,
    color: "from-accent to-primary",
  },
  {
    id: "parent",
    title: "والدین",
    description: "پیگیری وضعیت تحصیلی فرزند",
    icon: Users,
    color: "from-sky to-accent",
  },
];

const Portal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-primary/20 to-background flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Link to="/" className="inline-flex items-center gap-3 mb-8 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <GraduationCap className="text-white" size={36} />
            </div>
            <div className="text-right">
              <h1 className="text-3xl font-bold text-white">جهان دانش</h1>
              <p className="text-white/60 text-sm">آینده‌سازان فردا</p>
            </div>
          </Link>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            ورود به پورتال
          </h2>
          <p className="text-white/70">
            نوع کاربری خود را انتخاب کنید
          </p>
        </motion.div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/login/${role.id}`}
                className="block group"
              >
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <role.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {role.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    {role.description}
                  </p>
                  <div className="flex items-center gap-2 text-accent font-medium">
                    <span>ورود</span>
                    <ArrowRight size={16} className="group-hover:-translate-x-1 transition-transform" />
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
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
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
