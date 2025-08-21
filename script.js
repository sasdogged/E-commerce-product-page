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
//# sourceMappingURL=script.js.map