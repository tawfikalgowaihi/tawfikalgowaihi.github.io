// =================================================================
// 📦 قاعدة بيانات منتجات متجر القفل ستوري
// =================================================================
const products = [

    // ==========================================
    // 👚 1. قسم: ملابس نسائية
    // ==========================================
    {
        id: 101,
        category: "ملابس نسائية",
        name: "فستان سهرة ملكي راقي",
        desc: "تصميم أنيق ومريح للمناسبات الفاخرة",
        price: 8500,
        image: "images/dress1.jpg",
        rating: 4.9,
        purchases: 142,
        isHot: true,
        colors: ["#000000", "#d4af37", "#ff4757"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 102,
        category: "ملابس نسائية",
        name: "طقم صيفي كاجوال عصري",
        desc: "قماش قطني عالي الجودة ومريح للاستخدام اليومي",
        price: 4500,
        image: "images/dress2.jpg",
        rating: 4.7,
        purchases: 98,
        isHot: false,
        colors: ["#4facfe", "#f0f6fc", "#8b949e"],
        sizes: ["M", "L", "XL"]
    },

    // ==========================================
    // 👶 2. قسم: ملابس اطفال
    // ==========================================
    {
        id: 201,
        category: "ملابس اطفال",
        name: "طقم أطفال قطني للأعياد",
        desc: "تصميم مبهج وناعم على بشرة الأطفال الحساسة",
        price: 3800,
        image: "images/kid1.jpg",
        rating: 4.8,
        purchases: 215,
        isHot: true,
        colors: ["#25D366", "#ff4757", "#4facfe"],
        sizes: ["2 سنة", "4 سنوات", "6 سنوات"]
    },
    {
        id: 202,
        category: "ملابس اطفال",
        name: "بدلة شتوية دافئة للأطفال",
        desc: "تصميم شتوي أنيق ومبطن لتدفئة طفلك بأعلى جودة",
        price: 4500,
        image: "https://i.ibb.co/Q3qW5DMz/1777279843019-copy-295x392.png",
        rating: 4.9,
        purchases: 85,
        isHot: true,
        colors: ["#4facfe", "#ff4757", "#050811"],
        sizes: ["سنة", "سنتين", "3 سنوات", "4 سنوات"]
    },

    // ==========================================
    // 🧴 3. قسم: العناية بالجسم
    // ==========================================
    {
        id: 301,
        category: "العناية بالجسم",
        name: "هاي كلاس الأصلي رقم واحد",
        desc: "سائل تنظيف الأقمشة السوداء (400ml)",
        price: 2500,
        image: "images/care1.jpg",
        rating: 4.9,
        purchases: 320,
        isHot: true,
        colors: ["#00f2fe"],
        sizes: ["400ml"]
    },
    {
        id: 302,
        category: "العناية بالجسم",
        name: "شامبو العباية الراقي 5 لتر",
        desc: "سائل تنظيف وحماية الأقمشة السوداء بسعة 5 لتر",
        price: 2500,
        image: "https://i.ibb.co/vxJv7ggF/1777282148717-copy-295x392.png",
        rating: 4.9,
        purchases: 150,
        isHot: true,
        colors: ["#050811", "#00f2fe"],
        sizes: ["5 لتر"]
    },

    // ==========================================
    // 🏠 4. قسم: مستلزمات البيت
    // ==========================================
    {
        id: 401,
        category: "مستلزمات البيت",
        name: "منظم مطبخ ذكي متعدد الطبقات",
        desc: "لتنظيم الأدوات وتوفير المساحة بكفاءة عالية",
        price: 6000,
        image: "https://www.google.com/imgres?q=%D9%85%D9%86%D8%B8%D9%85%20%D9%85%D8%B7%D8%A8%D8%AE%20%D8%B0%D9%83%D9%8A%20%D9%85%D8%AA%D8%B9%D8%AF%D8%AF%20%D8%A7%D9%84%D8%B7%D8%A8%D9%82%D8%A7%D8%AA&imgurl=https%3A%2F%2Feg.jumia.is%2Funsafe%2Ffit-in%2F500x500%2Ffilters%3Afill(white)%2Fproduct%2F09%2F6644431%2F1.jpg%3F8825&imgrefurl=https%3A%2F%2Fwww.jumia.com.eg%2Far%2Fgeneric-multipurpose-kitchen-organizerstorage-tabletop-rack-tiered-shelf-onion-stand-for-kitchen-vessels-vegetable-organiser-grey-4-layers-134446690.html%3Fsrsltid%3DAYCX9vIXhql1_WGJbx6E4_9ycaIqcugJ6ckGFM1BI0WT8A9vJVEqs8Vl&docid=1esja2NT3VBJgM&tbnid=AulFSicmKtJLVM&vet=12ahUKEwjF19WjtuuXAxWx2QIHHUQVCxIQnPAOegQIPBAA..i&w=500&h=500&hcb=2&ved=2ahUKEwjF19WjtuuXAxWx2QIHHUQVCxIQnPAOegQIPBAA",
        rating: 4.6,
        purchases: 76,
        isHot: false,
        colors: ["#ffffff", "#050811"],
        sizes: ["قياسي"]
    },

    // ==========================================
    // 🌸 5. قسم: عطور فاخره
    // ==========================================
    {
        id: 501,
        category: "عطور فاخره",
        name: "عطر الملكة الذهبي الفاخر",
        desc: "ثبات طويل ورائحة مميزة تدوم لأكثر من 24 ساعة",
        price: 9000,
        image: "https://www.google.com/imgres?q=%D8%B9%D8%B7%D8%B1%20%D8%A7%D9%84%D9%85%D9%84%D9%83%D8%A9%20%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A%20%D8%A7%D9%84%D9%81%D8%A7%D8%AE%D8%B1&imgurl=https%3A%2F%2Flookaside.instagram.com%2Fseo%2Fgoogle_widget%2Fcrawler%2F%3Fmedia_id%3D4006897835490927357&imgrefurl=https%3A%2F%2Fwww.instagram.com%2Freel%2FCzWGL5NxLet%2F&docid=KeiH3W7yVsOXBM&tbnid=zP4q_-8J-J_wlM&vet=12ahUKEwiX2pPNtuuXAxVJwQIHHZqfErAQnPAOegUImgIQAA..i&w=1440&h=1920&hcb=2&itg=1&ved=2ahUKEwiX2pPNtuuXAxVJwQIHHZqfErAQnPAOegUImgIQAA",
        rating: 5.0,
        purchases: 189,
        isHot: true,
        colors: ["#d4af37"],
        sizes: ["100ml"]
    },

    // ==========================================
    // ⌚ 6. قسم: اكسسورات
    // ==========================================
    {
        id: 601,
        category: "اكسسورات",
        name: "ساعة يد ذكية بتصميم فضائي",
        desc: "مقاومة للماء وتحتوي على ميزات تتبع اللياقة",
        price: 12000,
        image: "https://www.google.com/imgres?q=%D8%B3%D8%A7%D8%B9%D8%A9%20%D9%8A%D8%AF%20%D8%B0%D9%83%D9%8A%D8%A9%20%D8%A8%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D9%81%D8%B6%D8%A7%D8%A6%D9%8A&imgurl=https%3A%2F%2Fwww.xmart.jo%2Fcdn%2Fshop%2Fcollections%2FJOD_4_0f9d6d4d-94b9-4ac0-a2d7-f6b0b1c49807.webp%3Fv%3D1748121434%26width%3D640&imgrefurl=https%3A%2F%2Fwww.xmart.jo%2Fcollections%2Fsmart-watches%3Fsrsltid%3DAYCX9vIYGONAITfmTivazQmInqSJq7kn0EJCEuRLqIvDWuRiXBRCZ9GE&docid=_Piq83K2B5QiKM&tbnid=UnTMtH61Z26GGM&vet=12ahUKEwjyo_6xtuuXAxWfRPEDHWkDNhEQnPAOegUIygIQAA..i&w=640&h=640&hcb=2&ved=2ahUKEwjyo_6xtuuXAxWfRPEDHWkDNhEQnPAOegUIygIQAA",
        rating: 4.8,
        purchases: 110,
        isHot: false,
        colors: ["#050811", "#d4af37", "#00f2fe"],
        sizes: ["عالمي"]
    }

];
