//Exercícios
//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
let fatorial = 1;
for (let index = 1; index <= 10; index += 1) {
  fatorial = fatorial * index;
}
console.log(fatorial);

//2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
/*
Minha tentativa de resolver a questão.
let word = 'tryber';
for (const letra of word) {
  console.log(letra);
}
*/
let word = 'tryber';
let reverseWord = '';
for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}
console.log(reverseWord);

//Outra solução possível:

let word1 = 'tryber';
let reverseWord1 = '';

reverseWord1 = word1.split('').reverse().join('');

console.log(reverseWord1);

//3- Considere o array de strings abaixo:
//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];
let smallestWord = array[0];
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}
console.log(biggestWord);
console.log(smallestWord);

//4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let biggestPrimeNumber = 0;
for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}
console.log(biggestPrimeNumber);

// Exercício Bônus
//1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
let n = 5;
let symbol = '*';
let inputLine = '';
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};

//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
let size = 5;
let symbol1 = '*';
let inputLine1 = '';
for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  console.log(inputLine1);
  inputLine1 = inputLine1 + symbol1;
};

//3- Agora inverta o lado do triângulo. Por exemplo:
let n2 = 5;
let symbol2 = '*';
let inputLine2 = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine2 = inputLine2 + ' ';
    } else {
      inputLine2 = inputLine2 + symbol2;
    }
  }
  console.log(inputLine2);
  inputLine2 = '';
  inputPosition -= 1;
};

//4- Depois, faça uma pirâmide com n asteriscos de base:

let n3 = 5;
let symbol3 = '*';
let inputLine3 = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine3 = inputLine3 + symbol3;
    } else {
      inputLine3 = inputLine3 + ' ';
    }
  }
  console.log(inputLine3);
  inputLine3 = '';
  controlRight += 1;
  controlLeft -= 1
};

//5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
let n4 = 7;
let middle = (n + 1) / 2;
let controlLeft2 = middle;
let controlRight2 = middle;
let symbol4 = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft2 || col == controlRight2 || line == middle) {
      outputLine += symbol4;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft2 -= 1;
  controlRight2 += 1;
  console.log(outputLine);
}

//6- Faça um programa que diz se um número definido numa variável é primo ou não.
//Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
//Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
let divisors = 1;
let numberToCheck = 31;
for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}
if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');
