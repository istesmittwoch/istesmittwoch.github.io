const currentDate = new Date()
document.getElementById('answer').textContent = currentDate.getDay() === 3 ? 'Es ist Mittwoch, meine Kerle' : 'Nein'