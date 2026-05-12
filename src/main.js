import './style.css';
import { addToCart, getCart, updateQuantity, removeFromCart, getCartTotal, getCartCount } from './cart.js';
import { getProductById } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    setupCartBadge();
    setupMobileMenu();
    setupAddToCartButtons();
    setupProductCardsRouting();
    setupButtonRouting();
    setupSearch();

    if (window.location.pathname.includes('cart.html')) {
        renderCartPage();
    }
    
    if (window.location.pathname.includes('product.html')) {
        renderProductDetailPage();
    }

    window.addEventListener('cart_updated', () => {
        setupCartBadge();
        if (window.location.pathname.includes('cart.html')) {
            renderCartPage();
        }
    });
});

function setupCartBadge() {
    const bagIcons = document.querySelectorAll('a[href="/cart.html"], a[aria-label="shopping_bag"], a[aria-label="Shopping Bag"]');
    const count = getCartCount();
    
    bagIcons.forEach(icon => {
        let badge = icon.querySelector('.cart-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'cart-badge absolute -top-1 -right-1 bg-secondary text-surface-container-lowest text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center pointer-events-none transition-all';
            icon.classList.add('relative');
            icon.appendChild(badge);
        }
        badge.innerText = count;
        badge.style.opacity = count > 0 ? '1' : '0';
    });
}

function setupMobileMenu() {
    const drawer = document.createElement('div');
    drawer.className = 'fixed inset-0 z-[100] bg-surface-container-lowest transform transition-transform duration-300 translate-x-full flex flex-col p-6';
    drawer.innerHTML = `
        <div class="flex justify-between items-center mb-8 border-b border-surface-variant pb-6">
            <a class="font-headline-lg text-headline-lg text-primary italic" href="/index.html">Homedine</a>
            <button class="close-menu p-2 text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined text-3xl">close</span></button>
        </div>
        <nav class="flex flex-col gap-8 text-2xl font-headline-md">
            <a href="/shop.html" class="text-on-surface hover:text-primary transition-colors">Shop</a>
            <a href="/shop.html" class="text-on-surface hover:text-primary transition-colors">Bestsellers</a>
            <a href="/journal.html" class="text-on-surface hover:text-primary transition-colors">Gallery</a>
            <a href="/about.html" class="text-on-surface hover:text-primary transition-colors">About</a>
            <a href="/sustainability.html" class="text-on-surface hover:text-primary transition-colors">Sustainability</a>
            <a href="/contact.html" class="text-on-surface hover:text-primary transition-colors">Contact</a>
        </nav>
    `;
    document.body.appendChild(drawer);

    const closeBtn = drawer.querySelector('.close-menu');
    closeBtn.addEventListener('click', () => {
        drawer.classList.add('translate-x-full');
    });

    const menuBtns = document.querySelectorAll('button');
    menuBtns.forEach(btn => {
        const text = btn.innerText.toLowerCase();
        const html = btn.innerHTML.toLowerCase();
        if (text.includes('menu') || html.includes('>menu<')) {
            btn.addEventListener('click', () => {
                drawer.classList.remove('translate-x-full');
            });
        }
    });
}

function setupAddToCartButtons() {
    const addToCartBtns = document.querySelectorAll('button');
    addToCartBtns.forEach(btn => {
        const text = btn.innerText.toLowerCase();
        // Skip product page add to cart, we'll handle it specially
        if (window.location.pathname.includes('product.html')) return;

        if (text.includes('add') && !text.includes('address') && !btn.closest('.cart-item-actions')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // prevent card click routing
                const card = btn.closest('.group, article, .flex-col');
                if (card) {
                    const nameEl = card.querySelector('h3, h4, p.font-headline-md');
                    const priceEl = card.querySelector('.font-medium, .font-label-md.text-primary, .text-on-surface.font-label-md');
                    const imgEl = card.querySelector('img');

                    if (nameEl && imgEl) {
                        const name = nameEl.innerText.trim();
                        let price = 29.99;
                        if (priceEl) {
                            const priceText = priceEl.innerText.trim().replace(/[^0-9.]/g, '');
                            if(priceText) price = parseFloat(priceText);
                        }
                        const image = imgEl.src;
                        const id = name.toLowerCase().replace(/[^a-z0-9]/g, '-');

                        addToCart({ id, name, price, image });
                        showToast(`Added ${name} to cart!`);
                    } else {
                         addToCart({ id: 'generic-item', name: 'Eco Item', price: 29.99, image: '/images/product.png' });
                         showToast(`Added item to cart!`);
                    }
                }
            });
        }
    });
}

function setupProductCardsRouting() {
    if (window.location.pathname.includes('product.html') || window.location.pathname.includes('cart.html')) return;

    // Make anything that looks like a product card clickable
    const cards = document.querySelectorAll('.group.cursor-pointer, .group:has(h3)');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't route if clicking a button (like quick add)
            if (e.target.closest('button')) return;

            const nameEl = card.querySelector('h3, h4, p.font-headline-md');
            if (nameEl) {
                const name = nameEl.innerText.trim();
                let id = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
                // Hardcode mappings for catalog matches if needed
                if (id.includes('ceramic-cup')) id = 'stonesip-ceramic-cup';
                if (id.includes('non-stick') || id.includes('cookware')) id = 'sizzlepro-non-stick-pan';
                if (id.includes('bamboo')) id = 'bamboo-utensil-set';
                if (id.includes('pitcher') || id.includes('drinkware')) id = 'freshpitcher';
                
                window.location.href = `/product.html?id=${id}`;
            }
        });
    });
}

function showToast(message) {
    let toast = document.getElementById('cart-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'cart-toast';
        toast.className = 'fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-primary text-surface-container-lowest px-6 py-3 rounded-full shadow-lg z-50 flex items-center gap-2 transition-all duration-300 translate-y-20 opacity-0 pointer-events-none';
        toast.innerHTML = `<span class="material-symbols-outlined text-sm">check_circle</span> <span class="toast-msg font-label-md"></span>`;
        document.body.appendChild(toast);
    }
    toast.querySelector('.toast-msg').innerText = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

function setupButtonRouting() {
    document.querySelectorAll('button').forEach(el => {
        const text = el.innerText.toLowerCase();
        if (text.includes('add')) return;
        if (text.includes('shop now') || text.includes('explore')) {
            el.addEventListener('click', (e) => { e.preventDefault(); window.location.href = '/shop.html'; });
        } else if (text.includes('proceed to checkout') || text.includes('checkout')) {
            el.addEventListener('click', (e) => { e.preventDefault(); window.location.href = '/checkout.html'; });
        }
    });
}

function setupSearch() {
    const searchInputs = document.querySelectorAll('input[placeholder*="Search"]');
    searchInputs.forEach(input => {
        const handleSearch = () => {
            const query = input.value.trim();
            if (query) {
                window.location.href = `/shop.html?q=${encodeURIComponent(query)}`;
            }
        };

        // Listen for enter key
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
            }
        });

        // Listen for icon click
        const prevSibling = input.previousElementSibling;
        if (prevSibling && prevSibling.innerText.includes('search')) {
            prevSibling.style.cursor = 'pointer';
            prevSibling.addEventListener('click', handleSearch);
        }
    });

    if (window.location.pathname.includes('shop.html')) {
        const params = new URLSearchParams(window.location.search);
        const query = params.get('q');
        if (query) {
            setTimeout(() => {
                showToast(`Showing results for: "${query}"`);
            }, 500);
        }
    }
}

function renderCartPage() {
    const cartContainer = document.querySelector('section.flex.flex-col.gap-6');
    const orderSummaryContainer = document.querySelector('aside .bg-surface-container-low');
    
    if (!cartContainer || !orderSummaryContainer) return;

    const cart = getCart();

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="bg-surface-container-lowest p-12 rounded-xl text-center border border-surface-container-high flex flex-col items-center">
                <span class="material-symbols-outlined text-6xl text-outline mb-4">shopping_cart</span>
                <h2 class="font-headline-md text-2xl mb-2 text-primary">Your cart is empty</h2>
                <p class="text-on-surface-variant mb-8 text-lg">Looks like you haven't added any eco-friendly items yet.</p>
                <a href="/shop.html" class="inline-block bg-primary text-surface-container-lowest px-8 py-4 rounded-full font-button text-lg hover:bg-primary/90 transition-colors">Start Shopping</a>
            </div>
        `;
        updateSummaryDOM(orderSummaryContainer, 0);
        return;
    }

    let html = '';
    cart.forEach(item => {
        const variantText = item.color ? `<p class="font-body-md text-sm text-on-surface-variant">Color: ${item.color}</p>` : '';
        html += `
        <article class="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-surface-container-lowest p-6 rounded-xl border border-surface-container-high shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-surface-container-low shrink-0 relative">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 flex flex-col justify-between h-full w-full">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="font-label-md text-label-md text-on-surface mb-1">${item.name}</h3>
                        ${variantText}
                    </div>
                    <span class="font-label-md text-label-md text-primary">$${item.price.toFixed(2)}</span>
                </div>
                <div class="flex items-center justify-between mt-auto">
                    <div class="flex items-center border border-outline-variant rounded-full bg-surface">
                        <button class="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" onclick="window.updateCartItem('${item.id}', ${item.quantity - 1})">
                            <span class="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <input class="w-12 text-center bg-transparent border-none font-body-md text-sm focus:ring-0 p-0 text-on-surface pointer-events-none" type="number" value="${item.quantity}" readonly>
                        <button class="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" onclick="window.updateCartItem('${item.id}', ${item.quantity + 1})">
                            <span class="material-symbols-outlined text-sm">add</span>
                        </button>
                    </div>
                    <button class="text-error font-label-md text-xs hover:underline flex items-center gap-1 transition-colors" onclick="window.removeCartItem('${item.id}')">
                        <span class="material-symbols-outlined text-[16px]">delete</span> Remove
                    </button>
                </div>
            </div>
        </article>
        `;
    });

    cartContainer.innerHTML = html;
    updateSummaryDOM(orderSummaryContainer, getCartTotal());
}

function updateSummaryDOM(container, subtotal) {
    const shipping = subtotal > 0 ? 5.00 : 0.00;
    const total = subtotal + shipping;

    container.innerHTML = `
        <h2 class="font-headline-md text-headline-md text-primary mb-6">Order Summary</h2>
        <div class="flex flex-col gap-4 font-body-md text-body-md text-on-surface mb-6 border-b border-surface-container-high pb-6">
            <div class="flex justify-between">
                <span class="text-on-surface-variant">Subtotal</span>
                <span class="font-medium">$${subtotal.toFixed(2)}</span>
            </div>
            <div class="flex justify-between items-center">
                <div class="flex flex-col">
                    <span class="text-on-surface-variant">Shipping</span>
                    <span class="text-xs text-secondary flex items-center gap-1 mt-1">
                        <span class="material-symbols-outlined text-[14px]">eco</span> Eco-Friendly Shipping
                    </span>
                </div>
                <span class="font-medium">$${shipping.toFixed(2)}</span>
            </div>
            <div class="flex justify-between">
                <span class="text-on-surface-variant">Tax</span>
                <span class="font-medium">Calculated at checkout</span>
            </div>
        </div>
        <div class="flex justify-between items-center mb-8">
            <span class="font-label-md text-lg text-on-surface">Total</span>
            <span class="font-headline-md text-2xl text-primary">$${total.toFixed(2)}</span>
        </div>
        <button class="w-full ${total > 0 ? 'bg-primary hover:bg-on-primary-fixed-variant' : 'bg-surface-variant text-on-surface-variant cursor-not-allowed'} text-on-primary font-button text-button py-4 px-6 rounded-full transition-colors duration-300 shadow-sm hover:shadow-md flex justify-center items-center gap-2" ${total === 0 ? 'disabled' : ''}>
            Proceed to Checkout <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
    `;
    const checkoutBtn = container.querySelector('button');
    if (checkoutBtn && total > 0) {
        checkoutBtn.addEventListener('click', () => window.location.href = '/checkout.html');
    }
}

window.updateCartItem = (id, qty) => updateQuantity(id, qty);
window.removeCartItem = (id) => removeFromCart(id);

// --- Product Detail Page Logic ---
function renderProductDetailPage() {
    const params = new URLSearchParams(window.location.search);
    let id = params.get('id');
    // Default to a product if none provided
    if (!id) id = 'stonesip-ceramic-cup';

    const product = getProductById(id) || getProductById('stonesip-ceramic-cup');

    // Update Headings and Content
    const titleEl = document.querySelector('h1.font-headline-lg');
    const descEl = document.querySelector('p.font-body-md.leading-relaxed');
    const subtitleEl = document.querySelector('p.font-body-lg.mb-6');
    const priceEl = document.querySelector('div.font-headline-md.text-primary.mb-8');
    
    if (titleEl) titleEl.innerText = product.name;
    if (descEl) descEl.innerText = product.description;
    if (subtitleEl) subtitleEl.innerText = "Premium Eco Collection";

    // Ratings & Price injection
    if (priceEl) {
        let priceHtml = ``;
        if (product.discount) {
            priceHtml += `<span class="line-through text-on-surface-variant text-lg mr-2">$${product.originalPrice.toFixed(2)}</span>`;
            priceHtml += `<span class="text-error mr-2">(-${product.discount}%)</span>`;
        }
        priceHtml += `$${product.price.toFixed(2)}`;
        
        // Add ratings above price
        const ratingHtml = `
            <div class="flex items-center gap-2 mb-2">
                <div class="flex text-secondary">
                    ${'<span class="material-symbols-outlined icon-fill text-[18px]">star</span>'.repeat(Math.floor(product.rating))}
                    ${product.rating % 1 !== 0 ? '<span class="material-symbols-outlined text-[18px]">star_half</span>' : ''}
                </div>
                <span class="text-on-surface-variant font-label-md text-sm">${product.rating} (${product.reviews} reviews)</span>
            </div>
        `;
        priceEl.innerHTML = ratingHtml + priceHtml;
    }

    // Update Images
    const mainImg = document.querySelector('.w-full.aspect-\\[4\\/5\\].relative img');
    const thumbsContainer = document.querySelector('.flex.md\\:flex-col.gap-4.overflow-x-auto');
    if (mainImg && product.images.length > 0) {
        mainImg.src = product.images[0];
    }
    if (thumbsContainer && product.images.length > 0) {
        let thumbsHtml = '';
        product.images.forEach((img, i) => {
            thumbsHtml += `
            <button class="thumb-btn w-20 h-24 md:w-full rounded-lg overflow-hidden border-2 ${i===0 ? 'border-primary' : 'border-transparent opacity-70'} shrink-0 transition-all hover:scale-105">
                <img src="${img}" class="w-full h-full object-cover">
            </button>
            `;
        });
        thumbsContainer.innerHTML = thumbsHtml;
        // Bind thumbnail clicks
        const thumbs = thumbsContainer.querySelectorAll('.thumb-btn');
        thumbs.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                thumbs.forEach(t => { t.classList.remove('border-primary'); t.classList.add('border-transparent', 'opacity-70'); });
                btn.classList.add('border-primary');
                btn.classList.remove('border-transparent', 'opacity-70');
                mainImg.src = product.images[index];
            });
        });
    }

    // Update Colors
    const colorContainer = document.querySelector('.mb-8 h3.font-label-md').parentElement;
    if (colorContainer && product.colors) {
        let selectedColor = product.colors[0].name;
        
        const renderColors = () => {
            let colorHtml = `<h3 class="font-label-md text-label-md text-on-surface mb-3">Color: ${selectedColor}</h3>`;
            colorHtml += `<div class="flex gap-3">`;
            product.colors.forEach(color => {
                const isActive = color.name === selectedColor;
                colorHtml += `
                    <button data-color="${color.name}" class="color-btn w-8 h-8 rounded-full transition-all ${isActive ? 'ring-2 ring-offset-2 ring-primary' : 'hover:ring-2 hover:ring-offset-2 hover:ring-outline'}" style="background-color: ${color.hex};"></button>
                `;
            });
            colorHtml += `</div>`;
            colorContainer.innerHTML = colorHtml;

            // Bind clicks
            colorContainer.querySelectorAll('.color-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    selectedColor = e.target.getAttribute('data-color');
                    renderColors();
                });
            });
        };
        renderColors();
        
        // Expose selected color for add to cart
        window._selectedColor = () => selectedColor;
    }

    // Add to Cart
    const qtyInput = document.querySelector('.flex.items-center.border.rounded-full span.font-button');
    let currentQty = 1;
    const minusBtn = document.querySelector('.flex.items-center.border.rounded-full button:first-child');
    const plusBtn = document.querySelector('.flex.items-center.border.rounded-full button:last-child');
    
    if (qtyInput && minusBtn && plusBtn) {
        minusBtn.addEventListener('click', () => {
            if (currentQty > 1) {
                currentQty--;
                qtyInput.innerText = currentQty;
            }
        });
        plusBtn.addEventListener('click', () => {
            currentQty++;
            qtyInput.innerText = currentQty;
        });
    }

    const addBtn = document.querySelector('.flex-1.bg-primary.text-on-primary');
    if (addBtn) {
        addBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const color = window._selectedColor ? window._selectedColor() : null;
            const uniqueId = color ? `${product.id}-${color.replace(/\\s+/g, '-').toLowerCase()}` : product.id;
            
            addToCart({
                id: uniqueId,
                name: product.name,
                price: product.price,
                image: product.images[0],
                quantity: currentQty,
                color: color
            });
            showToast(`Added ${product.name} (${color}) to cart!`);
        });
    }
}
