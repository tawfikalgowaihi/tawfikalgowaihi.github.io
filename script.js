// قاعدة بيانات المنتجات مع المبيعات، التقييمات، الألوان والمقاسات
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

let cart = [];

// عرض المنتجات في الشبكة (Grid) حسب التصنيف
function renderProducts(categoryName) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    const filtered = products.filter(p => p.category === categoryName);

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: span 2; text-align: center; color: var(--text-sub); padding: 30px;">لا توجد منتجات متاحة في هذا القسم حالياً.</p>';
        return;
    }

    filtered.forEach(p => {
        // توليد دوائر الألوان
        let colorsHtml = p.colors.map(c => `<span class="color-dot" style="background-color: ${c};"></span>`).join('');
        // توليد خيارات المقاسات
        let sizesHtml = p.sizes.map(s => `<span class="size-chip">${s}</span>`).join('');
        // شارة الأكثر طلباً
        let hotBadge = p.isHot ? `<div class="badge-hot">الأكثر طلباً</div>` : '';

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            ${hotBadge}
            <div class="product-img-wrap">
                <img src="${p.image}" alt="${p.name}">
            </div>
            <div>
                <h3 class="product-title">${p.name}</h3>
                <p class="product-desc">${p.desc}</p>
                
                <div class="product-meta-row">
                    <span class="product-rating"><i class="fa-solid fa-star"></i> ${p.rating}</span>
                    <span>مبيعات: +${p.purchases}</span>
                </div>

                <div class="product-colors">${colorsHtml}</div>
                <div class="product-sizes-row">${sizesHtml}</div>

                <div class="product-price">
                    ${p.price.toLocaleString()} <span>ريال قعيطي</span>
                </div>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${p.id})">
                <i class="fa-solid fa-cart-plus"></i> أضف إلى السلة
            </button>
        `;
        grid.appendChild(card);
    });
}

// تصفية التصنيفات عبر أزرار الشريط
function filterCategory(categoryName, btnElement) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    renderProducts(categoryName);
}

// إضافة منتج إلى السلة
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
}

// تحديث واجهة السلة (الشريط السفلي والعدادات)
function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    document.getElementById('cartBadge').innerText = totalCount;
    document.getElementById('floatingCount').innerText = `${totalCount} منتجات في السلة`;
    document.getElementById('floatingTotal').innerText = `${totalPrice.toLocaleString()} ريال قعيطي`;

    const floatingCart = document.getElementById('floatingCart');
    if (totalCount > 0) {
        floatingCart.style.display = 'flex';
    } else {
        floatingCart.style.display = 'none';
    }

    renderCartItemsModal();
}

// عرض عناصر السلة داخل نافذة الـ Modal
function renderCartItemsModal() {
    const listContainer = document.getElementById('cartItemsList');
    listContainer.innerHTML = '';

    if (cart.length === 0) {
        listContainer.innerHTML = '<p style="text-align: center; color: var(--text-sub); padding: 20px;">سلة المشتريات فارغة حالياً.</p>';
        return;
    }

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>${(item.price * item.qty).toLocaleString()} ريال قعيطي</p>
            </div>
            <div class="qty-controls">
                <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                <span>${item.qty}</span>
                <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
            </div>
        `;
        listContainer.appendChild(itemDiv);
    });
}

// تعديل الكمية داخل السلة
function changeQty(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
    }
    updateCartUI();
}

// فتح وإغلاق نافذة السلة
function openCartModal() {
    document.getElementById('cartModal').style.display = 'flex';
    renderCartItemsModal();
}

function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
}

// إرسال الطلب مباشرة إلى الواتساب مع التفاصيل
function sendToWhatsApp() {
    if (cart.length === 0) {
        alert('يرجى إضافة منتجات إلى السلة أولاً قبل إكمال الطلب.');
        return;
    }

    const paymentMethod = document.getElementById('paymentMethod').value;
    const customerNotes = document.getElementById('customerNotes').value;
    let total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    let message = `🛒 *طلب جديد من متجر القفل ستوري*\n\n`;
    cart.forEach((item, index) => {
        message += `${index + 1}. *${item.name}*\n   الكمية: ${item.qty} | السعر: ${(item.price * item.qty).toLocaleString()} ريال\n`;
    });

    message += `\n💰 *الإجمالي الكلي:* ${total.toLocaleString()} ريال قعيطي\n`;
    message += `💳 *طريقة الدفع:* ${paymentMethod}\n`;
    if (customerNotes.trim() !== '') {
        message += `📝 *ملاحظات وعنوان العميل:* ${customerNotes}\n`;
    }
    message += `\nشكراً لتسوقكم في القفل ستوري ✨`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "967739572620"; // رقم الواتساب الخاص بالمتجر
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
}

// التشغيل المبدئي عند تحميل الصفحة
window.onload = function() {
    renderProducts('ملابس نسائية');
    updateCartUI();
};
      
