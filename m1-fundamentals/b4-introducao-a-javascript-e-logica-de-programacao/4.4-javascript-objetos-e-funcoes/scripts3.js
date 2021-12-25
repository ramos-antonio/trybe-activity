//1-Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// const a = 4;
// const b = 2;
function soma(a, b) {
  return a + b;
}
console.log(`Adição (a + b) = ${soma(4, 2)}`);

function subtracao(a, b) {
  return a - b;
}
console.log(`Subtração (a - b) = ${subtracao(4, 2)}`);

function multiplicacao(a, b) {
  return a * b;
}
console.log(`Multiplicação (a * b) = ${multiplicacao(4, 2)}`);

function divisao(a, b) {
  return a / b;
}
console.log(`Divisão (a / b) = ${divisao(4, 2)}`);

function modulo(a, b) {
  return a % b;
}
console.log(`Módulo (a % b) = ${modulo(4, 2)}`);


//2-Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
function maiorNum(c, d) {
  if (c > d) {
    console.log(`Valor de "c = ${c}" é maior que o valor de "d = ${d}"`);
  } else {
    console.log(`Valor de "c = ${c}" é menor que o valor de "d = ${d}"`);
  }
}
maiorNum(10, 3)


//3-Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
function maiorDeTres(e, f, g) {
  if (e > f && e > g) {
    console.log(`Valor de "e = ${e}" é maior que o valor de "f = ${f}" e "g = ${g}`);
  } else if (f > e && f > g) {
    console.log(`Valor de "f = ${f}" é maior que o valor de "e = ${e}" e "g = ${g}`);
  } else {
    console.log(`Valor de "g = ${g}" é maior que o valor de "e = ${e}" e "f = ${f}`);
  }
}
maiorDeTres(10, 5, 20)

//4-Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
function positivoNegativo(h) {
  if (h > 0) {
    console.log(`Valor de "h = ${h}" é Positivo`);
  } else if (h < 0) {
    console.log(`Valor de "h = ${h}" é Negativo`);
  } else {
    console.log(`Valor de "h = ${h}" é Zero`);
  }
}
positivoNegativo(0)

// //5-Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
function validadorDeTriangulo(anguloLadoA, anguloLadoB, anguloLadoC) {
  if ((anguloLadoA + anguloLadoB + anguloLadoC) === 180 && anguloLadoA > 0 && anguloLadoB > 0 && anguloLadoC > 0) {
    console.log(true);
  } else if (anguloLadoA <= 0 || anguloLadoB <= 0 || anguloLadoC <= 0) {
    console.log("erro");
  } else {
    console.log(false);
  }
}
validadorDeTriangulo(60, 60, 60)