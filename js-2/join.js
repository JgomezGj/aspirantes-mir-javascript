/*Crear una función join que reciba un arreglo y retorne un string con 
todos los elementos separados por espacio sin usar el método join de los arreglos.*/

myArray = ["Aprender", "JavaScript", "es", "divertido"];
function join(){ 
    myArray = myArray.toString()
    myArray = myArray.replace(/,/g, " ")
    console.log(myArray)


}

join();