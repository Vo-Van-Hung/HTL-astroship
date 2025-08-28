
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
barsMenu.addEventListener('click', (event) => {
    menu.classList.toggle("hidden");
    event.stopPropagation(); // Ngăn không cho click lan ra document
});


// Khi click ra ngoài menu => đóng menu
document.addEventListener('click', (event) => {
    if (!menu.classList.contains("hidden") && !menu.contains(event.target) && event.target !== barsMenu) {
        menu.classList.add("hidden");
        // rotate-180
    }
});

//  <!-- button pages -->
const buttonPages = document.getElementById("btn-pages");
const menuPages = document.getElementById("menu-pages");
const chevron = document.getElementById("chevron-icon");
buttonPages.addEventListener('click', () => {
    menuPages.classList.toggle("hidden");

    if (!menuPages.classList.contains("hidden")) {
        // Menu đang mở => icon xoay xuống
        chevron.classList.add("rotate-180");
    } else {
        // Menu đang đóng => icon trở lại bình thường
        chevron.classList.remove("rotate-180");
    }
});