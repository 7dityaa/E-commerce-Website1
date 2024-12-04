// Sample Products
const products = [
    { id: 1, name: "Toy Car", price: 100, category: "toys", img: "toy_car.jpg" },
    { id: 2, name: "Doll Dress", price: 350, category: "dresses", img: "doll_dress.jpg" },
    { id: 3, name: "Laptop", price: 45000, category: "electronics", img: "laptop.jpg" },
    { id: 4, name: "Toy Train", price: 150, category: "toys", img: "toy_train.jpg" },
    { id: 5, name: "Party Dress", price: 500, category: "dresses", img: "party_dress.jpg" },
    { id: 6, name: "Smartphone", price: 25000, category: "electronics", img: "smartphone.jpg" },
    { id: 7, name: "Puzzle Toy", price: 200, category: "toys", img: "puzzle_toy.jpg" },
    { id: 8, name: "Formal Dress", price: 700, category: "dresses", img: "formal_dress.jpg" },
    { id: 9, name: "Smart Watch", price: 10000, category: "electronics", img: "smart_watch.jpg" },
];

// Function to render products based on selected category
function renderProducts(filteredProducts) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-4', 'mb-4');
        productCard.innerHTML = `
            <div class="card">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">₹${product.price}</p>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Function to filter products by category
function filterCategory(category) {
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        renderProducts(filteredProducts);
    }
}

// Initial render with all products
renderProducts(products);
