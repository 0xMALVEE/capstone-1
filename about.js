const phoneMenu = document.querySelector('.phone-menu');
const mobileNav = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close-btn');

phoneMenu.addEventListener('click', (e) => {
  e.preventDefault();
  mobileNav.style.display = 'block';
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  mobileNav.style.display = 'none';
});

const mobileNavLinks = document.querySelector('.mobile-navs-links');
const navLinks = mobileNavLinks.querySelectorAll('li');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.style.display = 'none';
  });
});
