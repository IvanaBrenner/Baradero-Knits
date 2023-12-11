// OBJETOS Y ARRAYS

const mediasAngoraMujer = {
    nombre: "Medias Angora Mujer",
    id: 1,
    categoria: "Medias",
    precio: 50,
    color: "beige",
}
const mediasAngoraHombre = {
    nombre: "Medias Angora Hombre",
    id: 2,
    categoria: "Medias",
    precio: 45,
    color: "beige",
}

const mediasAngoraBaby = {
    nombre: "Medias Angora Baby",
    id: 3,
    categoria: "Medias",
    precio: 35,
    color: "beige",
}
 
const arrayCatalogo = [mediasAngoraMujer, mediasAngoraHombre, mediasAngoraBaby];
const arrayCarrito = [];

// FUNCIONES

/* Funcion Mostrar Catalogo*/
function mostrarCatalogo(params) {
    
    for(productos of arrayCatalogo){
        alert ("Te ofrecemos " + productos.nombre + " a $" + productos.precio);
    }
}

/* Funcion Add to Cart*/
function addToCart(params) {
    let chosenProduct = parseInt (prompt ("Elige un producto"));

    switch (chosenProduct) {
        case 1:
            arrayCarrito.push (arrayCatalogo[chosenProduct - 1]);
        //pushear producto a arrayCarrito
            alert ("Medias Angora Mujer se han agregado a tu carrito!");
            break;
        case 2:
            arrayCarrito.push (arrayCatalogo[chosenProduct - 1]);
            //pushear producto a arrayCarrito
            alert ("Medias Angora Hombre se han agregado a tu carrito!");
            break;    
        case 3:
            arrayCarrito.push (arrayCatalogo[chosenProduct - 1]);
            //pushear producto a arrayCarrito
            alert ("Medias Angora Baby se ha agregado a tu carrito!");
            break;
        default:
            alert ("Sigue mirando otros productos!")
            break;
    }
 }

/* Funcion Mostrar Carrito*/ 
function mostrarCarrito(params) {
    for(productos of arrayCarrito){
        alert ("Tienes en tu carrito " + productos.nombre);
    }

}
/* Funcion Sumar*/
let total;
function sumarTotalCompra(params) {
    total = 0;
    for (const productos of arrayCarrito) {
        total = total + productos.precio;
    }
} 
/* Funcion Mostrar total*/
function mostrarTotalCompra(params) {
    alert ("El total de tu compra es $" + total);
}



// INICIO
do {
    opcionElegida = parseInt (prompt ("Bienvenidx a Baradero Knits!\n Por favor selecciona una de las siguientes opciones:\n 1) Ver nuestro catalogo \n 2) Agregar un producto a tu carrito \n 3) Ver tu carrito \n 4) Checkout \n \n Para salir ingresa 0"))
    switch (opcionElegida) {
        case 0:
            // SALIR
            alert ("Gracias por visitar Baradero Knits, te esperamos de nuevo pronto!");
            break;

        case 1:
            // 1 - MOSTRAR CATALOGO AL USUARIO
            mostrarCatalogo ();
            break;

        case 2:
            // 2 - AGREGAR PRODUCTO AL CARRITO
            alert ("Para agregar un producto a tu carrito ingresa: \n 1 para Medias Angora Mujer \n 2 para Medias Angora Hombre \n 3 para Medias Angora Baby");
            addToCart ();
            break;

        case 3:
            // 3 - GO TO CART (MOSTRAR CARRITO)
            mostrarCarrito ();
            break; 
            
        case 4:
            // 4 - CHECKOUT
            sumarTotalCompra ();
            mostrarTotalCompra ();
            // 4b - REALIZAR LA TRANSACCION
            let transaccionCompleta = confirm ("Desear confirmar tu compra?");
            if (transaccionCompleta) {
                alert ("Transaccion completa.\nMuchas gracias por tu compra!")
            } else {
                alert ("Tu compra ha sido cancelada");
            } 
            break;
    
        default:
            alert ("La opcion que ingresaste no es valida. Por favor ingresa una opcion valida")
            break;
    }
    
} while (opcionElegida !== 0);



