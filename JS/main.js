
// ARRAYS

 let arrayCarrito = JSON.parse(localStorage.getItem ("CarritoStorage")) || [];


//DOM

// Header
header.innerHTML = `
<h1>Baradero Knits</h1> 
`;

// Main

const sectionProductos = document.getElementById ("sectionProductos");
sectionProductos.className = "sectionProductosClase";

const arrayCatalogoPushaeado = [];

// CARDS PRODUCTOS

fetch("./JS/productos.json")
.then(response => response.json()) 
.then(data => {
    const arrayCatalogo = data;
    
    arrayCatalogo.forEach (el => {
        const newCard = document.createElement ("div");
        newCard.className = "cardProducto"; 
        newCard.innerHTML = `
        <p>${el.nombre}<br>$${el.precio}<br>${el.color}</p>
        `
        const imgProducto = document.createElement ("img");
        imgProducto.className = "fotoProducto";
        imgProducto.src = el.img;
    
        const buttonAgregar = document.createElement ("button");
        buttonAgregar.className = "boton-light";
        buttonAgregar.innerText = "Agregar al carrito";
        buttonAgregar.addEventListener("click", () => {
            agregarAlCarrito (el.id);  
            guardarEnLocalStorage ();  
        });

        const buttonEliminar = document.createElement ("button");
        buttonEliminar.className = "boton-light";
        buttonEliminar.innerText = "Eliminar del carrito";
        buttonEliminar.addEventListener ("click", () => {
            elminarDelCarrito (el.id);
            guardarEnLocalStorage ();
        }) 
    
        newCard.appendChild (imgProducto);
        newCard.appendChild (buttonAgregar);
        newCard.appendChild (buttonEliminar);
        sectionProductos.appendChild(newCard);
        arrayCatalogoPushaeado.push (el);
    });
}
)


// IR AL CARRITO
const sectionCarrito = document.getElementById ("sectionCarrito");
sectionCarrito.className = "sectionCarritoClase";

const buttonVerCarrito = document.createElement ("button");
buttonVerCarrito.className = "boton-carrito hover-scale";
buttonVerCarrito.innerText = "Ver Carrito";
buttonVerCarrito.addEventListener ("click", () => {
    mostrarCarrito ();
});

sectionCarrito.appendChild(buttonVerCarrito);


// CHECKOUT
const sectionCheckout = document.getElementById ("sectionCheckout");
sectionCheckout.className = "sectionCheckoutClase";

const buttonCheckout = document.createElement ("button");
buttonCheckout.className = "boton";
buttonCheckout.innerText = "Check Out";
buttonCheckout.addEventListener ("click", () => {
    completarCompra ();
});

sectionCheckout.appendChild(buttonCheckout);


// Footer



