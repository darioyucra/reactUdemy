// Destructuring de objetos
//como extraer valores de un objeto

const aprendiendoJS = {
    version: {
        nueva: 'ES6',
        anterior: 'ES5'
    },
    frameworks: ['React', 'VueJS', 'AngularJS']
}

// Destructuring es extraer valores de un objeto

//console.log(aprendiendoJS);

//version anterior
/*let version = aprendiendoJS.version.nueva;
let framework = aprendiendoJS.frameworks[1]*/


//destructuring forma nueva
let {nueva} = aprendiendoJS.version;
console.log(nueva);