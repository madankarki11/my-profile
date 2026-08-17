// Active nav link highlighting based on scroll position
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => observer.observe(section));

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

// Swap portrait on hover with smooth fade (desktop only)
if (window.matchMedia && window.matchMedia('(hover: hover)').matches) {
  const profileImages = document.querySelectorAll('.hero__image, .sidebar__profile-img');
  const hoverImageSrc = 'assets/images/hover.jpg?v=2';

  // Preload hover image
  const preloadImg = new Image();
  preloadImg.src = hoverImageSrc;

  profileImages.forEach((img) => {
    const originalSrc = img.getAttribute('src');

    if (!originalSrc) return;

    img.dataset.originalSrc = originalSrc;

    const changeImage = (targetSrc) => {
      img.style.opacity = '0';
      setTimeout(() => {
        img.setAttribute('src', targetSrc);
        img.style.opacity = '1';
      }, 170);
    };

    img.addEventListener('mouseenter', () => {
      if (img.getAttribute('src') !== hoverImageSrc) {
        changeImage(hoverImageSrc);
      }
    });

    img.addEventListener('mouseleave', () => {
      if (img.getAttribute('src') !== originalSrc) {
        changeImage(originalSrc);
      }
    });
  });
}
