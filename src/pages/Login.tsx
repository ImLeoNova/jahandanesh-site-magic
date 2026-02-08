import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GraduationCap, Mail, Lock, Eye, EyeOff, ArrowRight, Shield, User, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const roleInfo: Record<string, { title: string; icon: typeof Shield; color: string }> = {
  admin: { title: "مدیریت", icon: Shield, color: "from-primary to-navy" },
  teacher: { title: "معلم", icon: User, color: "from-accent to-primary" },
  parent: { title: "والدین", icon: Users, color: "from-sky to-accent" },
};

const Login = () => {
  const { role = "parent" } = useParams<{ role: string }>();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const currentRole = roleInfo[role] || roleInfo.parent;
  const RoleIcon = currentRole.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { role, email, password });
  };

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <div className="relative z-10 w-full max-w-md animate-fade-up">
        <div className="bg-card rounded-3xl shadow-elevated p-8">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <GraduationCap className="text-white" size={28} />
              </div>
              <div className="text-right">
                <h1 className="text-xl font-bold text-foreground">جهان دانش</h1>
                <p className="text-muted-foreground text-xs">آینده‌سازان فردا</p>
              </div>
            </Link>
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${currentRole.color} flex items-center justify-center mx-auto mb-4`}>
              <RoleIcon className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-1">ورود {currentRole.title}</h2>
            <p className="text-muted-foreground text-sm">اطلاعات حساب کاربری خود را وارد کنید</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">ایمیل یا کد ملی</Label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input id="email" type="text" placeholder="ایمیل یا کد ملی خود را وارد کنید" value={email} onChange={(e) => setEmail(e.target.value)} className="pr-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">رمز عبور</Label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input id="password" type={showPassword ? "text" : "password"} placeholder="رمز عبور خود را وارد کنید" value={password} onChange={(e) => setPassword(e.target.value)} className="pr-10 pl-10" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="text-muted-foreground">مرا به خاطر بسپار</span>
              </label>
              <a href="#" className="text-primary hover:underline">فراموشی رمز عبور</a>
            </div>
            <Button type="submit" className="w-full btn-primary">ورود به سیستم</Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex flex-col gap-3 text-center text-sm">
              <Link to="/portal" className="inline-flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowRight size={16} /><span>تغییر نوع کاربری</span>
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">بازگشت به صفحه اصلی</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
