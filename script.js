"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Variables for the mobile menu toggle
const navigation = document.getElementById('navigation');
const mobileToggle = document.querySelector(".mobile-nav-toggle");
//  Event listener for mobile menu toggle
mobileToggle === null || mobileToggle === void 0 ? void 0 : mobileToggle.addEventListener("click", function () {
    const visibility = navigation === null || navigation === void 0 ? void 0 : navigation.getAttribute("data-visible");
    // if statement conditional for menu toggle
    if (visibility === 'false') {
        navigation === null || navigation === void 0 ? void 0 : navigation.setAttribute("data-visible", "true");
        mobileToggle.setAttribute("aria-expanded", "true");
    }
    else if (visibility === 'true') {
        navigation === null || navigation === void 0 ? void 0 : navigation.setAttribute("data-visible", "false");
        mobileToggle.setAttribute("aria-expanded", "false");
    }
    // if statement conditional for overlay
    const overlay = document.querySelector('.menu-overlay');
    if (visibility === 'false') {
        navigation === null || navigation === void 0 ? void 0 : navigation.setAttribute("data-visible", "true");
        overlay === null || overlay === void 0 ? void 0 : overlay.classList.add('show');
    }
    else {
        navigation === null || navigation === void 0 ? void 0 : navigation.setAttribute("data-visible", "false");
        overlay === null || overlay === void 0 ? void 0 : overlay.classList.remove('show');
    }
});
// Cart dropdown
const cartButton = document.getElementById('link');
const cartDropdown = document.querySelector('.cart-dropdown');
cartButton === null || cartButton === void 0 ? void 0 : cartButton.addEventListener('click', function () {
    cartDropdown === null || cartDropdown === void 0 ? void 0 : cartDropdown.classList.toggle("active");
});
// Product gallery scrolling
const images = [
    "./assets/image-product-1.jpg",
    "./assets/image-product-2.jpg",
    "./assets/image-product-3.jpg",
    "./assets/image-product-4.jpg"
];
let currentIndex = 0;
// main Image Variable / Prev Button / Next Button
const mainImage = document.getElementById("main-image");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
if (mainImage && prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        mainImage.src = images[currentIndex];
    });
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        mainImage.src = images[currentIndex];
    });
}
// Add to Cart / Display the item quantity
let itemQuantity = document.getElementById('quantity');
let cartQuantity = 0;
let quantityDisplayed = document.getElementById('quantity-displayed');
const plusCart = document.getElementById('plus');
const minusCart = document.getElementById('minus');
let cartItemTotal = document.getElementById('cart-item-total');
let cartItemQty = document.getElementById('cart-item-qty');
let ItemPrice = 125.00;
const addToCartBtn = document.getElementById('add-cart');
let cartContent = document.getElementById('cart-content');
const delBtn = document.getElementById('del-btn');
let cartEmpty = document.getElementById('empty');
// function updateCartDisplay() {
//     cartItemQty!.textContent = cartQuantity.toString()
//     const total = cartQuantity * ItemPrice;
//     cartItemTotal!.textContent = `$${total.toFixed(2)}`;
// }
minusCart === null || minusCart === void 0 ? void 0 : minusCart.addEventListener('click', function () {
    cartQuantity = cartQuantity - 1;
    quantityDisplayed.textContent = cartQuantity.toString();
    itemQuantity.textContent = quantityDisplayed.textContent;
    // updateCartDisplay()
    console.log(cartQuantity);
});
plusCart === null || plusCart === void 0 ? void 0 : plusCart.addEventListener('click', function () {
    cartQuantity = cartQuantity + 1;
    quantityDisplayed.textContent = cartQuantity.toString();
    itemQuantity.textContent = quantityDisplayed.textContent;
    // updateCartDisplay()
    console.log(cartQuantity);
});
addToCartBtn === null || addToCartBtn === void 0 ? void 0 : addToCartBtn.addEventListener('click', function () {
    if (cartItemQty && cartItemTotal && cartQuantity > 0) {
        cartItemQty.textContent = cartQuantity.toString();
        const total = cartQuantity * ItemPrice;
        cartItemTotal.textContent = `$${total.toFixed(2)}`;
        cartContent.style.display = 'block';
        cartEmpty.style.display = 'none';
    }
});
// Delete Cart Content
delBtn === null || delBtn === void 0 ? void 0 : delBtn.addEventListener('click', function () {
    cartContent.style.display = 'none';
    cartEmpty.style.display = 'block';
});
//# sourceMappingURL=script.js.map