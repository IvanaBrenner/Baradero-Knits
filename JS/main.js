//DOM

// Body
// Header
header.innerHTML = `
<h1>Baradero Knits</h1>
<div>
    <p> Lorem asbdalsbdwukbchjsbchsbcsbcsjhdbcsjhcbsjbdcjhsdbsjkdcbsdhjcbsjchdb </p>
</div>    
`

divPrueba.innerHTML = "Hola";
// inner html con plantillas literales en minuto 0:23
//cambiar la clase desde JS en 0:32
// for ech min 38
// appenchild y crear elementos minudo 43:41
// appenchild con objetos minuto 50
// variable flag minuto 1:09
// on click minuto 1:13

const etiquetaP = document.createElement ("p");
etiquetaP.innerText = "prueba";
divPrueba.appendChild(etiquetaP);


// Main
sectionProductos.className = "sectionProductosClase";

const button = document.createElement("button");
button.innerText = "Click Here"
document.body.appendChild(button);

button.addEventListener("click", () => {
    alert("Hiciste click");
});

// Footer

/* 
NO FUNCIONA CREAR DIV
const divProductos = document.createElement ("div");
divProductos.innerHTML = "div";
sectionProductos.appendChild(divProductos); */



// OBJETOS 

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

// ARRAYS

 const arrayCatalogo = [mediasAngoraMujer, mediasAngoraHombre, mediasAngoraBaby];
 const arrayCarrito = [];
 localStorage.setItem ("CarritoStorageInicial" , JSON.stringify(arrayCarrito));



// CARDS 
arrayCatalogo.forEach (el => {
    const newCard = document.createElement ("div");
    newCard.className = "cardProducto"; 
    newCard.innerHTML = `
    <p>${el.nombre}</p>
    <p>$${el.precio}</p>
    <p>${el.color}</p>
    `
    const button = document.createElement ("button");
    button.innerText = "Agregar";
    button.addEventListener("click", () => {
        alert(`${el.nombre} added to carrito`);
    });
    newCard.appendChild (button);
    ;
    newCard.onclick = () => alert (`${el.nombre} added to cart`);
    sectionProductos.appendChild(newCard);
});



/* 
 // STORAGE


// GUARDAR PRODUCTOS ELEGIDOS EN LOCAL STORAGE. ver 1:33 del video. cargar en local storage cada vez que agrego al carrito

localStorage.setItem ("CarritoStorage", JSON.stringify(arrayCarrito))

// FIN DE STORAGE

*/


// FUNCIONES

/* Funcion Mostrar Catalogo*/
function mostrarCatalogo(params) {
    
    for(productos of arrayCatalogo){
        alert ("Te ofrecemos " + productos.nombre + " a $" + productos.precio);
    }
}
    // >>> aca puedo poner un forEach. mirar video 0:37. ????
    /*
    arrayCatalogo.forEach((element, idx) => {
        alert ((idx +1) + "_ Te ofrecemos " + arrayCatalogo.nombre + " a $" + arrayCatalogo.precio);
    });
    */

/* Funcion Add to Cart*/
function addToCart(params) {
    let chosenProduct = parseInt (prompt ("Elige un producto "));

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

 //>>> ver 1:02 para agregar dos de lo mismo al carrito

 /* Funcion guardar en local storage */
 // Pushear al array carrito inicial

 function guardarEnLocalStorage(params) {
    localStorage.setItem ("CarritoStorage", JSON.stringify(arrayCarrito));
 }

/* Funcion Mostrar Carrito*/ 
function mostrarCarrito (params) {
    for(productos of arrayCarrito){
        alert ("Tienes en tu carrito " + productos.nombre);
    }

}
/* Funcion Sumar*/

//let total;
function sumarTotalCompra(params) {
    let totalReduce = arrayCarrito.reduce((acumulador, actual) => acumulador + actual.precio, 0);
            alert ("El total de tu compra es $" + totalReduce);
}


// Puedo agregar funcion de remover producto del carrito con un filter. ver minuto 0:57

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
            guardarEnLocalStorage ();
            break;

        case 3:
            // 3 - GO TO CART (MOSTRAR CARRITO)
            mostrarCarrito ();
            break; 
            
        case 4:
            // 4 - CHECKOUT
            sumarTotalCompra ();
            //mostrarTotalCompra ();

            
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



