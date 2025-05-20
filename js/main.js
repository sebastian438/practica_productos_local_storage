const tabla_productos = document.querySelector("#tabla_productos");
const formulario = document.querySelector("#formulario");
const fragment = document.createDocumentFragment();


formulario.addEventListener("submit",(event) => {
    event.preventDefault(); // Previene el envío del formulario
    const producto = event.target.producto.value;
    // agregarProductos(producto);


    if (validarFormulario(producto)) {
        agregarProductos(producto)
    } else{
        alert("Escribe un producto valido");
    }
});

const validarFormulario = (producto) => {
    const regExpres = /[a-zA-Z\s]{3,}/;
    return regExpres.test(producto);
}


const actualizarLocalStorage = (data) => {
    localStorage.setItem(JSON.stringify("productos", data));
}

const recogerLocalStorage = () => {
    const arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
    return arrayProductos;
}

const agregarProductos = (productoName) => {
    const productosGuardados = recogerLocalStorage();
    const producto = productosGuardados.find((elemento) => elemento.name == productoName);
    if (producto) {
        producto.cantidad++;
    } else {
        const newProduct = {
            name: productoName,
            cantidad: 1,
            id: productoName.replace(' ', '-')

        };
        productosGuardados.push(newProduct);

    }
    localStorage.setItem("productos", JSON.stringify(productosGuardados));
    
    pintarTabla();

}

const eliminarProductos = () => {

}

const pintarTabla = () => {
    tabla_productos.innerHTML = ""; 
    arrayProductos = recogerLocalStorage();
    if (arrayProductos.length > 0) {
        arrayProductos.forEach(element => {
            // let keysProducto = Object.keys(element);
             
            const filaTabla = document.createElement("TR");

            const columnaTabla = document.createElement("TD");
            columnaTabla.textContent = element.name;
            
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


}




pintarTabla();




//Dentro de evento, capturo el valor del input. Realizar un prevent default. Validadar la entrada. crear funcion de agregar producto y pasarle validar entrada. Agragamos producto validado. Recorrer array: Buscando si existe:
// si existe : incrementar

//
