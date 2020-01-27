// Promises

const aplicarDEscuento = new Promise((resolve, reject) => {
    setTimeout( () => {
        let descuento = true;
        
        if(descuento) {
            resolve('Descuento aplicado');
        } else {
            reject('No se pudo aplicar descuento');
        }
    }, 3000);
});

aplicarDEscuento.then(resultado => {
    console.log(resultado);
});