// FUNCIONES

 // Funcion agregar al carrito

function agregarAlCarrito(id) {
    const productoAgregado = arrayCatalogoPushaeado.find (el => el.id === id)

    if (!arrayCarrito.some (el => el.id === id)) {
        arrayCarrito.push (productoAgregado);
        Toastify({
            text: `${productoAgregado.nombre} se han agregado a tu carrito!`,
            duration: 3000
            }).showToast();  
    } else {
       arrayCarrito.find (el => el.id === productoAgregado.id);
       productoAgregado.cantidad = productoAgregado.cantidad + 1;
       Toastify({
        text: `Otro par de ${productoAgregado.nombre} se ha agregado a tu carrito!`,
        duration: 3000 
        }).showToast();
    } 
}

// Funcion eliminar del carrito

function elminarDelCarrito(id) {
    const productoAgregado = arrayCatalogoPushaeado.find (el => el.id === id)

    if (!arrayCarrito.some (el => el.id === id)) {
        Toastify({
            text: `Aun no tienes ${productoAgregado.nombre} en tu carrito!`,
            duration: 3000 
            }).showToast();   
    } else if ((arrayCarrito.some (el => el.id === id)) && (productoAgregado.cantidad > 1)) {
       arrayCarrito.find (el => el.id === productoAgregado.id);
       productoAgregado.cantidad = productoAgregado.cantidad - 1;
       Toastify({
        text: `Un par de ${productoAgregado.nombre} se ha eliminado de tu carrito!`,
        duration: 3000
        }).showToast();
    } else {
        arrayCarrito = arrayCarrito.filter (el => el.id !== productoAgregado.id);
        Toastify({
            text: `${productoAgregado.nombre} ha sido eliminado de tu carrito`,
            duration: 3000
            }).showToast();
    }
}

// minuto 1:17:00 cambiar nombre boton


 //Funcion guardar en local storage

 function guardarEnLocalStorage(params) {
    localStorage.setItem ("CarritoStorage", JSON.stringify(arrayCarrito));
 }


 // Funcion mostrar carrito

 function mostrarCarrito() {
    if (arrayCarrito.length > 0) {
        for(productos of arrayCarrito){
            alert ("Tienes en tu carrito " + productos.cantidad + " " + productos.nombre);
    }
    } else {
        Toastify({
            text: "Tu carrito esta vacio!",
            duration: 3000
            }).showToast();
    }
}
 


//Funcion Completar Compra

function completarCompra(params) {
    let transaccionCompleta = confirm ("Desear confirmar tu compra?");
    if (transaccionCompleta) {
        Toastify({

            text: "Transaccion completa.\nMuchas gracias por tu compra!",
            
            duration: 3000
            
            }).showToast();
    arrayCarrito = [];
    localStorage.clear ();
    } else {
        Toastify({
            text: "Tu compra ha sido cancelada",
            duration: 3000
            }).showToast();
    }
    }

