document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.answer');

  const currentDate = new Date();
  if (currentDate.getDay() === 3) {
    element.textContent = 'Es ist Mittwoch, meine Kerle';
  }
  else {
    element.textContent = 'Nein';
  }
});