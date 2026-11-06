function openTab(tabName) {
    // Ukryj wszystkie zakładki
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Odznacz aktywne przyciski w menu
    const navBtns = document.querySelectorAll('.nav-links a');
    navBtns.forEach(btn => btn.classList.remove('active'));

    // Pokaż wybraną zakładkę
    const targetTab = document.getElementById(tabName);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    // Sterowanie widocznością głównej sekcji HERO
    const mainHero = document.getElementById('main-hero');
    if (mainHero) {
        if (tabName === 'home') {
            mainHero.style.display = 'block';
        } else {
            mainHero.style.display = 'none';
        }
    }

    // Oznacz przycisk w nawigacji jako aktywny
    const activeBtn = document.querySelector(`.nav-links a[data-tab="${tabName}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // Zamknij menu hamburgera po kliknięciu na telefonie
    const navMenu = document.getElementById('nav-menu');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const dropdownContainer = document.getElementById('dropdown-container');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        if (dropdownContainer) dropdownContainer.classList.remove('open');
    }

    // Płynne przewinięcie na górę
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Funkcja obsługująca rozwijanie stref na mobile po kliknięciu
function toggleDropdown(event) {
    if (window.innerWidth <= 900) {
        event.preventDefault();
        const container = document.getElementById('dropdown-container');
        container.classList.toggle('open');
    }
}

// Obsługa otwierania i zamykania menu hamburgera
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