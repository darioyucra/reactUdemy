// sprear operator ...
let lenguajes = ['Javascript', 'PHP', 'Python'];
let frameworks = ['ReactJS', 'Laravel', 'Django'];

//unir los arreglos en uno solo

//let combinacion = lenguajes.concat(frameworks);
let combinacion = [...lenguajes, ...frameworks];
console.log(combinacion);