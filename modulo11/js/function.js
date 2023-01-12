console.log("Hola mundo");

let numero1 = 3;
let numero2 = 4;

let resultado = numero1+numero2;

console.log("La suma de numero1 y numero2 es: "+ resultado)

document.getElementById('boton').onclick = function() {
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML= "Estamos probando nuestro primer evento"

}

document.addEventListener('click', function() {
    
}