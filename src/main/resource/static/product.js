// Fetch and display product list
const products = [
    { id: 1, name: "Product 1", price: "$10", description: "Description of product 1" },
    { id: 2, name: "Product 2", price: "$20", description: "Description of product 2" }
];

document.getElementById("product-list").innerHTML = products.map(product => `
    <div class="product">
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <a href="product-details.html?id=${product.id}">View Details</a>
    </div>
`).join("");

// Fetch and display individual product details
function loadProductDetails() {
    const productId = new URLSearchParams(window.location.search).get("id");
    const product = products.find(p => p.id == productId);

    if (product) {
        document.getElementById("product-details").innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: ${product.description}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    }
}

async function loadProductDetails() {
    const productId = new URLSearchParams(window.location.search).get("id");
    const response = await fetch(`http://localhost:8080/api/products/${productId}`);
    const product = await response.json();

    document.getElementById("product-details").innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Description: ${product.description}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
}
window.onload = loadProductDetails;

