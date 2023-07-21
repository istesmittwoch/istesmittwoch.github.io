document.addEventListener('DOMContentLoaded', () => {
  const h1Element = document.createElement('h1');
  document.body.appendChild(h1Element);

  const currentDate = new Date()
  if (currentDate.getDay() === 3) {
    h1Element.textContent = 'Es ist Mittwoch meine Kerle';
  }
  else {
    h1Element.textContent = 'Nein';
  }
})