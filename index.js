//Variables
let productos = [
    { id: 1, tipo: "consola", nombre: "Xbox One", precio: 400 , imagen:"https://m.media-amazon.com/images/I/61zjj2sgXML._SX466_.jpg"},
    { id: 2, tipo: "consola", nombre: "Playstation 4", precio: 450,imagen:"https://as01.epimg.net/betech/imagenes/2016/09/08/portada/1473285944_323697_1473286252_noticia_normal.jpg"},
    { id: 3, tipo: "joystick", nombre: "Joystick Original", precio: 50 ,imagen:"https://images.fravega.com/f500/9bf0c5a87ddb069a1a9f14c9854a0e4c.jpg"},
    { id: 4, tipo: "joystick", nombre: "Joystick Alternativo", precio:20 ,imagen:"https://i.blogs.es/094415/duke1/450_1000.jpg"},
    { id: 5, tipo: "accesorio", nombre: "Auricular con cable", precio: 15, imagen:"https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/4/2/42066.jpg"},
    { id: 6, tipo: "accesorio", nombre: "Auricular Inalambrico", precio: 30,imagen:"https://www.tiomusa.com.ar/imagenes/archivos/2020-04/25498-auricularbluetoothf2.jpg"},
    { id: 7, tipo: "accesorio", nombre: "Cable HDMI", precio: 5 ,imagen:"https://pascalonline.com.ar/wp-content/uploads/2016/08/HDM.jpg"},
    { id: 8, tipo: "accesorio", nombre: "Baterias", precio: 8 ,imagen:"https://http2.mlstatic.com/D_NQ_NP_859420-MLA46752218757_072021-V.jpg"},
    { id: 9, tipo: "accesorio", nombre: "Pilas", precio: 15,imagen:"https://www.duracell-la.com/upload/sites/37/2016/07/1010790_rechargeable_rpp-cells_AA-2500mAh_4_primary.png"}
];

let carrito = [];
// --------------------------------------------------Filtrado de Productos
// definimos la variable del Array
let arrayProductos = productos;
//Creamos la funcion para la tabla de los productos
function rellenarTabla(array){
    // se vacia el tbody para que funcione
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = '';
    // recorremos el array de los productos
    for(const producto of array){
        //creando los elementos para el html
        const tr = document.createElement("tr");
        // Dentro del tr creamos los td
        tr.innerHTML = `<td><img src='${producto.imagen}'></td>
                        <td>${producto.nombre}</td>
                        <td>${producto.precio}</td>`
        // subimos todo de nuevo al HTML
        tbody.appendChild(tr);
    }
}

const storage = JSON.parse(localStorage.getItem("filtro"));
// verirficamos si estan o no los productos
if(storage){
    arrayProductos = storage;
}

rellenarTabla(arrayProductos);

const inputRadio = document.getElementsByClassName("radio");

for(const input of inputRadio){
    input.addEventListener("click", filtrarTabla)
}  // funciona tambien con change o con click sinonimos

function filtrarTabla(evento){
    let inputValue = evento.target.value.toLowerCase();
    
    if(inputValue != "total"){
        arrayProductos = productos.filter((elemento) => {
            return elemento.tipo.toLowerCase() === inputValue;
        })
    }else{
        arrayProductos = productos;
    }

    localStorage.setItem("filtro", JSON.stringify(arrayProductos));

    rellenarTabla(arrayProductos);

}


//------------------------------------------------------------Eventos
//boton admin
let botonAdmin = document.getElementById("botonAdmin")
botonAdmin.addEventListener ("click", () => adminClick ())
botonAdmin.addEventListener("mouseover", () =>{ 
    botonAdmin.style.background="red"
})
botonAdmin.addEventListener("mouseout", () =>{ 
    botonAdmin.style.background="white"
})


//boton cliente
let botonCliente = document.getElementById("botonCliente")
botonCliente.addEventListener ("click", () => clienteClick ())
botonCliente.addEventListener("mouseover", () =>{ 
    botonCliente.style.background="red"
})
botonCliente.addEventListener("mouseout", () =>{ 
    botonCliente.style.background="white"
})

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

/*
function botonClientePrendido () {
    botonCliente.className ="botonprendido"
}
function botonClienteApagado () {
    botonCliente.className ="botonapagado"
}
*/
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


/* Tareas 
Arreglar el añadir producto 
Eliminar un producto en especifico
Modificar el precio de un producto

*/