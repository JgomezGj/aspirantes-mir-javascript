//1. En un archivo llamado object2.js Crea un objeto literal llamado "persona" con las siguientes propiedades: 
//   nombre, edad, ciudad y profesión.

let persona = {
    nombre: "",
    edad: "",
    ciudad: "",
    profesion: "",
}

// 2. Imprime en la consola el objeto "persona" completo.

//console.log(persona)

// 3. Crea una función llamada "presentacion" que tome el objeto "persona" como argumento y 
//    devuelva una cadena de texto que incluya el nombre, la edad y la ciudad de la persona.

function presentacion(persona){
    return persona;
}

// 4. Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".

let mensaje = presentacion({nombre:"Jesús", edad:"30", ciudad:"Cali"});

// 5. Imprime en la consola el valor de la variable "mensaje".

console.log(mensaje);

// 6. Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo con algunos pasatiempos.

persona.hobbies = ["Bici", "correr", "jugar videojuegos"];

// 7. Imprime en la consola la propiedad "hobbies" del objeto "persona".

console.log(persona.hobbies);

// 8. Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies.

let llave = Object.keys(persona);
for(let i = 4; i < llave.length; i++){
    let llaves = llave[i]
    console.log(persona[llaves]);
}


