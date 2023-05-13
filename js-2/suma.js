// Crea una función sum que reciba un arreglo de números y retorne la suma de todos los elementos:

// escribe la función sum acá

function sum(array){
    let suma = 0;
    for(let value of array){
        suma += value;
    }
    return suma
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0


