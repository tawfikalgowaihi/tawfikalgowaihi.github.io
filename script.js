let cart = [];

// عرض المنتجات في الشبكة حسب التصنيف
function renderProducts(categoryName) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    const filtered = products.filter(p => p.category === categoryName);

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: span 2; text-align: center; color: var(--text-sub); padding: 25px; font-size: 11px;">لا توجد منتجات متاحة في هذا القسم حالياً.</p>';
        return;
    }

    filtered.forEach(p => {
        let colorsHtml = p.colors.map(c => `<span class="color-dot" style="background-color: ${c};"></span>`).join('');
        let sizesHtml = p.sizes.map(s => `<span class="size-chip">${s}</span>`).join('');
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
                <i class="fa-solid fa-cart-plus"></i> أضف للسلة
            </button>
        `;
        grid.appendChild(card);
    });
}

// تصفية التصنيفات
function filterCategory(categoryName, btnElement) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    renderProducts(categoryName);
}

// إضافة منتج للسلة
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

// تحديث واجهة السلة
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

// عرض عناصر السلة في النافذة المنبثقة
function renderCartItemsModal() {
    const listContainer = document.getElementById('cartItemsList');
    listContainer.innerHTML = '';

    if (cart.length === 0) {
        listContainer.innerHTML = '<p style="text-align: center; color: var(--text-sub); padding: 15px; font-size: 11px;">سلة المشتريات فارغة حالياً.</p>';
        return;
    }

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div class="cart-item-details">
                <h4 style="font-size: 12px;">${item.name}</h4>
                <p style="font-size: 10px; color: var(--cyan-glow);">${(item.price * item.qty).toLocaleString()} ريال</p>
            </div>
            <div class="qty-controls">
                <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                <span style="font-size: 11px;">${item.qty}</span>
                <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
            </div>
        `;
        listContainer.appendChild(itemDiv);
    });
}

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

function openCartModal() {
    document.getElementById('cartModal').style.display = 'flex';
    renderCartItemsModal();
}

function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
}

// إرسال الطلب للواتساب
function sendToWhatsApp() {
    if (cart.length === 0) {
        alert('يرجى إضافة منتجات إلى السلة أولاً.');
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
    const whatsappNumber = "967739572620";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
}

window.onload = function() {
    renderProducts('ملابس نسائية');
    updateCartUI();
};
