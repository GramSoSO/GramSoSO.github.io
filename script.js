const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// cart.js
let cart = [];

// Function to add item to cart
function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
}

// Function to update cart UI
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = '';
    
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <div>
                <span>${item.name}</span>
                <span>${item.price} Bath</span>
                <span>Quantity: ${item.quantity}</span>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    totalPriceElement.innerText = total;
}

// Function to handle checkout (placeholder function)
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Proceeding to checkout...');
});

// Example usage
document.querySelectorAll('.cart').forEach((cartButton, index) => {
    cartButton.addEventListener('click', () => {
        const product = {
            id: index + 1,
            name: 'Adidas Cartoon',
            price: 700
        };
        addToCart(product);
    });
});
