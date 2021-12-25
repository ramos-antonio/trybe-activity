//Exemplo de FOR IN dentro de objeto:
let pizzas = {
  sabor: 'Palmito',
  preco: 39.90,
  borda: true,
}

for (const key in pizzas) {
  console.log(key);
}

for (const key in pizzas) {
  console.log(pizzas);
}

for (const key in pizzas) {
  console.log(pizzas.preco);
}

for (const key in pizzas) {
  console.log(pizzas['borda']);
}

for (const key in pizzas) {
  console.log(pizzas[key]);
}

for (const key in pizzas) {
  console.log(key, pizzas[key]);
}

//Exemplo de FOR IN dentro de array:
let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (const key in pizzasDoces) {
  console.log(key);
}

for (const key in pizzasDoces) {
  console.log(pizzasDoces);
}

for (const key in pizzasDoces) {
  console.log(pizzasDoces[key]);
}

for (const key in pizzasDoces) {
  console.log(key, pizzasDoces[key]);
}

//1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};
for (const key in names) {
  console.log(`Olá ${names[key]}`);
}

//2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for (key in car) {
  console.log(key, car[key]);
}
