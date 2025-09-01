const header = document.getElementById("headerFixed");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            header.classList.remove("py-1");
            header.classList.add("py-3");
        } else {
            header.classList.remove("py-3");
            header.classList.add("py-1");
        }
    });

    const dropdown = document.querySelector('[data-open]');
        const button = dropdown.querySelector('button');

        button.addEventListener('click', () => {
            const isOpen = dropdown.getAttribute('data-open') === 'true';
            dropdown.setAttribute('data-open', isOpen ? 'false' : 'true');
        });