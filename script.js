// Bilgi Kutusunu Gösterme Fonksiyonu
function showInfo(title, shortText, longText, imageUrl) {
    document.getElementById('infoTitle').innerText = title;
    document.getElementById('shortInfo').innerText = shortText;
    document.getElementById('longInfo').innerText = longText;
    document.getElementById('infoImage').src = imageUrl;
    document.getElementById('infoBox').style.display = 'block';
}

// Bilgi Kutusunu Kapatma Fonksiyonu
function closeInfo() {
    document.getElementById('infoBox').style.display = 'none';
}
