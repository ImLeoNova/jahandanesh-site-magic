import { Clock, User, ArrowLeft } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import blogImg1 from "@/assets/blog-1.jpg";
import blogImg2 from "@/assets/blog-2.jpg";
import blogImg3 from "@/assets/blog-3.jpg";

const blogPosts = [
  { id: 1, title: "اهمیت مطالعه در موفقیت تحصیلی", excerpt: "چگونه عادت مطالعه روزانه می‌تواند عملکرد تحصیلی دانش‌آموزان را بهبود بخشد...", author: "دکتر احمدی", date: "۱۰ بهمن ۱۴۰۴", readTime: "۵ دقیقه", category: "آموزشی", image: blogImg1 },
  { id: 2, title: "نقش ورزش در سلامت روان دانش‌آموزان", excerpt: "تأثیر فعالیت‌های ورزشی بر کاهش استرس و افزایش تمرکز در مدرسه...", author: "آقای کریمی", date: "۵ بهمن ۱۴۰۴", readTime: "۴ دقیقه", category: "سلامت", image: blogImg2 },
  { id: 3, title: "آماده‌سازی برای امتحانات نوبت دوم", excerpt: "راهکارهای مؤثر برای برنامه‌ریزی و آمادگی بهتر در امتحانات پایان سال...", author: "خانم رضایی", date: "۱ بهمن ۱۴۰۴", readTime: "۶ دقیقه", category: "مشاوره", image: blogImg3 },
];

const BlogSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="blog" className="py-24 bg-muted/50 overflow-hidden">
      <div className="container" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">بلاگ</span>
          <h2 className="section-title">آخرین مطالب</h2>
          <p className="section-subtitle">مقالات آموزشی و مشاوره‌ای برای دانش‌آموزان و والدین</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group bg-card rounded-2xl overflow-hidden shadow-soft card-hover transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">{post.category}</span>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center gap-1"><User size={14} /><span>{post.author}</span></div>
                  <div className="flex items-center gap-1"><Clock size={14} /><span>{post.readTime}</span></div>
                </div>
                <button className="flex items-center gap-2 text-primary font-medium mt-4 group/btn">
                  <span>ادامه مطلب</span>
                  <ArrowLeft size={16} className="group-hover/btn:-translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-600 delay-500 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <button className="btn-outline">مشاهده همه مطالب</button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
