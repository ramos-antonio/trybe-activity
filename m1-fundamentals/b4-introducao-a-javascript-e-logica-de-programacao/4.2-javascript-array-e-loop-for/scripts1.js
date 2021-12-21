//Suponha que temos uma lista com marcas de carros:

let cars = ['Saab', 'Volvo', 'BMW'];

//Anteriormente para apresentar esses valores, o código que utilizariamos para executar essa tarefa seria:
console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW

//Mas, agora que conhecemos o for , podemos melhorar o código para algo como:
for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}

//---------------------------------------------------------------------------------------------------------------//
//Exercício
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

//1 - Utilize o for para imprimir os elementos da lista groceryList com o console.log():
for (let i = 0; i < groceryList.length; i += 1) {
  console.log(groceryList[i]);
}
