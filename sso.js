function addToCart(productName, price ,image) {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push({ name: productName, price: price });
    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert(productName + " added to cart!");
}

function toggleShop() {
    const cartItemsContainer = document.getElementById("Shop");
    cartItemsContainer.style.display = cartItemsContainer.style.display === "block" ? "none" : "block";
    displayCartItems();
}

function toggleCart() {
    const cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.style.display = cartItemsContainer.style.display === "block" ? "none" : "block";
    displayCartItems();
}

function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContent = document.getElementById("cartContent");
    const cartTotal = document.getElementById("cartTotal");

    cartContent.innerHTML = "";
    let total = 0;

    cartItems.forEach(item => {
        const cartItemElement = document.createElement("div");

        cartItemElement.classList.add("cart-item");
        cartItemElement.innerHTML = `<span>${item.name} - $${item.price}</span> <span class="remove-item" onclick="removeItem('${item.name}', ${item.price})">Remove</span>`;
        cartContent.appendChild(cartItemElement);

        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

function removeItem(name, price) {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems = cartItems.filter(item => item.name !== name);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    displayCartItems();
}
function updateQuantity(index) {
    const newQuantity = Number(document.querySelector('.item-quantity input').value);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    cart[index].quantity = newQuantity;
    
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
}
// JavaScript functions for adding multiple items to the cart, updating quantities, showing confirmation modal, and searching products

function searchProducts() {
    const searchInput = document.getElementById("searchInput");
    const filter = searchInput.value.toUpperCase();
    const productItems = document.querySelectorAll(".product");

    productItems.forEach(item => {
        const productName = item.querySelector("h3").innerText.toUpperCase();
        if (productName.indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}



window.addEventListener('DOMContentLoaded', function () {
            const savedProducts = JSON.parse(localStorage.getItem('uploadedProducts'));

            if (savedProducts) {
                savedProducts.forEach(function (product) {
                    displayProduct(product);
                });
            }
        });

        function uploadProduct() {
            const fileInput = document.getElementById('imageUpload');
            const productNameInput = document.getElementById('productName');
            const productPriceInput = document.getElementById('productPrice');
            const file = fileInput.files[0];
            const reader = new FileReader();

            reader.onload = function (e) {
                const product = {
                    imageSrc: e.target.result,
                    name: productNameInput.value,
                    price: parseFloat(productPriceInput.value)
                };
                displayProduct(product);

                const savedProducts = JSON.parse(localStorage.getItem('uploadedProducts')) || [];
                savedProducts.push(product);

                localStorage.setItem('uploadedProducts', JSON.stringify(savedProducts));

                fileInput.value = '';
                productNameInput.value = '';
                productPriceInput.value = '';
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        }

        function displayProduct(product) {
            const imagePreview = document.getElementById('imagePreview');
            const productContainer = document.createElement('div');
            productContainer.classList.add('product-container');

            const imgElement = document.createElement('img');
            imgElement.src = product.imageSrc;
            imgElement.classList.add('uploaded-image');
            productContainer.appendChild(imgElement);

            const productNameElement = document.createElement('p');
            productNameElement.textContent = product.name;
            productContainer.appendChild(productNameElement);

            const productPriceElement = document.createElement('p');
            productPriceElement.textContent = `$${product.price}`;
            productContainer.appendChild(productPriceElement);

            imagePreview.appendChild(productContainer);
        }
        function addShop(productName, price ,image) {
            let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            cartItems.push({ name: productName, price: price });
            localStorage.setItem("cart", JSON.stringify(cartItems));
            alert(productName + " added to cart!");
        }