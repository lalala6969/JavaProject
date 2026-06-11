const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

burgerBtn.addEventListener('click', function () {
    mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
});