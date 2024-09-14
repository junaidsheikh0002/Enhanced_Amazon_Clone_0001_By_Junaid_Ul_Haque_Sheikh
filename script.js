// Mock Products Data
const products = [
    { id: 1, name: "Wireless Earbuds", price: 59.99, rating: 4.5, image: "earbuds.jpg", category: "Electronics" },
    { id: 2, name: "Smart Watch", price: 199.99, rating: 4.2, image: "watch.jpg", category: "Electronics" },
    { id: 3, name: "Bluetooth Speaker", price: 79.99, rating: 4.7, image: "speaker.jpg", category: "Electronics" },
    { id: 4, name: "Laptop", price: 999.99, rating: 4.8, image: "laptop.jpg", category: "Computers" },
    { id: 5, name: "Smartphone", price: 699.99, rating: 4.6, image: "smartphone.jpg", category: "Electronics" },
];

// Cart Array
let cart = [];

// Function to display products
function displayProducts(productArray) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    productArray.forEach(product => {
        const productCard = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">$${product.price.toFixed(2)}</p>
        <p>Rating: ${product.rating} stars</p>
        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
        productList.innerHTML += productCard;
    });
}

// Function to display featured product
function displayFeaturedProduct() {
    const featuredProduct = products[0];
    const featuredProductCard = `
    <div class="product-card">
      <img src="${featuredProduct.image}" alt="${featuredProduct.name}">
      <h3>${featuredProduct.name}</h3>
      <p class="price">$${featuredProduct.price.toFixed(2)}</p>
      <p>Rating: ${featuredProduct.rating} stars</p>
      <button class="add-to-cart-btn" onclick="addToCart(${featuredProduct.id})">Add to Cart</button>
    </div>
  `;
    document.getElementById('featured-product-card').innerHTML = featuredProductCard;
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({...product, quantity: 1 });
    }

    updateCartCount();
}

// Function to update cart count
function updateCartCount() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').innerText = cartCount;
}

// Function to filter products by search term
function filterProducts(searchTerm) {
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayProducts(filteredProducts);
}

// Event Listener for search
document.getElementById('search-btn').addEventListener('click', () => {
    const searchTerm = document.getElementById('search').value;
    filterProducts(searchTerm);
});

// Initial Display of Products and Featured Product
displayProducts(products);
displayFeaturedProduct();