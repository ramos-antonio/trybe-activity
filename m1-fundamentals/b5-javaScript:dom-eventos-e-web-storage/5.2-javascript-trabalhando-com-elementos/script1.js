
//1-Acesse o elemento elementoOndeVoceEsta.
const primeiro = document.getElementById("elementoOndeVoceEsta");
// console.log(primeiro);

//2-Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
primeiro.parentNode.style.color = "red";

//3-Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const terceiro = document.getElementById("primeiroFilho");
terceiro.innerText = "Cuidado!"

//4-Acesse o primeiroFilho a partir de pai.
const quarto = document.getElementById("pai").firstElementChild;
// console.log(quarto);

//5-Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const quinto = document.getElementById("elementoOndeVoceEsta").previousElementSibling;
// console.log(quinto);

//6-Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const sexto = document.getElementById("elementoOndeVoceEsta").nextSibling;
// console.log(sexto);

//7-Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const setimo = document.getElementById("elementoOndeVoceEsta").nextElementSibling;
// console.log(setimo);

//8-Agora acesse o terceiroFilho a partir de pai.
const oitavo = document.getElementById("pai").firstElementChild.nextElementSibling.nextElementSibling;
// console.log(oitavo);

//1-Crie um irmão para elementoOndeVoceEsta.
const primeiro2 = document.getElementById("pai");
// console.log(primeiro2);
const primeiro22 = document.createElement("section");
primeiro22.id = "irmaoElementoOndeVoceEsta"
primeiro2.appendChild(primeiro22);
// console.log(primeiro22);

//2-Crie um filho para elementoOndeVoceEsta.
const segundo2 = document.getElementById("elementoOndeVoceEsta");
// console.log(segundo2);
const segundo22 = document.createElement("section");
segundo22.id = "terceiroFilhoDoFilho"
segundo2.appendChild(segundo22);
// console.log(segundo22);

//3-Crie um filho para primeiroFilhoDoFilho.
const terceiro2 = document.getElementById("primeiroFilhoDoFilho");
// console.log(terceiro2);
const terceiro22 = document.createElement("section");
terceiro22.id = "primeiroFilhoDoFilhoDoFilho"
terceiro2.appendChild(terceiro22);
// console.log(terceiro22);

//4-A partir desse filho criado, acesse terceiroFilho.
const quarto2 = document.getElementById("primeiroFilhoDoFilhoDoFilho").parentElement.parentElement.nextElementSibling;
// console.log(quarto2);
