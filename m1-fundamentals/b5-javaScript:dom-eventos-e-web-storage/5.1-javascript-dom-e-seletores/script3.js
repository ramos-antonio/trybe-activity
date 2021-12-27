/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie uma função que mude a cor do quadrado vermelho para branco.
4. Crie uma função que corrija o texto da tag <h1>.
5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

//1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
const tag = document.getElementsByTagName("p");
// console.log(tag);
// console.log(tag[0]);
function mudarTexto(tag) {
  for (let index = 0; index < tag.length; index += 1)
  tag[index].innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing."
}
mudarTexto(tag);

//2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
const square = document.getElementsByClassName("main-content")
// console.log(square);
function mudarDeCor(square) {
  return square[0].style.backgroundColor = "rgb(76,164,109)";
}
mudarDeCor(square);

//3. Crie uma função que mude a cor do quadrado vermelho para branco.
const square1 = document.getElementsByClassName("center-content")
// console.log(square1);
function mudarDeCor1(square1) {
  return square1[0].style.backgroundColor = "white";
}
mudarDeCor1(square1);

// 4. Crie uma função que corrija o texto da tag <h1>.
const h1 = document.querySelector('h1');
// console.log(h1);
function corrigirH1(h1) {
  return h1.innerText = "Exercício 5.1 - JavaScript"
}
corrigirH1(h1);

// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
// const tag1 = document.getElementsByTagName("p");
// console.log(tag1);
// function paragraphUpperCase(tag1) {
//   for (let index = 0; index < tag1.length; index += 1)
//   return tag1[index].innerHTML = tag1.innerHTML.toUpperCase();
// }
// paragraphUpperCase(tag1);

    // Exercício 5
    function paragraphUpperCase() {
      let paragraph = document.getElementsByTagName('p')[0];
      paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
    }
    paragraphUpperCase();

    // Exercício 6
    function showParagraphs() {
      let paragraphs = document.getElementsByTagName('p');
      for (let index = 0; index < paragraphs.length; index += 1) {
        console.log(paragraphs[index].innerHTML);
      }
    }
    showParagraphs();
    