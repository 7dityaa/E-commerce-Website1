// Sample cart items (this would typically come from a backend or local storage)
const cartItems = [
    { id: 1, name: "Product 1", price: 500, quantity: 1 },
    { id: 2, name: "Product 2", price: 700, quantity: 2 },
];

// Render Cart Items
function renderCartItems() {
    const cartTable = document.getElementById('cartItems');
    cartTable.innerHTML = '';

    cartItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price} INR</td>
            <td>${item.quantity}</td>
            <td>
                <button class="btn btn-danger" onclick="removeItem(${item.id})">Remove</button>
            </td>
        `;
        cartTable.appendChild(row);
    });
}

// Remove Item from Cart
function removeItem(id) {
    const index = cartItems.findIndex(item => item.id === id);
    if (index !== -1) {
        cartItems.splice(index, 1);
        renderCartItems();
        alert('Item removed from cart!');
    }
}

// Clear Cart
document.getElementById('clearCart').addEventListener('click', () => {
    cartItems.length = 0;
    renderCartItems();
    alert('Cart cleared!');
});

// Proceed to Payment
document.getElementById('proceedToPayment').addEventListener('click', () => {
    const state = document.getElementById('state').value.trim();
    const city = document.getElementById('city').value.trim();
    const landmark = document.getElementById('landmark').value.trim();
    const pincode = document.getElementById('pincode').value.trim();

    if (!state || !city || !landmark || !pincode) {
        alert('Please fill in all address details.');
        return;
    }

    // Store address details (optional: save to localStorage)
    alert(`Delivery to: ${state}, ${city}, ${landmark}, ${pincode}`);
    
    // Redirect to payment page
    window.location.href = 'payment.html';
});

// Initial render
renderCartItems();
