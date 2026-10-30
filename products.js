// ==========================================
// ملف منتجات متجر القفل ستوري (يمكنك التعديل والإضافة هنا بكل سهولة)
// ==========================================

const products = [
    {
        id: 1,
        category: "ملابس نسائية",
        name: "فستان سهرة ملكي راقي",
        desc: "تصميم أنيق ومريح للمناسبات الفاخرة",
        price: 8500,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop&q=60",
        rating: 4.9,
        purchases: 142,
        isHot: true,
        colors: ["#000000", "#d4af37", "#ff4757"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 2,
        category: "ملابس نسائية",
        name: "طقم صيفي كاجوال عصرى",
        desc: "قماش قطني عالي الجودة ومريح للاستخدام اليومي",
        price: 4500,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60",
        rating: 4.7,
        purchases: 98,
        isHot: false,
        colors: ["#4facfe", "#f0f6fc", "#8b949e"],
        sizes: ["M", "L", "XL"]
    },
    {
        id: 3,
        category: "ملابس اطفال",
        name: "طقم أطفال قطني للأعياد",
        desc: "تصميم مبهج وناعم على بشرة الأطفال الحساسة",
        price: 3800,
        image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500&auto=format&fit=crop&q=60",
        rating: 4.8,
        purchases: 215,
        isHot: true,
        colors: ["#25D366", "#ff4757", "#4facfe"],
        sizes: ["2 سنة", "4 سنوات", "6 سنوات"]
    },
    {
        id: 4,
        category: "العناية بالجسم",
        name: "هاي كلاس الأصلي رقم واحد",
        desc: "سائل تنظيف الأقمشة السوداء (400ml)",
        price: 2500,
        image: "https://i.ibb.co/Kp9SzZYB/1777197412902.png",
        rating: 4.9,
        purchases: 320,
        isHot: true,
        colors: ["#00f2fe"],
        sizes: ["400ml"]
    },
    {
        id: 5,
        category: "مستلزمات البيت",
        name: "منظم مطبخ ذكي متعدد الطبقات",
        desc: "لتنظيم الأدوات وتوفير المساحة بكفاءة عالية",
        price: 6000,
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60",
        rating: 4.6,
        purchases: 76,
        isHot: false,
        colors: ["#ffffff", "#050811"],
        sizes: ["قياسي"]
    },
    {
        id: 6,
        category: "عطور فاخره",
        name: "عطر الملكة الذهبي الفاخر",
        desc: "ثبات طويل ورائحة مميزة تدوم لأكثر من 24 ساعة",
        price: 9000,
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&auto=format&fit=crop&q=60",
        rating: 5.0,
        purchases: 189,
        isHot: true,
        colors: ["#d4af37"],
        sizes: ["100ml"]
    },
    {
        id: 7,
        category: "اكسسورات",
        name: "ساعة يد ذكية بتصميم فضائي",
        desc: "مقاومة للماء وتحتوي على ميزات تتبع اللياقة",
        price: 12000,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
        rating: 4.8,
        purchases: 110,
        isHot: false,
        colors: ["#050811", "#d4af37", "#00f2fe"],
        sizes: ["عالمي"]
    }
];
      
