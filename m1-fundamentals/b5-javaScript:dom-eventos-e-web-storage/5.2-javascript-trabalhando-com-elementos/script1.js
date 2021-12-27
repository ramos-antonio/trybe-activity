
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
console.log(oitavo);
