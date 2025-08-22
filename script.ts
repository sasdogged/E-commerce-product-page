 
//  Variables for the mobile menu toggle
 const navigation = document.getElementById('navigation');
 const mobileToggle = document.querySelector(".mobile-nav-toggle");

//  Event listener for mobile menu toggle
mobileToggle?.addEventListener("click", function() {
    const visibility = navigation?.getAttribute("data-visible")

    // if statement conditional for menu toggle
    if(visibility === 'false') {
        navigation?.setAttribute("data-visible", "true")
        mobileToggle.setAttribute("aria-expanded", "true")
    } else if(visibility === 'true'){
        navigation?.setAttribute("data-visible", "false")
        mobileToggle.setAttribute("aria-expanded", "false")
    }

    // if statement conditional for overlay
    const overlay = document.querySelector('.menu-overlay')
    if(visibility === 'false') {
        navigation?.setAttribute("data-visible", "true")
        overlay?.classList.add('show')
    } else {
        navigation?.setAttribute("data-visible", "false")
        overlay?.classList.remove('show')
    }
}) 

// Cart dropdown

const cartButton = document.getElementById('link')  as HTMLButtonElement
const cartDropdown = document.querySelector('.cart-dropdown') as HTMLElement

cartButton?.addEventListener('click', function() {

    cartDropdown?.classList.toggle("active")
})

// Product gallery scrolling

const images: string[] = [
  "./assets/image-product-1.jpg",
  "./assets/image-product-2.jpg",
  "./assets/image-product-3.jpg",
  "./assets/image-product-4.jpg"
];

let currentIndex: number = 0;

// main Image Variable / Prev Button / Next Button
const mainImage = document.getElementById("main-image") as HTMLImageElement | null;
const prevButton = document.querySelector(".prev") as HTMLButtonElement | null;
const nextButton = document.querySelector(".next") as HTMLButtonElement | null;

if (mainImage && prevButton && nextButton) {
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    mainImage.src = images[currentIndex]!;
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex]!;
  });
}

// Add to Cart / Display the item quantity

let itemQuantity = document.getElementById('quantity') 
let cartQuantity:number = 0;
let quantityDisplayed = document.getElementById('quantity-displayed')
const plusCart = document.getElementById('plus')
const minusCart = document.getElementById('minus')
let cartItemTotal = document.getElementById('cart-item-total')
let cartItemQty = document.getElementById('cart-item-qty')
let ItemPrice = 125.00;
const addToCartBtn = document.getElementById('add-cart')
let cartContent = document.getElementById('cart-content')
const delBtn = document.getElementById('del-btn');
let cartEmpty = document.getElementById('empty')

// function updateCartDisplay() {

//     cartItemQty!.textContent = cartQuantity.toString()

//     const total = cartQuantity * ItemPrice;
//     cartItemTotal!.textContent = `$${total.toFixed(2)}`;
// }

minusCart?.addEventListener('click', function() {
    cartQuantity = cartQuantity - 1;
    quantityDisplayed!.textContent = cartQuantity.toString()
    itemQuantity!.textContent = quantityDisplayed!.textContent
    // updateCartDisplay()
    console.log(cartQuantity)
});

plusCart?.addEventListener('click', function() {
    cartQuantity = cartQuantity + 1;
    quantityDisplayed!.textContent = cartQuantity.toString()
    itemQuantity!.textContent = quantityDisplayed!.textContent
    // updateCartDisplay()
    console.log(cartQuantity)
});

addToCartBtn?.addEventListener('click', function() {

   if(cartItemQty && cartItemTotal && cartQuantity > 0) {
    cartItemQty.textContent = cartQuantity.toString();
    const total = cartQuantity * ItemPrice;
    cartItemTotal.textContent = `$${total.toFixed(2)}`
    cartContent!.style.display = 'block';
    cartEmpty!.style.display = 'none';
   }
})

// Delete Cart Content

delBtn?.addEventListener('click', function() {
    cartContent!.style.display = 'none';
    cartEmpty!.style.display = 'block';
})




