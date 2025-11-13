let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCount = document.getElementById('cart-count');

function updateCartCount() {
    cartCount.textContent = cart.length;
}

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${name} added to cart!`);
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.name} - $${item.price}</p>`;
        total += item.price;
    });
    cartTotal.textContent = total.toFixed(2);
}

function checkout() {
    // Simulate a successful checkout (add real payment integration later if needed)
    alert('Checkout successful! Your order has been placed.');
    
    // Clear the cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update the cart count display
    updateCartCount();
    
    // If on the cart page, refresh the display
    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }
}

updateCartCount();
if (window.location.pathname.includes('cart.html')) {
    displayCart();
}