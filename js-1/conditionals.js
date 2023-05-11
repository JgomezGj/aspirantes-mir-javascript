function calculaColor(num){
    let color;
    if(num === 1){
        color = "Negro"
    }
    else if(num === 2){
        color = "blanco"     
    }
    else if(num === 3){
        color = "Azul"
    }
    else{
        color = "Verde"
    }
    return "El color es " + color;
}

console.log(calculaColor(1));
console.log(calculaColor(2));
console.log(calculaColor(3));
console.log(calculaColor(8));