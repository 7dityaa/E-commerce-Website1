// Sample product data for demonstration
const featuredProducts = [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$20" }
];

document.getElementById("featured-products").innerHTML = featuredProducts.map(product => `
    <div class="product">
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <a href="product-details.html?id=${product.id}">View Details</a>
    </div>
`).join("");
