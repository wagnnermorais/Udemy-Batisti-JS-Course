const validaEmail = /\w+@\w+\.\w+/;

console.log(validaEmail.test("wagnermoraiscnt@gmail.com"));
console.log(validaEmail.test("wagnermoraiscnt@gmail"));
console.log(validaEmail.test("wagnermoraiscntgmail.com"));
