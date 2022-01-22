// Select DOM Items
menuBtn = document.querySelector(".menu-btn");

menu = document.querySelector(".menu");

menuNav = document.querySelector(".menu-nav");

menuBranding = document.querySelector(".menu-branding");

navItems = document.querySelectorAll(".nav-items");

// Set initial State of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));

        showMenu = true;
    } else {

        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));

        showMenu = false;
    }
}
