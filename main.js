// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  body.classList.add('light-mode');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
  updateLightModeColors();
} else {
  // Initialize dark mode colors on page load
  updateDarkModeColors();
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'light');
    updateLightModeColors();
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'dark');
    updateDarkModeColors();
  }
});

function updateLightModeColors() {
  // Update text colors
  document.querySelectorAll('.header-text, .main-text').forEach((el) => {
    el.style.color = '#081b29';
  });
  document.querySelectorAll('.secondary-text').forEach((el) => {
    el.style.color = '#333333';
  });
  document.querySelectorAll('.nav-link').forEach((el) => {
    if (!el.classList.contains('bg-cyan-400')) {
      el.style.color = '#081b29';
    }
  });
  document.querySelectorAll('.form-input').forEach((el) => {
    el.style.color = '#081b29';
    el.style.setProperty('--placeholder-color', '#6b7280');
  });
  themeToggle.style.color = '#081b29';
  document.getElementById('mobile-menu-btn').style.color = '#081b29';
}

function updateDarkModeColors() {
  // Update text colors
  document.querySelectorAll('.header-text, .main-text').forEach((el) => {
    el.style.color = '#ededed';
  });
  document.querySelectorAll('.secondary-text').forEach((el) => {
    el.style.color = '#d1d5db';
  });
  document.querySelectorAll('.nav-link').forEach((el) => {
    if (!el.classList.contains('bg-cyan-400')) {
      el.style.color = '#ffffff';
    }
  });
  document.querySelectorAll('.form-input').forEach((el) => {
    el.style.color = '#ffffff';
    el.style.setProperty('--placeholder-color', '#9ca3af');
  });
  themeToggle.style.color = '#ffffff';
  document.getElementById('mobile-menu-btn').style.color = '#ffffff';
}

// EmailJS initialization
emailjs.init('IOC5CvzHuHRppIZSs');

// Typed.js animation
var typed = new Typed('.text', {
  strings: [
    'a Web Developer',
    'an Application Developer',
    'a Front-End Developer',
    'a Back-End Developer',
  ],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 500,
  loop: true,
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

mobileMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
  navMenu.classList.toggle('flex');
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      navMenu.classList.add('hidden');
      navMenu.classList.remove('flex');
    }
  });
});

// Active navigation switching
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  let current = 'home';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('bg-cyan-400', 'text-black');

    if (body.classList.contains('light-mode')) {
      link.style.color = '#081b29';
    } else {
      link.style.color = '#ffffff';
    }

    if (link.getAttribute('data-section') === current) {
      link.classList.add('bg-cyan-400', 'text-black');
      link.style.color = '#000000';
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Contact form submission
document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const btn = event.target.querySelector('button[type="submit"]');
    const statusMessage = document.getElementById('status-message');

    btn.disabled = true;
    btn.textContent = 'Sending...';
    statusMessage.classList.add('hidden');

    emailjs.sendForm('service_eli3t1r', 'template_cm5nx2h', this).then(
      function () {
        statusMessage.textContent = 'Message sent successfully! 🎉';
        statusMessage.classList.remove('hidden', 'text-red-400');
        statusMessage.classList.add('text-cyan-400');

        document.getElementById('contact-form').reset();

        btn.disabled = false;
        btn.textContent = 'Send Message';
      },
      function (error) {
        statusMessage.textContent =
          'Oops! Something went wrong. Please try again.';
        statusMessage.classList.remove('hidden', 'text-cyan-400');
        statusMessage.classList.add('text-red-400');

        btn.disabled = false;
        btn.textContent = 'Send Message';

        console.log('EmailJS Error:', error);
      }
    );
  });
