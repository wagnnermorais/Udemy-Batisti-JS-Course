let a = document.querySelector("#link");

a.addEventListener("click", (event) => {
  event.preventDefault();
  a.innerHTML = "Ou não.";
});
