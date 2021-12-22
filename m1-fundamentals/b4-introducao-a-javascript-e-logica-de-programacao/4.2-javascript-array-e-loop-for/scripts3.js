//Exercícios
//Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1-Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

//2-Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let result1 = 0;
for (let index1 = 0; index1 < numbers.length; index1 += 1) {
  result1 += numbers[index1];
}
console.log(result1);

//3-Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
let result2 = 0;
for (let index2 = 0; index2 < numbers.length; index2 += 1) {
  result2 = (result2 + numbers[index2]);
}
let media = result2 / numbers.length;
console.log(media);

//4-Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let result3 = 0;
for (let index3 = 0; index3 < numbers.length; index3 += 1) {
  result3 = (result3 + numbers[index3]);
}
let media1 = result3 / numbers.length;
if (media1 > 20) {
  console.log(`valor maior que 20: ${media1}`);
} else {
  console.log(`valor menor ou igual a 20: ${media1}`);
}

//5-Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1
let maiorNumeroDoArray = numbers[0];
for (let index4 = 1; index4 < numbers.length; index4 += 1) {
  if (numbers[index4] > maiorNumeroDoArray) {
    maiorNumeroDoArray = numbers[index4];
  }
}
console.log(maiorNumeroDoArray);

//6-Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let valoresImpares = 0;
for (let index5 = 0; index5 < numbers.length; index5 += 1) {
  if (numbers[index5] % 2 !== 0) {
    valoresImpares += 1;
  }
}
if (valoresImpares === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(valoresImpares);
}

//7-Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menorNumeroDoArray = numbers[0];
for (let index6 = 1; index6 < numbers.length; index6 += 1) {
  if (numbers[index6] < menorNumeroDoArray) {
    menorNumeroDoArray = numbers[index6];
  }
}
console.log(menorNumeroDoArray);

//8-Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let resultado = [];
for (let index7 = 0; index7 <= 25; index7 += 1) {
  resultado.push(index7);
}
console.log(resultado);

//9-Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
for (let index8 = 0; index8 < resultado.length; index8 += 1) {
  console.log(resultado[index8] / 2);
};

//Bônus
//Para os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo:

//1-Ordene o array numbers em ordem crescente e imprima seus valores;
for (let index9 = 1; index9 < numbers.length; index9 += 1) {
  for (let secondIndex = 0; secondIndex < index9; secondIndex += 1) {
    if (numbers[index9] < numbers[secondIndex]) {
      let position = numbers[index9];
      numbers[index9] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

//2-Ordene o array numbers em ordem decrescente e imprima seus valores;
for (let index9 = 1; index9 < numbers.length; index9 += 1) {
  for (let secondIndex = 0; secondIndex < index9; secondIndex += 1) {
    if (numbers[index9] > numbers[secondIndex]) {
      let position = numbers[index9];
      numbers[index9] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

//3-Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];
for (let index10 = 0; index10 < numbers1.length; index10 += 1) {
  if (index10 + 1 < numbers1.length) {
    newArray.push(numbers1[index10] * numbers1[index10 + 1]);
  } else {
    newArray.push(numbers1[index10] * 2);
  }
}
console.log(newArray);
