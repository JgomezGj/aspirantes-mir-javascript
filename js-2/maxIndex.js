/*Crea una función maxIndex que reciba una arreglo de números y 
retorne el índice donde se encuentra el mayor. Si el arreglo está vacío debe retornar -1. */
function maxIndex(array){  
    myArray = array.indexOf(Math.max.apply(null, array));
    return myArray; 
    
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1
