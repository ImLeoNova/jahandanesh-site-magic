import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, User, ArrowLeft } from "lucide-react";
import blogImg1 from "@/assets/blog-1.jpg";
import blogImg2 from "@/assets/blog-2.jpg";
import blogImg3 from "@/assets/blog-3.jpg";

const blogPosts = [
  {
    id: 1,
    title: "اهمیت مطالعه در موفقیت تحصیلی",
    excerpt: "چگونه عادت مطالعه روزانه می‌تواند عملکرد تحصیلی دانش‌آموزان را بهبود بخشد...",
    author: "دکتر احمدی",
    date: "۱۰ بهمن ۱۴۰۴",
    readTime: "۵ دقیقه",
    category: "آموزشی",
    image: blogImg1,
  },
  {
    id: 2,
    title: "نقش ورزش در سلامت روان دانش‌آموزان",
    excerpt: "تأثیر فعالیت‌های ورزشی بر کاهش استرس و افزایش تمرکز در مدرسه...",
    author: "آقای کریمی",
    date: "۵ بهمن ۱۴۰۴",
    readTime: "۴ دقیقه",
    category: "سلامت",
    image: blogImg2,
  },
  {
    id: 3,
    title: "آماده‌سازی برای امتحانات نوبت دوم",
    excerpt: "راهکارهای مؤثر برای برنامه‌ریزی و آمادگی بهتر در امتحانات پایان سال...",
    author: "خانم رضایی",
    date: "۱ بهمن ۱۴۰۴",
    readTime: "۶ دقیقه",
    category: "مشاوره",
    image: blogImg3,
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-24 bg-muted/50 overflow-hidden">
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            بلاگ
          </span>
          <h2 className="section-title">آخرین مطالب</h2>
          <p className="section-subtitle">
            مقالات آموزشی و مشاوره‌ای برای دانش‌آموزان و والدین
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <button className="flex items-center gap-2 text-primary font-medium mt-4 group/btn">
                  <span>ادامه مطلب</span>
                  <ArrowLeft size={16} className="group-hover/btn:-translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="btn-outline">
            مشاهده همه مطالب
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
