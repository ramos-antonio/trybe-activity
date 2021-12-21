//----------------------------Operadores lógicos AND(&&), OR(||), NOT(!)----------------------------//

//Operador AND(&&) - Esse operador precisa que todas uma condição sejam verdadeiras.

const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;
console.log(listaDeCompras);
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

//Exercício
const currentHour = 3;
let message;
if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
}
else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour > 11 && currentHour < 14) {
  message = "Hora do almoço!!!";
}
else if (currentHour > 11 && currentHour < 14) {
  message = "Hora do almoço!!!";
}
else if (currentHour > 4 && currentHour < 11) {
  message = "Hmmm, cheiro de café recém passado";
}
console.log(message);
//---------------------------------------------------------------------------------------------------------------//

//Operador OR(||) - Esse operador precisa que pelomenos uma condição seja verdadeira.

const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

//Exercício
let weekDay = "sexta-feira";
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
  console.log("FINALMENTE, descanso merecido UwU");
}

//---------------------------------------------------------------------------------------------------------------//

//Operador NOT(!)

console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);

//Podemos usar em:
//Strings...
const squirtle = "melhor pokemon inicial";
console.log(!squirtle); // false

//Números...
console.log(!42); // false
console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

//Valores nulos...
console.log(!null); // true

//Valores indefinidos...
console.log(!undefined); // true
