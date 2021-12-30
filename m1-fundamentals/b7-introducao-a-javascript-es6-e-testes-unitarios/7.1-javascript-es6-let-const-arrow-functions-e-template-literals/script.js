// function userInfo() {
//   let userEmail = 'maria@email.com';
//   // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//   // console.log(userEmail);
// }
// userInfo();
// // console.log(userEmail);


if (true) {
  // inicio do escopo do if
  const userAge = "20";
  // console.log(userAge); // 20
  // fim do escopo do if
}
// console.log(userAge); // 20

var userName = "Isabella";
var userName = "Lucas";
// console.log(userName); // Resultado: Lucas

const favoriteLanguage = "Javascript";
// favoriteLanguage = "Python";
// console.log(favoriteLanguage); // Erro

let favoriteTechnology = "Machine learning";
favoriteTechnology = "Facial recognition";
// console.log(favoriteTechnology); // Facial recognition

//Mas quando usamos o const para criar um objeto, o Javascript nos permite alterar as suas propriedades sem, contudo, reatribuir um novo objeto. Acompanhe o exemplo abaixo para entender melhor como funciona:
const userInfo = {
  name: "Cláudio",
  id: "5489-2",
  email: "claudio@email.com"
};
userInfo.name = "João"
console.log(userInfo) // { name: "João", id: "5483-2", email: "claudio@email.com }

//Esse raciocínio também se aplica a um array. Podemos alterá-lo indiretamente adicionando/removendo um novo item sem sobrescrever o que já foi declarado:
const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro