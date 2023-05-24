// Crear objeto "persona"
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    profesion: "Ingeniero"
  };
  
  // Imprime en la consola el objeto "persona" completo
  console.log(persona);
  
  // Crea una función llamada "presentacion" 
  function presentacion(persona) {
    return "Hola, mi nombre es " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".";
  }
  
  // Llama a la función "presentacion" y almacenar el resultado en la variable "mensaje"
  let mensaje = presentacion(persona);
  
  // Imprimir el valor de la variable "mensaje"
  console.log(mensaje);
  
  // Agregar nueva propiedad "hobbies" al objeto "persona"
  persona.hobbies = ["leer", "correr", "bailar"];
  
  // Imprimir la propiedad "hobbies" del objeto "persona"
  console.log(persona.hobbies);
  
  // Utiliza ciclo for para imprimir cada uno de los elementos del arreglo de hobbies
  for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
  }