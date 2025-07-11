function showInfo(label, value) {
  document.getElementById("infoText").innerText = `${label}: ${value}`;
  document.getElementById("popup").style.display = "flex";
}

function showQRIS() {
  document.getElementById("qrisPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("qrisPopup").style.display = "none";
}

function copyText() {
  const text = document.getElementById("infoText").innerText.split(": ")[1];
  navigator.clipboard.writeText(text).then(() => {
    alert("Disalin: " + text);
  });
}