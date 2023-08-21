// window.addEventListener("load", () => {
//   alert("Assine nossos termos de uso!");
// });

window.addEventListener("beforeunload", (e) => {
  e.returnValue = null;
});
