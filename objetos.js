const pessoa = {
    primeiroNome: "Rafael", 
    ultimoNome: "Bruno", 
    idade: "30", 
    hobbies: ["Assistir Animes", "Comer", "Socializar"],
    animal: {
        nome: "Spike", 
        tipo: "Cachorro",
        raça: "Pitbull",
        idade: 7,
    },
};

//const primeiroNome = pessoa.primeiroNome;
//const ultimoNome = pessoa.ultimoNome;
//const idade = pessoa.idade;
//const hobbies = pessoa.hobbies;

// faz a mesma coisauqe acima. array[lista]
const {primeiroNome, ultimoNome, idade, hobbies} = pessoa;

console.log(primeiroNome);
console.log(ultimoNome);
console.log(idade);
console.log(hobbies);

console.log(pessoa.animal);