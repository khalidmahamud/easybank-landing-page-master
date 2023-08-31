const mobileMenu = document.querySelector('div[aria-label="mobile-menu"');
const menuToggleBtn = document.querySelector('#menu-toggle-btn');
const hamburgerIcon = document.querySelector('#hamburger-icon');
const closeIcon = document.querySelector('#close-icon');
const overlay = document.querySelector('#overlay');

menuToggleBtn.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');
    overlay.classList.toggle('invisible');
});

// document.addEventListener('click', (e) => {
//     console.log(e.target);
// });