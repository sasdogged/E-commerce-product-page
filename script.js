//  Variables for the mobile menu toggle
const navigation = document.getElementById('navigation');
const mobileToggle = document.querySelector(".mobile-nav-toggle");
//  Event listener for mobile menu toggle
mobileToggle?.addEventListener("click", function () {
    const visibility = navigation?.getAttribute("data-visible");
    // if statement conditional for menu toggle
    if (visibility === 'false') {
        navigation?.setAttribute("data-visible", "true");
        mobileToggle.setAttribute("aria-expanded", "true");
    }
    else if (visibility === 'true') {
        navigation?.setAttribute("data-visible", "false");
        mobileToggle.setAttribute("aria-expanded", "false");
    }
    // if statement conditional for overlay
    const overlay = document.querySelector('.menu-overlay');
    if (visibility === 'false') {
        navigation?.setAttribute("data-visible", "true");
        overlay?.classList.add('show');
    }
    else {
        navigation?.setAttribute("data-visible", "false");
        overlay?.classList.remove('show');
    }
});
// Cart dropdown
const cartButton = document.getElementById('link');
const cartDropdown = document.querySelector('.cart-dropdown');
cartButton?.addEventListener('click', function () {
    cartDropdown?.classList.toggle("active");
});
// Product gallery scrolling
const images = [
    "./assets/image-product-1-thumbnail.jpg",
    "./assets/image-product-2-thumbnail.jpg",
    "./assets/image-product-3.jpg",
    "./assets/image-product-4-thumbnail.jpg"
];
let currentIndex = 0;
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
// Add to Cart
let cartQuantity = 0;
let quantityDisplayed = document.getElementById('quantity-displayed');
const plusCart = document.getElementById('plus');
const minusCart = document.getElementById('minus');
minusCart?.addEventListener('click', function () {
    cartQuantity = cartQuantity - 1;
    quantityDisplayed.textContent = cartQuantity.toString();
    console.log(cartQuantity);
});
plusCart?.addEventListener('click', function () {
    cartQuantity = cartQuantity + 1;
    quantityDisplayed.textContent = cartQuantity.toString();
    console.log(cartQuantity);
});
// export {};
//# sourceMappingURL=script.js.map