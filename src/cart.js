const CART_KEY = 'homedine_cart';

export function getCart() {
    try {
        const cartStr = localStorage.getItem(CART_KEY);
        return cartStr ? JSON.parse(cartStr) : [];
    } catch (e) {
        return [];
    }
}

export function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('cart_updated'));
}

export function addToCart(product) {
    const cart = getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += (product.quantity || 1);
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price, // ensure this is a number
            image: product.image,
            quantity: product.quantity || 1
        });
    }
    saveCart(cart);
}

export function updateQuantity(id, quantity) {
    let cart = getCart();
    const existing = cart.find(item => item.id === id);
    if (existing) {
        if (quantity <= 0) {
            cart = cart.filter(item => item.id !== id);
        } else {
            existing.quantity = quantity;
        }
        saveCart(cart);
    }
}

export function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
}

export function clearCart() {
    localStorage.removeItem(CART_KEY);
    window.dispatchEvent(new CustomEvent('cart_updated'));
}

export function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

export function getCartCount() {
    const cart = getCart();
    return cart.reduce((count, item) => count + item.quantity, 0);
}
