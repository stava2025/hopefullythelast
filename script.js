
function openPopup(type) {
  const popup = document.getElementById('popup');
  const text = document.getElementById('popup-text');
  popup.style.display = 'flex';
  if (type === 'impressum') {
    text.innerHTML = '<h3>Impressum</h3><p>STAVA Consultings<br>Musterstraße 1, 12345 Musterstadt<br>kontakt@stava.de</p>';
  } else if (type === 'datenschutz') {
    text.innerHTML = '<h3>Datenschutz</h3><p>Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.</p>';
  } else if (type === 'agb') {
    text.innerHTML = '<h3>AGB</h3><p>Unsere allgemeinen Geschäftsbedingungen gelten für alle Dienstleistungen.</p>';
  }
}
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
