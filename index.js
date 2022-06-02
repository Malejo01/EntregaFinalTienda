//Variables
let productos = [
    { id: 1, tipo: "consola", nombre: "Xbox One", precio: 400 },
    { id: 2, tipo: "consola", nombre: "Playstation 4", precio: 450 },
    { id: 3, tipo: "Joystick", nombre: "Joystick Original", precio: 50 },
    { id: 4, tipo: "Joystick", nombre: "Joystick Alternativo", precio: 20 },
    { id: 5, tipo: "Accesorio", nombre: "Auricular con cable", precio: 15 },
    { id: 6, tipo: "Accesorio", nombre: "Auricular Inalambrico", precio: 30 },
    { id: 7, tipo: "Accesorio", nombre: "Cable HDMI", precio: 5 },
    { id: 8, tipo: "Accesorio", nombre: "Baterias", precio: 8 },
    { id: 9, tipo: "Accesorio", nombre: "Pilas", precio: 15 }
];

let carrito = [
    productos[0], productos[3], productos[6]
];

//Eventos
//boton admin
let botonAdmin = document.getElementById("botonAdmin")
botonAdmin.addEventListener ("click", () => adminClick ())
botonAdmin.addEventListener ("mouseover", () => botonAdminPrendido)
//botonAdmin.addEventListener ("mouseout", () => botonAdminApagado)

//boton cliente
let botonCliente = document.getElementById("botonCliente")
botonCliente.addEventListener ("click", () => clienteClick ())
botonCliente.addEventListener ("mouseover", () => botonClientePrendido)
//botonCliente.addEventListener ("mouseout", () => botonClientePrendido)

//------------------------------------------------------------Funciones

function botonAdminPrendido () {
    botonAdmin.className ="botonprendido"
}
function botonAdminApagado () {
    botonAdmin.className ="botonapagado"
}

function adminClick() {
    let divCliente = document.getElementById("menuCliente");
    divCliente.style.display = "none";
    //Buscar div menuLogin
    let divLogin = document.getElementById("cosasDeAdmin");
    //Mostrar div menuLogin
    divLogin.style.display = "block";
}


function botonClientePrendido () {
    botonCliente.className ="botonprendido"
}
function botonClienteApagado () {
    botonCliente.className ="botonapagado"
}

function clienteClick() {
    //Buscar div menuLogin
    let divLogin = document.getElementById("cosasDeAdmin");
    //Ocultar div menuLogin
    divLogin.style.display = "none";
    //Buscar div menuCliente
    let divCliente = document.getElementById("menuCliente");
    //Mostrar div menuCliente
    divCliente.style.display = "block";
}

function loginClick() {
    //Obtener usuario y contraseña
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    if (usuario == "admin" && contrasena == "admin") {
        //Todo: Mostrar menu de admin y esconder menu de login
        var divLogin = document.getElementById("menuLogin");
        divLogin.style.display = "none";
        var divAdmin = document.getElementById("menuAdmin");
        divAdmin.style.display = "block";
    } else {
        //Hacer visible mensaje de error
        document.getElementById("errorLogin").style.display = "block";
    }
}

function adminOpcionClick() {
    //Obtener opcion elegida
    let opcion = document.getElementById("opcionAdminElegida").value;
    switch (opcion) {
        case "1": //Mostrar carrito
            mostrarProductos()
            break;
        case "2": //Agregar producto
            aniadirProducto()
            break;
        default:
            alert("Opcion no valida");
            break;
    }
}


function crearElementoLista(producto) {
    let li = document.createElement("li");
    li.innerHTML = producto.id + " - " + producto.tipo + " - " + producto.nombre + " - " + "$" + producto.precio;
    return li;
}

function mostrarProductos() {
    //Obtenemos el elemento 
    let listaDOM = document.getElementById("lista");
    //Borramos el contenido
    listaDOM.innerHTML = "";
    for (let i = 0; i < productos.length; i++) {
        let elemento = crearElementoLista(productos[i])
        listaDOM.appendChild(elemento);
    }
    //Mostrar elemento
    listaDOM.style.display = "block";
}

function mostrarCarrito() {
    //Obtenemos el elemento
    let listaDOM = document.getElementById("lista");
    //Borramos el contenido
    listaDOM.innerHTML = "";
    for (let i = 0; i < carrito.length; i++) {
        let elemento = crearElementoLista(carrito[i])
        listaDOM.appendChild(elemento);
    }
    //Mostrar elemento
    listaDOM.style.display = "block";

}