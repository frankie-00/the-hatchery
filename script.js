function toggleDropdown(event) {
    if (window.innerWidth <= 900) {
        event.preventDefault();
        const container = document.getElementById('dropdown-container');
        container.classList.toggle('open');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const dropdownContainer = document.getElementById('dropdown-container');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        if (!navMenu.classList.contains('active') && dropdownContainer) {
            dropdownContainer.classList.remove('open');
        }
    });
});