// Active nav link highlighting based on scroll position
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const isSubPage = window.location.pathname.includes('view.html') || window.location.pathname.includes('services.html') || window.location.pathname.endsWith('/view') || window.location.pathname.endsWith('/services') || window.location.pathname.endsWith('/view/') || window.location.pathname.endsWith('/services/');

if (!isSubPage && sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            if (link.dataset.section) {
              link.classList.toggle(
                'active',
                link.dataset.section === id || ((id === 'intro' || id === 'about') && link.dataset.section === 'about')
              );
            }
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => observer.observe(section));
}

// Contact form (front-end only demo submission)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Thanks! Your message has been noted.';
    form.reset();
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Hero image tap/click toggle for mobile and desktop
const heroImageWrap = document.getElementById('hero-image-wrap');

if (heroImageWrap) {
  // Mobile tap & desktop click toggle
  heroImageWrap.addEventListener('click', (e) => {
    heroImageWrap.classList.toggle('is-active');
  });

  // Keyboard accessibility (Enter / Space to toggle)
  heroImageWrap.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      heroImageWrap.classList.toggle('is-active');
    }
  });

  // Tap outside resets back to original image
  document.addEventListener('click', (e) => {
    if (!heroImageWrap.contains(e.target)) {
      heroImageWrap.classList.remove('is-active');
    }
  });
}

