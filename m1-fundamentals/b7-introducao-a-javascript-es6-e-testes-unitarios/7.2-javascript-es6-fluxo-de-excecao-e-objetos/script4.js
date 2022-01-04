//------------------------------------Objetos: Parte IV - Object.entries------------------------------------//

//Outro método muito útil para se trabalhar com objetos é o Object.entries . Um pouco diferente dos métodos apresentados anteriormente, este retorna um array cujos elementos são também arrays para cada conjunto chave e valor do objeto. Ficou confuso? Não se preocupe, vamos ao nosso exemplo e ver qual seria a saída:
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};
console.log(Object.entries(coolestTvShow));
//Como você pode perceber, ao aplicar o Object.entries no nosso objeto, o retorno foi um array de arrays. Onde a primeira entrada de cada array é a chave do objeto em formato de string, e, o segundo valor é seu respectivo valor, que pode ser uma string ou outro tipo de dado, como por exemplo o número de temporadas do exemplo que é um number.

//Que tal analisarmos mais um exemplo? Então bora lá:
const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

//Para ver os valores separadamente, adicione o for abaixo ao código anterior e execute-o novamente.
for(index in pairKeyValue) {
  console.log(`--------`);
  console.log(`País: ${pairKeyValue[index][0]}`);
  console.log(`Capital: ${pairKeyValue[index][1]}`);
};
