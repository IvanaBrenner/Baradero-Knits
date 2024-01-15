// OBJETOS 

const mediasAngoraMujer = {
    nombre: "Medias Angora Mujer",
    id: 1,
    categoria: "Medias",
    precio: 50,
    color: "beige",
    img: "https://i.pinimg.com/564x/36/e2/8f/36e28ff895fc0f7578dbd1ac985d9ee3.jpg",
    cantidad: 1,
}
const mediasAngoraHombre = {
    nombre: "Medias Angora Hombre",
    id: 2,
    categoria: "Medias",
    precio: 45,
    color: "beige",
    img: "https://i.pinimg.com/564x/36/e2/8f/36e28ff895fc0f7578dbd1ac985d9ee3.jpg",
    cantidad: 1,
}

const mediasAngoraBaby = {
    nombre: "Medias Angora Baby",
    id: 3,
    categoria: "Medias",
    precio: 35,
    color: "beige",
    img: "https://i.pinimg.com/564x/36/e2/8f/36e28ff895fc0f7578dbd1ac985d9ee3.jpg",
    cantidad: 1,
}

// ARRAYS

 const arrayCatalogo = [mediasAngoraMujer, mediasAngoraHombre, mediasAngoraBaby];
 let arrayCarrito = JSON.parse(localStorage.getItem ("CarritoStorage")) || [];


// FUNCIONES

//Funcion Completar Compra

function completarCompra(params) {
    let transaccionCompleta = confirm ("Desear confirmar tu compra?");
    if (transaccionCompleta) {
    alert ("Transaccion completa.\nMuchas gracias por tu compra!")
    localStorage.clear ();
    } else {
    alert ("Tu compra ha sido cancelada");
    }
    }

 
 //Funcion guardar en local storage

 function guardarEnLocalStorage(params) {
    localStorage.setItem ("CarritoStorage", JSON.stringify(arrayCarrito));
 }

 // Funcion mostrar carrito

function mostrarCarrito(params) {
        for(productos of arrayCarrito){
            alert ("Tienes en tu carrito " + productos.nombre);
    }
    }

// Funcion Sumar (no funciona cuando la pongo dentro del event listener como funcion)

/* function sumarTotalCompra(params) {
    let totalReduce = arrayCarrito.reduce((acumulador, actual) => acumulador + actual.precio, 0);
            alert ("El total de tu compra es $" + totalReduce);
} */


// Funcion validar (chiste empanadas del whatsapp)
/* const validar = arrayCarrito.some (el => el.id === 1);
console.log (validar); */
//>>> ver 1:02 para agregar dos de lo mismo al carrito


// Puedo agregar funcion de remover producto del carrito con un filter. ver minuto 0:57




//DOM

// Body
// Header
header.innerHTML = `
<h1>Baradero Knits</h1> 
`
;

// Main

const sectionProductos = document.getElementById ("sectionProductos");
sectionProductos.className = "sectionProductosClase";

// CARDS PRODUCTOS
arrayCatalogo.forEach (el => {
    const newCard = document.createElement ("div");
    newCard.className = "cardProducto"; 
    newCard.innerHTML = `
    <p>${el.nombre}</p>
    <p>$${el.precio}</p>
    <p>${el.color}</p>
    `
    /* const imgProducto = document.createElement ("img");
    imgProducto.src = el.img; */

    const button = document.createElement ("button");
    button.innerText = "Agregar";
    button.addEventListener("click", () => {
        arrayCarrito.push (el);
        alert (`${el.nombre} se han agregado a tu carrito!`);   
        //localStorage.setItem ("CarritoStorage", JSON.stringify(arrayCarrito));   
        guardarEnLocalStorage ();  
    });

    //newCard.appendChild (imgProducto);
    newCard.appendChild (button);
    sectionProductos.appendChild(newCard);
});



// IR AL CARRITO
const sectionCarrito = document.getElementById ("sectionCarrito");
sectionCarrito.className = "sectionCarritoClase";

const buttonVerCarrito = document.createElement ("button");
buttonVerCarrito.innerText = "Ver Carrito";
buttonVerCarrito.addEventListener ("click", () => {
    /* 
    Esto cuando lo hago asi no funciona:
    for(productos of arrayCarrito){
        alert ("Tienes en tu carrito " + productos.nombre);
    } */
    mostrarCarrito ();
});

sectionCarrito.appendChild(buttonVerCarrito);
// Me falta hacer in if para cuando el carrito esta vacio que me de una alerta. Trate y no funciono!


// CHECKOUT
const sectionCheckout = document.getElementById ("sectionCheckout");
sectionCheckout.className = "sectionCheckoutClase";

const buttonCheckout = document.createElement ("button");
buttonCheckout.innerText = "Check Out";
buttonCheckout.addEventListener ("click", () => {
    let totalReduce = arrayCarrito.reduce((acumulador, actual) => acumulador + (actual.precio * actual.cantidad), 0);
    alert ("El total de tu compra es $" + totalReduce);
    completarCompra ();
});

sectionCheckout.appendChild(buttonCheckout);


// Footer

// FALTA

// Arreglar el tema de las cantidades
// Poder editar el carrito
// Alerta si el carrito esta vacio



