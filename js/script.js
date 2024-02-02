document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('#result');

  const currentDate = new Date()
  if (currentDate.getDay() === 3) {
    element.textContent = 'Es ist Mittwoch, meine Kerle';
  }
  else {
    element.textContent = 'Nein';
  }
})

const themeToggle = document.querySelector('#theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.body.classList.add(savedTheme);
  themeToggle.checked = savedTheme === 'light-theme';
} else {
  document.body.classList.add(prefersDarkScheme.matches ? 'dark-theme' : 'light-theme');
}

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    document.body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', 'light-theme');
  } else {
    document.body.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  }
});