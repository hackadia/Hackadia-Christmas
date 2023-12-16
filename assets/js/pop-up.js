// script.js
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
});

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function openNotification() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}
