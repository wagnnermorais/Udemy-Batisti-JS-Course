let newHeading = document.createElement("h3");
let newParagraph = document.createElement("p");
let headingText = document.createTextNode("Esse título foi criado com DOM.");
let paragraphText = document.createTextNode(
  "Esse parágrafo foi criado com DOM e ele serve para informar que o src da imagem foi alterado também por DOM."
);
let el = document.querySelector(".box-image");
let container = document.querySelector(".second-image-box");

newHeading.appendChild(headingText);
newParagraph.appendChild(paragraphText);

container.insertBefore(newHeading, el);
container.insertBefore(newParagraph, el);

let url = document.querySelector(".box-image");

url.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1691935665140-a488297c52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
);
