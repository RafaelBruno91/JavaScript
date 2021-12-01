const todos = [
    {
        id: 1,
        description: "Estudar programação",
        isCompleted: false,
    },
    {
        id: 2,
        description: "Ler",
        isCompleted: true,
    },
    {
        id: 3,
        description: "Exercícios",
        isCompleted: true,
    },
];


//sempre quando a gnt mandar algo para um servidor usar JSON.stringify pois o servidor nao lê JavaScript puro.
const todosJSON = JSON.stringify(todos);
const todosList = JSON.parse(todosJSON);

//formato JSON, parece uma lista mas não é.
console.log (todosJSON);

console.log (todosList);