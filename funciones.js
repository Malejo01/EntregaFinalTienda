// cargo el fetch usando el data.json
fetch('/data.json')
    .then( (res) => res.json())
    .then( (data) => {console.log(data)
})

// --------------------------------------------------displays
function adminClick() {
    let divCliente = document.getElementById("menuCliente");
    divCliente.style.display = "none";
    //Buscar div menuLogin
    let divLogin = document.getElementById("cosasDeAdmin");
    //Mostrar div menuLogin
    divLogin.style.display = "block";
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
            //aniadirProducto()
            mostrarInputsProducto(true);
            break;
        case "3": //eliminar producto
            eliminarProducto()
            break;
        case "4": //modificar precio de producto
            mostrarInputsModificarProducto();
            break;
            //mostrarInputsProducto(false);
            //modificarPrecio()
        default:
            alert("Opcion no valida");
            break;
    }
}

function mostrarInputsModificarProducto(){
    let listaDOM = document.getElementById("lista");
    listaDOM.innerHTML = "";
    document.getElementById("inputModificarProducto").style.display="block";
}

function mostrarInputsProducto(estaAgregando){
    //Mostrar campos de anadir
    let listaDOM = document.getElementById("lista"); listaDOM.innerHTML = "";
    document.getElementById("inputsProducto").style.display = "block";
    document.getElementById("btnAnadirProducto").style.display = estaAgregando ? "block":"none";
    document.getElementById("btnModificarProducto").style.display = estaAgregando ? "none":"block";    
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

function notificar(mensaje){
    let notificacion = document.getElementById("notificacion");
    notificacion.innerHTML = mensaje;
    notificacion.style.display = "block";
    //Ocultar mensaje luego de 3 segundos
    setTimeout(() => {
        notificacion.style.display = "none";
    }, 3000);
}

function modificarProductoPorId(id){
    let producto = null;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id == id) {
            producto = productos[i];
            break;
        }
    }
    if (!producto) {
        alert("No se encontro el producto")
    }else{
        //Seteamos los inputs con la data del producto
        mostrarInputsProducto(false)
        document.getElementById("nombreProducto").value = producto.nombre;
        document.getElementById("precioProducto").value = producto.precio;
        document.getElementById("tipoProducto").value = producto.tipo;
        document.getElementById("idProducto").value = producto.id;
    }
}

function modificarProducto(producto){
    document.getElementById("inputsProducto").style.display = "none";
    document.getElementById("btnModificarProducto").style.display = "none";
    //Buscamos el producto en productos
    let pos = null;
    let productoModificado = null;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id == producto.id) {
            pos = i;
            productoModificado = productos[i];
            break;
        }
    }
    productoModificado.nombre = producto.nombre;
    productoModificado.precio = Number(producto.precio);
    productoModificado.tipo = producto.tipo;
    productos[pos] = productoModificado;
    console.log(productos)
    notificar("Producto modificado");

}

function aniadirProducto (producto) {
    producto.id = productos.length + 1;
    productos.push(producto);
    console.log(productos)
    notificar("Producto añadido");
    document.getElementById("inputsProducto").style.display = "none";
    document.getElementById("btnAnadirProducto").style.display = "none";
}

function eliminarProducto (){
    let listaDOM = document.getElementById("lista");
    listaDOM.innerHTML = "";
    mostrarProductos() 
    //crear dom para eliminar producto
    /*
    creo elemento de html
    asigno atributo id = a 
    busco el id recien creado
    
    document.getElementById("").style.display="block";
    //pedir input id de producto

    /*let id= Number(prompt("Ingrese el id del usuario que quiere eliminar"));*/
    let encontrado = productos.find((producto)=>producto.id===id);

   if(!encontrado)
   {
       alert("Producto no Encontrado");
   }
   else{
        let index = productos.indexOf(encontrado);

        productos.splice(index,1);
        alert("Producto Borrado");
        //mostrar resultados
        let listaDOM = document.getElementById("lista");
        listaDOM.innerHTML = "";
        mostrarProductos()
   }}

function modificarPrecio()
{
    let id= Number(prompt("Ingrese el id del usuario que quiere modificar"));

    let existe = productos.some((producto)=>producto.id===id);

    if(existe)
    {
        let encontrado = productos.find((producto)=>producto.id===id);
        let nuevoPrecio = prompt("Ingrese el nuevo precio del producto");
        nuevoPrecio=Number(nuevoPrecio)
        encontrado.precio = nuevoPrecio;

        alert("Se ha modificado el precio")
        console.log(productos);
        mostrarProductos() 
    }
    else
    {
        alert("Ese producto no fue encontrado")
    }
}

class Productos{
    constructor(id,tipo,nombre,precio,imagen)
    {
        this.id=id;
        this.tipo=tipo;
        this.nombre=nombre;
        this.precio=precio;
        this.imagen=imagen;
    }
}

class Carrito {
    constructor(id,tipo,nombre,precio,imagen)
    {
        this.id=id;
        this.tipo=tipo;
        this.nombre=nombre;
        this.precio=precio;
        this.imagen=imagen;
    }
}
// -----------------------------------------------------Carrito


function agregarProducto (producto) {
        carrito.push(producto);
        mostrarCarrito()
}

function mostrarCarrito()
{
    let divCarrito= document.getElementById("divCarrito")
    divCarrito.innerHTML="";
    carrito.forEach(producto=>{
        //crear img
         let div = document.createElement("div");
        let img = document.createElement("img")
        img.src=producto.imagen
        div.appendChild(img)
        //
        divCarrito.appendChild(div)
    })
}