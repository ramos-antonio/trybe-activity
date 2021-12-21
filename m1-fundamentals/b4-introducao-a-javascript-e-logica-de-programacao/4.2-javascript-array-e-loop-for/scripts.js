let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);
// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

tasksList.pop();  // remove a última tarefa
console.log(tasksList);
// [ 'Tomar café', 'Reunião' ]

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);
// 1

//---------------------------------------------------------------------------------------------------------------//
//Exercício
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

//1 - Obtenha o valor "Serviços" do array menu:

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = ;
// console.log(menuServices);

let menuServices = menu[1];
console.log(menuServices);

//2 - Procure o índice do valor "Portfólio" do array menu:

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = ;
// console.log(indexOfPortfolio);

let indexOfPortfolio = menu.indexOf('Portfólio');
console.log(indexOfPortfolio);

//3 - Adicione o valor "Contato" no final do array menu:

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// console.log(menu);

menu.push('Contato')
console.log(menu);
