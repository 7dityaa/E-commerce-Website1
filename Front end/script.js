document.addEventListener('DOMContentLoaded', () => {
    // Product grid generation
    const productGrid = document.getElementById('productGrid');
    const products = [
        { id: 1, name: 'Product 1', price: '$99', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: '$199', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: '$299', image: 'https://via.placeholder.com/150' }
    ];

    products.forEach(product => {
        const productCard = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price}</p>
                    <a href="#" class="btn add-to-cart" data-id="${product.id}">Add to Cart</a>
                </div>
            </div>`;
        productGrid.innerHTML += productCard;
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Added to cart!');
        });
    });

    // Login Box functionality
    const loginBtn = document.getElementById('loginBtn');
    const loginBox = document.getElementById('loginBox');
    const closeLoginBox = document.getElementById('closeLoginBox');
    const loginForm = document.getElementById('loginForm');

    // Show Login Box when Login button is clicked
    loginBtn.addEventListener('click', () => {
        loginBox.classList.remove('d-none');
    });

    // Close Login Box when Close button is clicked
    closeLoginBox.addEventListener('click', () => {
        loginBox.classList.add('d-none');
    });

    // Handle Login Form Submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            alert(`Login Successful!\nEmail: ${email}`);
            loginBox.classList.add('d-none'); // Hide the login box
        } else {
            alert('Please enter both email and password.');
        }
    });
});
