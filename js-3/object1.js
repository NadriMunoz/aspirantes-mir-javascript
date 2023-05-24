let pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"],
};

// Imprime en la consola el valor de la llave edad.
console.log(pedro.edad);

// Agrega una propiedad con llave estatura y valor 1.8
pedro.estatura = 1.8;

// Elimina la propiedad con llave activo
delete pedro.activo;

// Recorre todas las propiedades e imprimirlas en consola
for (let key in pedro) {
  console.log(key + ": " + pedro[key]);
}

// Agrégale al objeto una función llamada saluda
pedro.saluda = function() {
  return "Hola, me llamo " + this.nombre;
};

// Llamar la función saluda y verificar el resultado
console.log(pedro.saluda());
