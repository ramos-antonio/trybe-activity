//------------------------------------Throw e Try/Catch------------------------------------//

//Para começar, relembre o conteúdo da aula anterior com este exemplo de arrow function:
const sum = (value1, value2) => value1 + value2;
console.log(sum(2, 3)); // resultado: 5

//Sabemos que pessoas cometem erros e podem, por exemplo, tentar somar o número 2 com a string '3'. O que aconteceria nesse caso?
const sum1 = (value1, value2) => value1 + value2;
console.log(sum1(2, '3')); // resultado: 23

//Vamos adicionar uma condicional que impede a pessoa usuária de quebrar a sua calculadora.
const sum2 = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os valores devem ser numéricos';
  }
  return value1 + value2;
};
console.log(sum2(2, '3')); // resultado: Os valores devem ser numéricos
console.log(sum2(2, 3)); // resultado: 5

//Quando um erro acontece em Javascript, devemos lançar uma exceção, que vai interromper o funcionamento do código. Essa é a função do throw:
const sum3 = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};
console.log(sum3(2, '3'));

//Você programou o código para lançar uma exceção caso aconteceça um erro, mas o fluxo do código ainda pode ser melhorado. Você precisa, por exemplo, capturar esse erro para melhor tratá-lo. É aí que entra o bloco try/catch . Enquanto o try tenta executar o código com sucesso, o catch é chamado caso ocorra um erro. Aproveitando a ocasião, seria uma ótima ideia refatorar a função sum para que ela não tenha funcionalidades demais.
const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
};
const sum4 = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    throw error.message;
  }
};
console.log(sum4(2, '3'));