// // Operadores and (&&) e or (||)
// and: E 
// or: ou, senão, quando não

const soma1 = 5 + 5;
const soma2 = 5 + 4;

//true: verdadeiro
if (soma1 === 10 && soma2 === 9) {
    console.log("Soma1 é 10 e soma2 é 9!")
}

if (soma1 === 10 || soma2 === 9) {
    console.log("Soma1 é 10 e soma2 é 9!")
}


let numero = soma1 === 10 ? 10 : 8;
console.log(numero);