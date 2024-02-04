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

        let carritoDisplay = ""
        for (const productos of arrayCarrito) {
        carritoDisplay += `\n${productos.cantidad} pares de ${productos.nombre}`
    }

        Toastify({
            text: "Hay en tu carrito" + carritoDisplay,
            duration: 3000,   
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #00b09b, #b00055)",
            },
            offset: {
                x: 100, 
                y: 50 
              },
              onClick: function(){} 
            }).showToast();


    /*     for(productos of arrayCarrito){
            Toastify({
                text: "Tienes en tu carrito " + productos.cantidad + " " + productos.nombre,
                duration: 3000   
                }).showToast();
    } 
 */



    /* arrayCarrito.forEach (el => {
        const newCardCarrito = document.createElement ("div");
        newCardCarrito.className = "cardCarrito";
        newCardCarrito.innerHTML = `
        <p>${el.cantidad} ${el.nombre}</p>
        `
        sectionCarrito.appendChild(newCardCarrito);
    }
    )
    const totalItems = document.createElement ("div");
    totalItems.className = "cardTotalItems";
    totalItems.innerHTML = `
    <p>Total ${arrayCarrito.length} items</p>
    `;
    sectionCarrito.appendChild (totalItems); */
    } else {
        Toastify({
            text: "Tu carrito esta vacio!",
            duration: 10000,
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #00b09b, #b00055)",
            },
            offset: {
                x: 100, 
                y: 50 
              },
            onClick: function(){} 
            }).showToast();
    }
}
 


//Funcion Completar Compra

function completarCompra(params) {

    let totalReduce = arrayCarrito.reduce((acumulador, actual) => acumulador + (actual.precio * actual.cantidad), 0);
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success boton-swal",
          cancelButton: "btn btn-danger boton-swal-cancel"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Deseas confirmar tu compra?",
        text: `El total de tu compra es $${totalReduce}`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Confirmar compra",
        cancelButtonText: "Cancelar",
        background: "rgb(253, 248, 242)",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Transaccion completa",
            text: "Muchas gracias por tu compra!",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Tu compra ha sido cancelada",
            text: "Puedes seguir mirando medias :)",
          });
        }
      });





    /* let transaccionCompleta = confirm ("Deseas confirmar tu compra?");
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
    } */
    }

