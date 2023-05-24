
// Crear variable "receta" como objeto literal vacío
    let receta = {};

// Agrégale una propiedad nombre con valor “Sandwich”.
        receta.nombre = "Sandwich";

// Agrégale una propiedad ingredientes con un arreglo vacío.
    receta.ingredientes = [];

// Agrega un objeto al arreglo ingredientes con las siguientes propiedades
    receta.ingredientes.push({
    nombre: "Pan",
    cantidad: 2
});

// Agrega otro ingrediente al arreglo con las siguientes propiedades
    receta.ingredientes.push({
     nombre: "Queso",
     cantidad: 1
});

// imprime en la consola el nombre del primer ingrediente
    console.log(receta.ingredientes[0].nombre);

// Suma todos las cantidades de los ingredientes 
    let sumCantidades = 0;
    for (let i = 0; i < receta.ingredientes.length; i++) {
    sumCantidades += receta.ingredientes[i].cantidad;
}

// y muestra el resultado en consola.
console.log("La suma de las cantidades de los ingredientes es: " + sumCantidades);