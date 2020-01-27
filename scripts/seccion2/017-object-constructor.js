const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador web',
    edad: 500
}
console.log(persona);

//object constructor

function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

//crear una nueva tarea:

const tarea1 = new Tarea('aprender js y react', 'Urgente');

const tarea2 = new Tarea('preparar cafe', 'Urgente');

const tarea3 = new Tarea('pasear al perro', 'medio');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);