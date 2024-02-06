// FUNCIONES

 // Funcion agregar al carrito

function agregarAlCarrito(id) {
    const productoAgregado = arrayCatalogoPushaeado.find (el => el.id === id)

    if (!arrayCarrito.some (el => el.id === id)) {
        arrayCarrito.push (productoAgregado);
        Toastify({
            text: `${productoAgregado.nombre} se han agregado a tu carrito!`,
            duration: 1000,
            style: {
                background: "linear-gradient(to right, #914899, #e7b2ed)",
              },
            }).showToast();  
    } else {
       arrayCarrito.find (el => el.id === productoAgregado.id);
       productoAgregado.cantidad = productoAgregado.cantidad + 1;
       Toastify({
        text: `Otro par de ${productoAgregado.nombre} se ha agregado a tu carrito!`,
        duration: 1000,
        style: {
            background: "linear-gradient(to right, #914899, #e7b2ed)",
          }, 
        }).showToast();
    } 
}

// Funcion eliminar del carrito

function elminarDelCarrito(id) {
    const productoAgregado = arrayCatalogoPushaeado.find (el => el.id === id)

    if (!arrayCarrito.some (el => el.id === id)) {
        Toastify({
            text: `Aun no tienes ${productoAgregado.nombre} en tu carrito!`,
            duration: 1000,
            style: {
                background: "linear-gradient(to right, #4f662c, #bceb75)",
              }, 
            }).showToast();   
    } else if ((arrayCarrito.some (el => el.id === id)) && (productoAgregado.cantidad > 1)) {
       arrayCarrito.find (el => el.id === productoAgregado.id);
       productoAgregado.cantidad = productoAgregado.cantidad - 1;
       Toastify({
        text: `Un par de ${productoAgregado.nombre} se ha eliminado de tu carrito!`,
        duration: 1000,
        style: {
            background: "linear-gradient(to right, #6a7194, #adb4db)",
          },
        }).showToast();
    } else {
        arrayCarrito = arrayCarrito.filter (el => el.id !== productoAgregado.id);
        Toastify({
            text: `${productoAgregado.nombre} ha sido eliminado de tu carrito`,
            duration: 1000,
            style: {
                background: "linear-gradient(to right, #6a7194, #adb4db)",
              },
            }).showToast();
    }
}


 //Funcion guardar en local storage

 function guardarEnLocalStorage(params) {
    localStorage.setItem ("CarritoStorage", JSON.stringify(arrayCarrito));
 }


 // Funcion mostrar carrito

 function mostrarCarrito() {

    if (arrayCarrito.length > 0) {

        let carritoDisplay = ""
        for (const productos of arrayCarrito) {
        carritoDisplay += `\n${productos.cantidad} ${productos.nombre}`
        }

        Toastify({
            text: "Tienes en tu carrito" + carritoDisplay,
            duration: 3000,   
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #1c484d, #bae2e6)",
            },
            offset: {
                x: 100, 
                y: 50 
              },
              onClick: function(){} 
            }).showToast();

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
              background: "linear-gradient(to right, #1c484d, #bae2e6)",
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
          arrayCarrito = [];
          localStorage.clear ();
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Tu compra ha sido cancelada",
            text: "Puedes seguir mirando medias :)",
          });
        }
      });
    }

