let moment = require("moment");

let brasilTetra = moment("17071994", "DDMMYYYY");
let fromNow = brasilTetra.fromNow();

console.log('Result do É tetra', fromNow);

/////////////////////////////////////////////////////////

