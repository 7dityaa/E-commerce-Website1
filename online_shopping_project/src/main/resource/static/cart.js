let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    cart.push(product);
    alert(`${product.name} added to cart`);
}

function displayCartItems() {
    document.getElementById("cart-items").innerHTML = cart.map(item => `
        <div class="cart-item">
            <h3>${item.name}</h3>
            <p>Price: ${item.price}</p>
        </div>
    `).join("");
}

function checkout() {
    alert("Proceeding to checkout...");
    cart = [];
    displayCartItems();
}
