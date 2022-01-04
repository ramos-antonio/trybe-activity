//------------------------------------Objetos: Parte III - Object.values------------------------------------//

//O Object.values segue a mesma lógica que o Object.keys, a diferença está em que ele lista os valores de cada chave. Voltando ao nosso exemplo anterior, como faríamos para listar os valores de cada chave do nosso objeto coolestTvShow? Utilizando o for...in seria algo como:
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};
for (const key in coolestTvShow) {
  console.log(coolestTvShow[key]);
}

//Podemos então refatorar para utilizar o Object.values, nosso código ficaria assim:
const coolestTvShow1 = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};
console.log(Object.values(coolestTvShow1));

//Para fixar melhor veja abaixo mais um exemplo, em que foram implementadas, de formas diferentes, duas funções que retornam a mesma lista de valores. Veja como fica muito mais fácil obter os valores de um objeto com o uso do Object.values.
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsValuesWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));
//Observe como a função listSkillsValuesWithValues é bem mais simples e resolve o problema da listagem de valores de forma mais direta.
