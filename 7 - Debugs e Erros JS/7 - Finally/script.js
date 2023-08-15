// Finally é executado independente do resultado do Try/Catch
// Pode exisir com Try/Catch ou apenas com Try

let b = 2;

try {
  let c = 2 + b;
  console.log(c);
} catch (error) {
  console.log(`Algo deu errado: ${error}`);
} finally {
  console.log("Executou!");
}
