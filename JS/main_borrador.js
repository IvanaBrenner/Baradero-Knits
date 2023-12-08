console.log ("Baradero Knits Test");

const mediasAngoraMujer = {
    nombre: "Medias Angora Mujer",
    categoria: "Medias",
    precio: 50,
    color: "beige",
}
const mediasAngoraHombre = {
    nombre: "Medias Angora Hombre",
    categoria: "Medias",
    precio: 45,
    color: "beige",
}

const mediasAngoraBaby = ("Medias Angora Baby");
const saquitoCrochet = ("Saquito al Crochet");
 
const arrayCatalogo = [mediasAngoraMujer, mediasAngoraHombre, mediasAngoraBaby, saquitoCrochet];
const arrayCarrito = [];

console.log (mediasAngoraMujer["precio"]);
console.log (mediasAngoraHombre.precio);
console.log ((mediasAngoraMujer.precio) + (mediasAngoraHombre.precio));

/* console.log (arrayCatalogo);
console.log(arrayCatalogo[2]);
console.log (arrayCatalogo.length); */

// 1 - MOSTRAR CATALOGO AL USUARIO

function mostrarCatalogo(params) {
    alert ("Este es nuestro calatogo de productos: \n" + mediasAngoraMujer + "\n" + mediasAngoraHombre + "\n" + mediasAngoraBaby + "\n" + saquitoCrochet );

for (let index = 0; index < arrayCatalogo.length; index++) {
    alert ("Te ofrecemos " + arrayCatalogo[index]);
}
}

mostrarCatalogo ();

// 2 - INVITACION A ELEGIR PRODUCTOS

/* let chosenProduct1 = prompt ("Elige un producto"); */

// 3 - AGREGAR PRODUCTO AL CARRITO

function addToCart(params) {
    let chosenProduct = prompt ("Elige un producto");
    if (chosenProduct != null) {
        arrayCarrito.push (chosenProduct);
        //pushear producto a arrayCarrito
        alert (chosenProduct + " se ha agregado a tu carrito!");
    } else {
        alert ("Sigue mirando otros productos!")
    }
}
addToCart ();

/* if (chosenProduct1 != null) {
    arrayCarrito.push (chosenProduct1);
    //pushear producto a arrayCarrito
    alert (chosenProduct1 + " se ha agregado a tu carrito!");
} else {
    alert ("Gracias por visitar Baradero Knits! \nTe esperamos de nuevo pronto!");
} */

// 4 - OFRECER PROMO

alert ("Si llevas dos productos, tienes un 10% de descuento sobre el segundo producto");

addToCart ();

/* let chosenProduct2 = prompt ("Si quieres aprovechar la promo, elige otro producto, si no, presiona cancel");

if (chosenProduct2 != null) {
    arrayCarrito.push (chosenProduct2);
    alert (chosenProduct2 + " se ha agregado a tu carrito!");
    //pushear segundo producto a arrayCarrito
} else {
    confirm ("Ir al carrito")
} */

// 5 - GO TO CART (MOSTRAR CARRITO)

function mostrarCarrito(params) {
    for (let index = 0; index < arrayCarrito.length; index++) {
        alert ("Tienes en tu carrito " + arrayCarrito[index]);
    }
}

mostrarCarrito ();

// 6 - SUMAR / MOSTRAR TOTAL DE LA COMPRA

let totalCompra;

for (let index = 0; index < arrayCarrito.length; index++) {
    alert ("El total de tu compra es" + (arrayCarrito[index].precio));
}



function sumar(params) {
    totalCompra = ( chosenProduct1+ chosenProduct2 );
}



function mostrarTotalCompra(params) {
    alert ("El total de tu compra es " + totalCompra);
}



// 7 - REALIZAR LA TRANSACCION

let transaccionCompleta = confirm ("Desear confirmar tu compra?");


if (transaccionCompleta) {
    alert ("Muchas gracias por tu compra!")
} else {
    alert ("Tu compra ha sido cancelada");
}



