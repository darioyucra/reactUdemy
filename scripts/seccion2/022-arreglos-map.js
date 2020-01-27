//arreglos y .map

/*carrito = ['producto 1', 'product 2', 'producto 3'];

carrito.map(producto => {
    return 'El producto es ' + producto;
});*/

/*const appContenedor = document.querySelector('#app');

let html = '';
carrito.forEach(producto => {
    html+= `<li>${producto}</li>`;
})

appContenedor.innerHTML = html;*/

const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador web',
    edad: 500
}
console.log(Object.keys(persona));