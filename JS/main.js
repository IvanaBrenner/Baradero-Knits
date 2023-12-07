console.log ("Baradero Knits Test");

const mediasAngoraMujer = ("Medias Angora Mujer");
const mediasAngoraHombre = ("Medias Angora Hombre");
const mediasAngoraBaby = ("Medias Angora Baby");
const saquitoCrochet = ("Saquito al Crochet");
 
const arrayCatalogo = [mediasAngoraMujer, mediasAngoraHombre, mediasAngoraBaby, saquitoCrochet];
const arrayCarrito = [];

/* console.log (arrayCatalogo);
console.log(arrayCatalogo[2]);
console.log (arrayCatalogo.length); */

// 1 - MOSTRAR CATALOGO AL USUARIO

alert ("Este es nuestro calatogo de productos: \n" + mediasAngoraMujer + "\n" + mediasAngoraHombre + "\n" + mediasAngoraBaby + "\n" + saquitoCrochet );

for (let index = 0; index < arrayCatalogo.length; index++) {
    alert ("Te ofrecemos " + arrayCatalogo[index]);
}

// 2 - INVITACION A ELEGIR PRODUCTOS

let chosenProduct1 = prompt ("Elige un producto");

// 3 - SUMAR PRODUCTO AL CARRITO

if (chosenProduct1 = true) {
    //pushear producto a arrayCarrito
} else {
    alert ("Gracias por visitar Baradero Knits! \nTe esperamos de nuevo pronto!");
}

// 4 - OFRECER PROMO

alert ("Si llevas dos productos, tienes un 10% de descuento sobre el segundo producto");

let chosenProduct2 = prompt ("Si quieres aprovechar la promo, elige otro producto, si no, presiona cancel");

if (chosenProduct2 = true) {
    //pushear segundo producto a arrayCarrito
}

// 5 - GO TO CART (MOSTRAR CARRITO)

// 6 - SUMAR / MOSTRAR TOTAL DE LA COMPRA

let totalCompra;
alert ("El total de tu compra es " + totalCompra);

// 7 - REALIZAR LA TRANSACCION

let transaccionCompleta = prompt ("Desear confirmar tu compra?");
if (transaccionCompleta = true) {
    alert ("Muchas gracias por tu compra!")
} else {
    alert ("Tu compra ha sido cancelada");
}



