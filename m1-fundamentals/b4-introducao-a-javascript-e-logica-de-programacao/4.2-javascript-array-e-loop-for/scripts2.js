//O For/of nos permite criar loops em objetos iteráveis como strings, arrays, entre outros.

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}
// resultado: 
//1
//2
//3
//4
//5
//Simples, certo? O laço for/of permite iterar os valores das propriedades, nos retornando os números dentro do array numeros.

let palavra = 'Hello';
for (let letra of palavra) {
  console.log(letra);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"
//O laço for/of permite iterar os valores das propriedades, nos retornando os elementos de uma string.

let arrOfNumbers = [10, 20, 30];
for (let soma of arrOfNumbers) {
  soma += 1;
  console.log(soma);
}
// 11
// 21
// 31
//Por fim, com o for/of , nós conseguimos somar um valor a cada elemento do array e retorná-los.
//É importante ressaltar que o for/of não irá alterar o array, e sim trazer os valores de dentro, e no caso, adicionando 1 à soma.
console.log(arrOfNumbers);
// Resultado: [10, 20, 30]

//---------------------------------------------------------------------------------------------------------------//
//Exercício 1 - Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names) {
  console.log(name);
}
