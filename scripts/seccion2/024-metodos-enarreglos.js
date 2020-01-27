const personas = [
    {nombre: 'Juan', edad: 23, aprendiendo: 'Javascript'},
    {nombre: 'Pablo', edad: 25, aprendiendo: 'PHP'},
    {nombre: 'Alejandra', edad: 28, aprendiendo: 'Adobe xd'},
    {nombre: 'Karen', edad: 30, aprendiendo: 'Python'},
    {nombre: 'Miguel', edad: 40, aprendiendo: 'ReactJS'}
]
console.log(personas);

//mayores de 28 años

const mayores = personas.filter(persona => {
    return persona.edad > 28;
});

//console.log(mayores);

//que aprende alejandra y su edad

const alejandra = personas.find(persona => {
    return persona.nombre === 'Alejandra';
});
//console.log('Alejandra esta aprendiendo: ' + alejandra.aprendiendo);

let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);
console.log(total);