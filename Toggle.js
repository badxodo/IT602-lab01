const toggle = document.getElementById('themeToggle');
const html = document.documentElement;

  if (!toggle) {
    console.error('themeToggle not found');
  }

  toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    console.log('dark mode:', html.classList.contains('dark'));
});