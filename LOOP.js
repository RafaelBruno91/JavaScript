// for (let index =0; index < 10; index++){
//     console.log(index)
// }

const cores = ["Vermelho", "Azul", "Verde"];
for (let cor of cores){
    console.log (cor);
}

cores.forEach(function(cor, index){
    console.log(cor);
    console.log(index);
});