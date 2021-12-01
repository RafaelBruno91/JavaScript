let index = 0;

//while: enquanto
while (index < 10) {
    console.log('index é menor do que 10!')
    // index = index + 1;
    // index += 1 
    //é a msm coisa que acima
    index++;
};

const pessoa = {
    nome: "Rafael",
    idade: 30,
};

// for in é usado em objetos
for (propriedades in pessoa) {
       console.log(pessoa[propriedades]);
}