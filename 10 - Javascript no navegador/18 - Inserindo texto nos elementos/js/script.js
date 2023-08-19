const text = document.createTextNode("Esse texto foi criado usando DOM.");
const paragraph = document.getElementById("paragraph-by-dom");

paragraph.appendChild(text);
