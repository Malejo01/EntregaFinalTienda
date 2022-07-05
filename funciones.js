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
    mostrarProductos()
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
        document.getElementById("imagenProducto").value = producto.imagen;
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
    productoModificado.imagen = producto.imagen;
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
    let inputEliminar=document.createElement("input")
    inputEliminar.setAttribute("type","Number")
    inputEliminar.setAttribute("id","idProducto")
    inputEliminar.setAttribute("placeholder","Id")
    let botonEliminar= document.createElement("button")
    botonEliminar.innerHTML="Eliminar"
    listaDOM.appendChild(inputEliminar)
    listaDOM.appendChild(botonEliminar)
    // eliminar producto
    botonEliminar.addEventListener("click", () => {
        //encontrar el producto
        id=inputEliminar.innerHTML
        let encontrado = productos.find((producto)=>producto.id===id);
        if(!encontrado) {
            alert("Producto no encontrado")
        }
        else{
            let index = productos.indexOf(encontrado);

        productos.splice(index,1);
        alert("Producto Borrado");
        //mostrar resultados
        let listaDOM = document.getElementById("lista");
        listaDOM.innerHTML = "";
        mostrarProductos()
        }
    })}
    
    
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
        calcularTotal()
}

function eliminarProductoCarrito(producto) {
    carrito.splice(producto,1);
    mostrarCarrito();
    if (carrito.length==0) {
        let divCarrito= document.getElementById("divCarrito")
        let p =document.createElement("p")
        p.innerHTML="Aun no tienes productos en tu carrito T.T"
        divCarrito.appendChild(p)
    }
    calcularTotal();
}


function mostrarCarrito()
{
    let divCarrito= document.getElementById("divCarrito")
    divCarrito.innerHTML="";
    carrito.forEach(producto=>{
        //crear div
         let div = document.createElement("div");
         
         //crear elementos
         let img = document.createElement("img")
        img.src=producto.imagen
        div.appendChild(img)
        divCarrito.appendChild(div)

        let nombre =document.createElement("span")
        nombre.innerHTML = producto.nombre
        div.appendChild(nombre)

        let precio=document.createElement("span")
        precio.innerHTML=producto.precio
        div.appendChild(precio)
        //Crear Boton Quitar
        let botonQuitar=document.createElement("button")
        botonQuitar.innerHTML="Quitar"
        div.appendChild(botonQuitar)
        //evento boton quitar
        botonQuitar.addEventListener("click", () =>{
            eliminarProductoCarrito(producto)
        } )
        // subo todo
        divCarrito.appendChild(div)
    })
}



function calcularTotal() {
    totalCarrito=0
    carrito.forEach(producto=>{
    totalCarrito=totalCarrito + Number (producto.precio)
    })
    let spanTotalCarrito= document.getElementById("totalCarrito")
    spanTotalCarrito.innerHTML="Total: $"+ totalCarrito
    //boton de comprar
    if (totalCarrito!==0) 
{
    let botonPagar=document.createElement("button")
    botonPagar.innerHTML="Comprar"
    spanTotalCarrito.appendChild(botonPagar)
    botonPagar.addEventListener("click", () =>{
        let enlacePago= document.createElement("a")
        enlacePago.setAttribute("href","https://www.mercadopago.com.ar/")
        enlacePago.setAttribute("target","_blank")
    })
}    
}