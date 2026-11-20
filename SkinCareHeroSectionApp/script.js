
// Open and close the navigation menu.

const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});


// Open and close each product information section.

const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const accordionItem = button.parentElement;

        accordionItem.classList.toggle("active");

        const symbol = button.querySelector("span");

        if (accordionItem.classList.contains("active")) {
            symbol.textContent = "−";
        } else {
            symbol.textContent = "+";
        }

    });

});


// Change the product name when the user clicks Previous or Next.

const products = [
    "Hydro Boost Water Gel",
    "Vitamin C Brightening Cream",
    "Daily Moisture Cream"
];

let currentProduct = 0;

const productName = document.getElementById("product-name");

const nextButton = document.getElementById("next-product");

const previousButton = document.getElementById("previous-product");


nextButton.addEventListener("click", function () {

    currentProduct = currentProduct + 1;

    if (currentProduct === products.length) {
        currentProduct = 0;
    }

    productName.textContent = products[currentProduct];

});


previousButton.addEventListener("click", function () {

    currentProduct = currentProduct - 1;

    if (currentProduct < 0) {
        currentProduct = products.length - 1;
    }

    productName.textContent = products[currentProduct];

});
