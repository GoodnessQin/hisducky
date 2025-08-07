// Portfolio Loaded
console.log("Portfolio Loaded - Ready for Interactions!");

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.close-btn');
  const body = document.body;

  // Navbar Blur on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Open Mobile Menu
  hamburger.addEventListener('click', () => {
    mobileMenu.style.right = '0';
    body.style.overflow = 'hidden';
  });

  // Close Mobile Menu
  closeBtn.addEventListener('click', () => {
    mobileMenu.style.right = '-100%';
    body.style.overflow = 'auto';
  });

  // Close Mobile Menu on Link Click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.style.right = '-100%';
      body.style.overflow = 'auto';
    });
  });

  // Scroll Animations
const elementsToAnimate = document.querySelectorAll(
  '.hero-image img, .hero-text h1, .about-img-wrapper, .about-content, .collections-title, .projects-title, .projects-footer h3, .skills-card, .skills-heading h2, .footer-title'
);



  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  elementsToAnimate.forEach(el => observer.observe(el));

  
});
