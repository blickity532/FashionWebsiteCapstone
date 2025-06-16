function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    let totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    cartCountElement.textContent = totalQuantity;
}

window.addEventListener("storage", updateCartCount);
document.addEventListener("DOMContentLoaded", updateCartCount);