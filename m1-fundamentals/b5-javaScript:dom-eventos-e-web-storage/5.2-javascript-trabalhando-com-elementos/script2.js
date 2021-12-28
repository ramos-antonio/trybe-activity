//O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript, o qual deve ser inserido entre as tags <script> e </script>.
//Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:

//1-Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
const createTagH1 = document.createElement("h1");
createTagH1.innerText = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(createTagH1)
console.log(createTagH1);

//2-Adicione a tag main com a classe main-content como filho da tag body;
const createTagMain = document.createElement("main");
createTagMain.className = "main-content"
document.body.appendChild(createTagMain);
console.log(createTagMain);

//3-Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const createTagSection = document.createElement("section");
createTagSection.className = "center-content";
createTagMain.appendChild(createTagSection);
console.log(createTagSection);

//4-Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const createTagP = document.createElement("p");
createTagP.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia perferendis debitis, error, iure officiis excepturi ut cumque."
createTagSection.appendChild(createTagP);
console.log(createTagP);

//5-Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const createTagSection1 = document.createElement("section");
createTagSection1.className = "left-content";
createTagMain.appendChild(createTagSection1);
console.log(createTagSection1);

//6-Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const createTagSection2 = document.createElement("section");
createTagSection2.className = "right-content";
createTagMain.appendChild(createTagSection2);
console.log(createTagSection2);

//7-Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const createImg = document.createElement("img");
createImg.src = "https://picsum.photos/200";
createImg.className = "small-image";
createTagSection1.appendChild(createImg);
console.log(createImg);

//8-Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const createULlist = document.createElement("ul");
createTagSection2.appendChild(createULlist);
const array = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (const key in array) {
  const createLIlist = document.createElement("li");
  createLIlist.innerText = array[key];
  createULlist.appendChild(createLIlist);
}

//9-Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let index = 1; index <= 3; index += 1) {
  const createTagH3 = document.createElement("h3");
  createTagH3.innerText = `Show ${index}`;
  createTagSection.appendChild(createTagH3);
}

//Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

//10-Adicione a classe title na tag h1 criada;
createTagH1.className = "title";

//11-Adicione a classe description nas 3 tags h3 criadas;
const elementsH3 = document.getElementsByTagName("h3");
for (let index = 0; index < 3; index += 1) {
  elementsH3[index].className = 'description';
}

//12-Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
const removeTagSection1 = document.getElementsByClassName('left-content')[0];
createTagMain.removeChild(removeTagSection1);

//13-Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
const centralizarTagSection2 = document.getElementsByClassName('right-content')[0];
centralizarTagSection2.style.marginRight = "auto";

//14-Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
const mudarCorTagSection = document.getElementsByClassName('center-content')[0];
mudarCorTagSection.parentNode.style.backgroundColor = 'green';

//15-Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
const removeLIlist = document.querySelectorAll("li");
for (let index = 0; index < removeLIlist.length; index += 1) {
  let element = removeLIlist[index]
  if (element.innerText.includes("Nove") || element.innerText.includes("Dez")) {
    createULlist.removeChild(element)
  }
}