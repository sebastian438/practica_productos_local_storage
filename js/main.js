const tabla_productos = document.querySelector("#tabla_productos");
const formulario = document.querySelector("#formulario");
const fragment = document.createDocumentFragment();



let arrayProductos = JSON.parse(localStorage.getItem("productos")) || [{
        id: "pruducto-prueba",
        cantidad: 1,
        nombre: "producto prueba"
    },
    {
        id: "pruducto-2",
        cantidad: 3,
        nombre: "producto 2"
    }
];

formulario.addEventListener("submit",(event) => {
    event.preventDefault(); // Previene el envío del formulario
    const producto = event.target.producto.value;
    validarFormulario(producto);
});

const validarFormulario = (producto) => {
    console.log(producto, "validar formulario");
}

const aniadirLocalStorage = () => {

}

const recogerLocalStorage = () => {
    arrayProductos = JSON.parse(localStorage.getItem("productos")) || [{
        id: "pruducto-prueba",
        cantidad: 1,
        nombre: "producto prueba"
    }];
    return arrayProductos;
}

const agregarProductos = () => {

}

const eliminarProductos = () => {

}

const pintarTabla = () => {
    tabla_productos.innerHTML = "";
    arrayProductos.forEach(element => {
        // let keysProducto = Object.keys(element);
        
        const filaTabla = document.createElement("TR");

        const columnaTabla = document.createElement("TD");
        columnaTabla.textContent = element.nombre;
        
        const columnaTabla02 = document.createElement("TD");
        columnaTabla02.textContent = element.cantidad;

        const columnaEliminar = document.createElement("TD");
        
        const botonEliminar = document.createElement("BUTTON");
        botonEliminar.textContent = "eliminar";



    
        filaTabla.append(columnaTabla);
        filaTabla.append(columnaTabla02);
        columnaEliminar.append(botonEliminar);
        filaTabla.append(columnaEliminar);

        fragment.append(filaTabla);

    });
    tabla_productos.append(fragment);
    
    const productos = recogerLocalStorage();
    console.log(productos, "pintar tabla");
    


}




pintarTabla();

