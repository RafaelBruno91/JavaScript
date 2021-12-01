//Strings
const firstName = 'Rafael';
const lastName = 'Bruno';

const names = "Rafael,Gabriel,Miguel";

console.log(`Meu nome é ${firstName} ${lastName}`);
console.log(names.split(","));

//variaveis: const, let. LET: a gnt consegue reassinalar a variavel, vc consegue modificar no futuro.//

//.map cria uma nova lista
// return retorna a lista fazendo um loop
const numbers = [1, 2, 3, 4, 5];
const numberMultiplieByTwo = numbers.map(function(number) {
    return number * 2;
});

console.log(numberMultiplieByTwo);


//.filter ele filtra os itens da lista
const idades = [5, 8, 15, 17, 21, 24, 33, 36];
const mesmaIdade = idades.filter(function(idade){
    return idade % 2 === 0
});

console.log(mesmaIdade);

//.reduce ele e ultil para reduzir todos os valores da lista pra 1(um)
const novasIdades = [3, 4, 13, 16, 22, 28, 35, 39];
const somaDasNovasIdades = novasIdades.reduce(function(novasIdades, acumular){
    return acumular + novasIdades;
}, 0);

console.log(somaDasNovasIdades);