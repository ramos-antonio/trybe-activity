//------------------ Parte III - arrow functions ------------------//

//Você já está craque em declarar funções em JavaScript utilizando a seguinte sintaxe:
function printName1 () {
  const myName1 = "Lucas";
  return myName1;
}
console.log(printName1());

// ou //

const printName = function () {
  const myName = "Lucas";
  return myName;
}
console.log(printName());
//As duas funções são a mesma coisa, só que escritsa de formas diferentes

//Veja abaixo como ficaria a função printName utilizando a sintaxe da arrow function:
const printName = () => {
  const myName = "Lucas";
  return myName;
}
console.log(printName());
//Quando não há nada no corpo da função além do que será retornado, a sintaxe da arrow function nos permite simplificar ainda mais a função printName omitindo o return e as chaves:
const printName = () => "Lucas";
console.log(printName());

//Mas lembre-se que podemos omitir os parênteses apenas em um cenário:
//Quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

//Em funções que recebem mais de um parâmetro, os parênteses não são omitidos:
const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));
