//1-Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
const a = 4;
const b = 2;

console.log(`Adição (a + b) = ${a + b}`);
console.log(`Subtração (a - b) = ${a - b}`);
console.log(`Multiplicação (a * b) = ${a * b}`);
console.log(`Divisão (a / b) = ${a / b}`);
console.log(`Módulo (a % b) = ${a % b}`);

//2-Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const c = 5;
const d = 3;
if (c > d) {
  console.log(`Valor de "c = ${c}" é maior que o valor de "d = ${d}"`);
} else {
  console.log(`Valor de "c = ${c}" é menor que o valor de "d = ${d}"`);
}

//3-Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const e = 6;
const f = 4;
const g = 3;
if (e > f && e > g) {
  console.log(`Valor de "e = ${e}" é maior que o valor de "f = ${f}" e "g = ${g}`);
} else if (f > e && f > g) {
  console.log(`Valor de "f = ${f}" é maior que o valor de "e = ${e}" e "g = ${g}`);
} else {
  console.log(`Valor de "g = ${g}" é maior que o valor de "e = ${e}" e "f = ${f}`);
}

//4-Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const h = 0;
if (h > 0) {
  console.log(`Valor de "h = ${h}" é Positivo`);
} else if (h < 0) {
  console.log(`Valor de "h = ${h}" é Negativo`);
} else {
  console.log(`Valor de "h = ${h}" é Zero`);
}

//5-Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const anguloLadoA = 60;
const anguloLadoB = 60;
const anguloLadoC = 60;
const somaDosLados = anguloLadoA + anguloLadoB + anguloLadoC

if ((anguloLadoA + anguloLadoB + anguloLadoC) === 180 && anguloLadoA > 0 && anguloLadoB > 0 && anguloLadoC > 0) {
  console.log(true);
} else if (anguloLadoA <= 0 || anguloLadoB <= 0 || anguloLadoC <= 0) {
  console.log("erro");
} else {
  console.log(false);
}

//6-Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. ==> Para isso usa-se o ---- toLowerCase ---- 
const chessPiece = 'bIspo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

//7-Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
const nota = 100;

if (nota >= 90 && nota <= 100) {
  console.log("A");
} else if (nota >= 80 && nota < 90) {
  console.log("B");
} else if (nota >= 70 && nota < 80) {
  console.log("C");
} else if (nota >= 60 && nota < 70) {
  console.log("D");
} else if (nota >= 50 && nota < 60) {
  console.log("E");
} else if (nota > 100 || nota < 0) {
  console.log("erro");
} else {
  console.log("F");
}

//8-Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.
const i = 2;
const j = 3;
const k = 5;
let par = false;

if ((i % 2 === 0 || j % 2 === 0 || k % 2 === 0)) {
  par = true;
};
console.log(par);

//9-Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// Bonus: use somente um if.
const l = 3;
const m = 6;
const n = 8;
let impar = false;

if ((l % 2 !== 0 || m % 2 !== 0 || n % 2 !== 0)) {
  impar = true;
};
console.log(impar);

//10-Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)
const custoProducao = 500;
const valorVenda = 1500;
const quantidadeVendida = 1000;
const imposto = custoProducao * 0.2;
const valorCustoTotal = custoProducao + imposto
const lucro = (valorVenda - valorCustoTotal) * quantidadeVendida;
console.log(lucro);

//11-Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: valor máxima de R$ 570,88

// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

const salarioBruto = 5000.00;
const salarioBaseINSS = salarioBruto;
let descontoINSS;
let descontoIR;

if (salarioBaseINSS <= 1556.94) {
  descontoINSS = salarioBaseINSS * 0.08;
} else if (salarioBaseINSS <= 2594.92) {
  descontoINSS = grossSalary * 0.09;
} else if (salarioBaseINSS <= 5189.82) {
  descontoINSS = salarioBaseINSS * 0.11;
} else {
  descontoINSS = 570.88;
}

const salarioBaseIR = salarioBaseINSS - descontoINSS;

if (salarioBaseIR <= 1903.98) {
  descontoIR = 0;
} else if (salarioBaseIR <= 2826.65) {
  descontoIR = (salarioBaseIR * 0.075) - 142.80;
} else if (salarioBaseIR <= 3751.05) {
  descontoIR = (salarioBaseIR * 0.15) - 354.80;
} else if (salarioBaseIR <= 4664.68) {
  descontoIR = (salarioBaseIR * 0.225) - 636.13;
} else {
  descontoIR = (salarioBaseIR * 0.275) - 869.36;
};

console.log(`Salário Líquido: ${(salarioBaseIR - descontoIR)}`);
