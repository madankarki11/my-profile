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

// Swap portrait on hover with smooth fade
const profileImages = document.querySelectorAll('.hero__image, .sidebar__profile-img');
const hoverImageCandidates = [
  'file:///C:/Users/ACER/OneDrive/Desktop/my%20profile/this%20is%20my%20image.jpg',
  'file:///C:/Users/ACER/OneDrive/Desktop/my%20profile/this%20is%20my%20image.jpg',
  'file:///C:/Users/ACER/OneDrive/Desktop/my%20profile/This%20is%20my%20image1.jpg'
];
const hoverImageSrc = hoverImageCandidates[0];

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
