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
let carrito =[]
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
        //Crear imagen
        let td = document.createElement("td");
        let img = document.createElement("img");
        img.src = producto.imagen
        td.appendChild(img)
        tr.appendChild(td)

        //crear Nombre
        let tdNombre = document.createElement("td")
        let spanNombre= document.createElement("span");
        spanNombre.innerHTML= producto.nombre
        tdNombre.appendChild(spanNombre)
        tr.appendChild(tdNombre)

        //crear Precio
        let tdPrecio = document.createElement("td")
        let spanPrecio= document.createElement("span");
        spanPrecio.innerHTML= producto.precio
        tdPrecio.appendChild(spanPrecio)
        tr.appendChild(tdPrecio)
        //Crear Boton Agregar
        let tdBotonAgregar=document.createElement("td")
        let botonAgregar=document.createElement("button")
        botonAgregar.setAttribute("id", "botonAgregar");
        botonAgregar.innerHTML="Agregar"
        botonAgregar.addEventListener("click", () => {
            agregarProducto (producto)
        })
        tdBotonAgregar.appendChild(botonAgregar)
        tr.appendChild(tdBotonAgregar)
    // subo todo a la fila
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



//------------------------------------------------------------Funciones



/* Tareas 
al añadir un producto se tiene que agregar tambien una imagen por URL
Eliminar un producto en especifico debe hacerse por DOM y no por Alert
El enter debe hacer que  funcione como el boton ELEGIR
carrito en formato de tablas
el carrito de comprar se debe mostrar en un lado, y con imagenes mas chicas
el boton de comprar puede llevar a una nueva pestaña de compras
los botones dentro de productos y de carrito deben tener efectos mouseover (negro?)

*/