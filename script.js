const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

// ตัวอย่างข้อมูลสินค้า (ควรดึงข้อมูลจากฐานข้อมูล)
const products = [
    { id: 1, name: "สินค้า A", price: 100 },
    { id: 2, name: "สินค้า B", price: 200 },
    // เพิ่มรายการสินค้าอื่นๆ
];

// ฟังก์ชันเพิ่มสินค้าลงในตะกร้า
function addToCart(productId) {
    // หาข้อมูลสินค้าจาก array products
    const product = products.find(p => p.id === productId);
    // เพิ่มสินค้าลงในตะกร้า (ใช้ array หรือ localStorage ก็ได้)
    // ... (ตัวอย่างการใช้ array)
    const cartItem = { ...product, quantity: 1 };
    cart.push(cartItem);
    // อัปเดตแสดงผลตะกร้า
    renderCart();
}

// ฟังก์ชันแสดงผลตะกร้าสินค้า
function renderCart() {
    const cartTable = document.getElementById("cart-table").querySelector("tbody");
    cartTable.innerHTML = ""; // ล้างข้อมูลเก่า
    // วนลูปแสดงรายการสินค้าในตะกร้า
    cart.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td><input type="number" value="${item.quantity}" onchange="updateQuantity(${item.id})"></td>
            <td>${item.price * item.quantity}</td>
            <td><button onclick="removeItem(${item.id})">ลบ</button></td>
        `;
        cartTable.appendChild(row);
    });
    // คำนวณราคาทั้งหมด
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById("total").textContent = total;
}

// ฟังก์ชันปรับปรุงจำนวนสินค้า
function updateQuantity(productId) {
    // ... (โค้ดสำหรับปรับปรุงจำนวนสินค้าในตะกร้า)
    renderCart();
}

// ฟังก์ชันลบสินค้าออกจากตะกร้า
function removeItem(productId) {
    // ... (โค้ดสำหรับลบสินค้าออกจากตะกร้า)
    renderCart();
}

// ตัวอย่างการเพิ่มปุ่มเพิ่มสินค้า
const productList = document.getElementById("product-list"); // สมมติว่ามีส่วนแสดงรายการสินค้า
productList.innerHTML += `
    <button onclick="addToCart(1)">เพิ่มสินค้า A</button>
    <button onclick="addToCart(2)">เพิ่มสินค้า B</button>
`;

// ตัวแปรสำหรับเก็บข้อมูลตะกร้าสินค้า
let cart = [];

// เรียกฟังก์ชัน renderCart ครั้งแรกเพื่อแสดงตะกร้าที่ว่าง
renderCart();

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
