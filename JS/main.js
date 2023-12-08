console.log ("Baradero Knits Test");

const mediasAngoraMujer = {
    nombre: "Medias Angora Mujer",
    id: "M1",
    categoria: "Medias",
    precio: 50,
    color: "beige",
}
const mediasAngoraHombre = {
    nombre: "Medias Angora Hombre",
    id: "M2",
    categoria: "Medias",
    precio: 45,
    color: "beige",
}

const mediasAngoraBaby = {
    nombre: "Medias Angora Baby",
    id: "M3",
    categoria: "Medias",
    precio: 35,
    color: "beige",
}

 
const arrayCatalogo = [mediasAngoraMujer, mediasAngoraHombre, mediasAngoraBaby];
const arrayCarrito = [];


// 1 - MOSTRAR CATALOGO AL USUARIO

function mostrarCatalogo(params) {
    alert ("Este es nuestro calatogo de productos: \n" + mediasAngoraMujer + "\n" + mediasAngoraHombre + "\n" + mediasAngoraBaby );

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

    switch (chosenProduct) {
        case ("M1"):
            arrayCarrito.push (mediasAngoraMujer);
        //pushear producto a arrayCarrito
            alert ("Medias Angora Mujer se han agregado a tu carrito!");
            break;
        case ("M2"):
            arrayCarrito.push (mediasAngoraHombre);
            //pushear producto a arrayCarrito
            alert ("Medias Angora Hombre se han agregado a tu carrito!");
            break;    
        case ("M3"):
            arrayCarrito.push (mediasAngoraBaby);
            //pushear producto a arrayCarrito
            alert ("Medias Angora Baby se ha agregado a tu carrito!");
            break;
        default:
            alert ("Sigue mirando otros productos!")
            break;
    }
 }
 
 addToCart ();

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



function sumarTotal(params) {
    /* totalCompra = ( chosenProduct1+ chosenProduct2 ); */
}

function sumarTotalCompra(params) {
    let totalCompra = 0;
    for (const chosenProduct of arrayCarrito) {
        totalCompra += chosenProduct.precio 
    }
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



