// FUNCIONES

 // Funcion agregar al carrito

function agregarAlCarrito(id) {
    const productoAgregado = arrayCatalogoPushaeado.find (el => el.id === id)

    /* if (!arrayCarrito.some (el => el.id === id)) {
        arrayCarrito.push (productoAgregado)
        alert (`${productoAgregado.nombre} se han agregado a tu carrito!`);   
    } else {
        arrayCarrito = arrayCarrito.filter (el => el.id !== productoAgregado.id);
        alert("ya tienes ese producto en tu carrito");
    }  */

    if (!arrayCarrito.some (el => el.id === id)) {
        arrayCarrito.push (productoAgregado)
        alert (`${productoAgregado.nombre} se han agregado a tu carrito!`);   
    } else {
       arrayCarrito.find (el => el.id === productoAgregado.id);
       productoAgregado.cantidad = productoAgregado.cantidad + 1;
       alert (`Otro par de ${productoAgregado.nombre} se ha agregado a tu carrito!`); 
    } 
    // hacer alertas con toastify minuto 1:30:00
    // minuto 1:17:00 cambiar nombre boton
}

// Funcion eliminar del carrito

function elminarDelCarrito(id) {
    const productoAgregado = arrayCatalogoPushaeado.find (el => el.id === id)

  /* if (!arrayCarrito.some (el => el.id === id)) {
        alert (`Aun no tienes ${productoAgregado.nombre} en tu carrito!`);   
    } else if ((arrayCarrito.some (el => el.id === id)) && (productoAgregado.cantidad !== 1)) {
       arrayCarrito.find (el => el.id === productoAgregado.id);
       productoAgregado.cantidad = productoAgregado.cantidad - 1;
       alert (`Un par de ${productoAgregado.nombre} se ha eliminado de tu carrito!`); 
    } else {
        arrayCarrito = arrayCarrito.filter (el => el.id !== productoAgregado.id);
        alert(`${productoAgregado.nombre} ha sido eliminado de tu carrito`);
    }  */

    if (!arrayCarrito.some (el => el.id === id)) {
        alert (`Aun no tienes ${productoAgregado.nombre} en tu carrito!`);   
    } else {
       arrayCarrito.find (el => el.id === productoAgregado.id);
       productoAgregado.cantidad = productoAgregado.cantidad - 1;
       alert (`Un par de ${productoAgregado.nombre} se ha eliminado de tu carrito!`); 
    } 

    // hacer alertas con toastify minuto 1:30:00
    // minuto 1:17:00 cambiar nombre boton
}

 //Funcion guardar en local storage

 function guardarEnLocalStorage(params) {
    localStorage.setItem ("CarritoStorage", JSON.stringify(arrayCarrito));
 }


 // Funcion mostrar carrito

 function mostrarCarrito(params) {
    for(productos of arrayCarrito){
        alert ("Tienes en tu carrito " + productos.cantidad + " " + productos.nombre);
}
}


//Funcion Completar Compra

function completarCompra(params) {
    let transaccionCompleta = confirm ("Desear confirmar tu compra?");
    if (transaccionCompleta) {
    alert ("Transaccion completa.\nMuchas gracias por tu compra!");
    arrayCarrito = [];
    localStorage.clear ();
    } else {
    alert ("Tu compra ha sido cancelada");
    }
    }

