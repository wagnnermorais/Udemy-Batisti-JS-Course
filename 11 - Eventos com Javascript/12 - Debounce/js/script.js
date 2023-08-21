let timeout;

window.addEventListener("mousemove", (event) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    console.log(`O eixo x é: ${event.x}`);
    console.log(`O eixo y é: ${event.y}`);
  }, 500);
});
