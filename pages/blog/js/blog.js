
// dropdown
const dropdown = document.querySelector('[data-open]');
const button = dropdown.querySelector('button');

button.addEventListener('click', () => {
    const isOpen = dropdown.getAttribute('data-open') === 'true';
    dropdown.setAttribute('data-open', isOpen ? 'false' : 'true');
});


//  headerFixed JS 
const header = document.getElementById("headerFixed");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.remove("py-5");
        header.classList.add("py-3");
    } else {
        header.classList.remove("py-3");
        header.classList.add("py-5");
    }
});

//  JS MENU 
const barsMenu = document.getElementById("barsMenu");
const menu = document.getElementById("menu");
const icon = document.querySelector("i");
barsMenu.addEventListener('click', (event) => {
    menu.classList.toggle("hidden");
    if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-x");
        if (icon.classList.contains("fa-x")) {
            icon.classList.add("text-sm");
        } 
    } else {
        icon.classList.remove("fa-x");
        icon.classList.add("fa-bars");
    }
    event.stopPropagation(); // Ngăn không cho click lan ra document
});


// Khi click ra ngoài menu => đóng menu
document.addEventListener('click', (event) => {
    if (!menu.classList.contains("hidden") && !menu.contains(event.target) && event.target !== barsMenu) {
        menu.classList.add("hidden");
    }
});

//  <!-- button pages -->
const buttonPages = document.getElementById("btn-pages");
const menuPages = document.getElementById("menu-pages");
const chevron = document.getElementById("chevron-icon");
buttonPages.addEventListener('click', () => {
    menuPages.classList.toggle("hidden");

    if (!menuPages.classList.contains("hidden")) {
        chevron.classList.add("rotate-180");
    } else {
        chevron.classList.remove("rotate-180");
    }
});