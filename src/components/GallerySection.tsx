import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  { id: 1, src: gallery1, title: "کلاس درس", category: "آموزشی" },
  { id: 2, src: gallery2, title: "آزمایشگاه علوم", category: "آموزشی" },
  { id: 3, src: gallery3, title: "کتابخانه", category: "امکانات" },
  { id: 4, src: gallery4, title: "فعالیت ورزشی", category: "ورزشی" },
  { id: 5, src: gallery5, title: "جشن پایان سال", category: "رویداد" },
  { id: 6, src: gallery6, title: "اردوی علمی", category: "رویداد" },
];

const categories = ["همه", "آموزشی", "امکانات", "ورزشی", "رویداد"];

const GallerySection = () => {
  const { ref, isInView } = useInView();
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "همه"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 overflow-hidden">
      <div className="container" ref={ref}>
        <div className={`text-center mb-12 transition-all duration-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">گالری</span>
          <h2 className="section-title">گالری تصاویر</h2>
          <p className="section-subtitle">تصاویری از فضای مدرسه و فعالیت‌های دانش‌آموزان</p>
        </div>

        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-500 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-soft hover:shadow-elevated transition-all duration-500 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="font-bold">{image.title}</p>
                  <p className="text-sm text-white/70">{image.category}</p>
                </div>
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn size={20} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="text-white" size={24} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 text-center text-white">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-white/70">{selectedImage.category}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
