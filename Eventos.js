//------------------------------------------------------------------Eventos
//boton admin
let botonAdmin = document.getElementById("botonAdmin")
botonAdmin.addEventListener ("click", () => adminClick ())
botonAdmin.addEventListener("mouseover", () =>{ 
    botonAdmin.style.background="green"
})
botonAdmin.addEventListener("mouseout", () =>{ 
    botonAdmin.style.background="white"
})


//boton cliente
let botonCliente = document.getElementById("botonCliente")
botonCliente.addEventListener ("click", () => clienteClick ())
botonCliente.addEventListener("mouseover", () =>{ 
    botonCliente.style.background="green"
})
botonCliente.addEventListener("mouseout", () =>{ 
    botonCliente.style.background="white"
})

let botonAnadirProducto = document.getElementById("btnAnadirProducto");
botonAnadirProducto.addEventListener("click", () => {
    let datosProducto = {
        id:"",
        nombre: document.getElementById("nombreProducto").value,
        precio: document.getElementById("precioProducto").value,
        tipo: document.getElementById("tipoProducto").value
    }
    aniadirProducto(datosProducto)
});
let botonModificarProducto = document.getElementById("btnModificarProducto");
botonModificarProducto.addEventListener("click", () => {
    let datosProducto = {
        id: document.getElementById("idProducto").value,
        nombre: document.getElementById("nombreProducto").value,
        precio: document.getElementById("precioProducto").value,
        tipo: document.getElementById("tipoProducto").value,
        imagen: document.getElementById("imagenProducto").value
    }
    modificarProducto(datosProducto)
});

let botonMostrarCamposModificarProducto = document.getElementById("btnModificarId");
botonMostrarCamposModificarProducto.addEventListener("click", () => {
    //Obtenemos id del producto busqueda
    let idProducto = document.getElementById("idProductoBusqueda").value;
    modificarProductoPorId(idProducto)
}
);
