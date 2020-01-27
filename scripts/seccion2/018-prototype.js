const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador web',
    edad: 500
}
//console.log(persona);

/*const mostrarCliente = mostrarInformacionTarea(persona.nombre, persona.profesion);
console.log(mostrarCliente);*/

//constructor
function Tarea(nombre,urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

//Agregar un protype a tarea
Tarea.prototype.mostrarInformacionTarea = function (){
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

const tarea1 = new Tarea('aprender js y react', 'Urgente');
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());

