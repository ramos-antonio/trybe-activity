//------------------------------------Objetos: Parte II - Object.keys------------------------------------//

//Dê uma olhada no exemplo a seguir e pense como você poderia listar as chaves desse objeto:
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6
};
for (const key in coolestTvShow) {
  console.log(key);
}

//Mas e se dissermos que há uma maneira mais robusta de trabalhar com objetos e seus valores? O método Object.keys como o próprio nome diz, é utilizado para listar as chaves de um objeto, retornando-as em um array. Cada entrada do array retornado será uma string com o valor de cada chave do objeto. Fantástico não é mesmo? Vamos ver como ficaria nosso exemplo utilizando este método:
const coolestTvShow1 = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};
console.log(Object.keys(coolestTvShow1));

//Após a leitura, veja mais um exemplo de aplicação do Object.keys . Nesse exemplo estão listadas as habilidades de uma pessoa desenvolvedora.
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

//Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução.
const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);
