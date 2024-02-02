document.addEventListener('DOMContentLoaded', () => {
  const h1Element = document.createElement('h1');
  document.body.appendChild(h1Element);

  const currentDate = new Date()
  if (currentDate.getDay() === 3) {
    h1Element.textContent = 'Es ist Mittwoch, meine Kerle';
  }
  else {
    h1Element.textContent = 'Nein';
  }
})

const btn = document.querySelector('#theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

btn.addEventListener('click', function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle('light-theme');
  } else {
    document.body.classList.toggle('dark-theme');
  }
});