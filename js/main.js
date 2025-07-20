const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function setTheme(mode) {
  if (mode === 'light') {
    html.classList.remove('dark');
    html.classList.add('light');
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
}

setTheme(localStorage.getItem('theme') || 'dark');

themeToggle.addEventListener('click', () => {
  setTheme(html.classList.contains('dark') ? 'light' : 'dark');
});
