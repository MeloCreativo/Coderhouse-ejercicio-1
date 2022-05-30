// Algoritmo condicional
alert('Ejercicio 1: Algoritmo condicional.')
let name = prompt('Ingrese su nombre y apellido:') /* Solicitud de nombre */
alert('Hola ' + name + ', ' + '¿deseas comprar alcohol?') /* Consulta de intención al usuario */
let age = prompt('Ingrese su edad:') /* Solicitud de edad */

if(age >= 18) { /* Verificación por mayor de edad */
    alert('Puedes comprar alcohol.')
} else (alert('Eres menor de edad. No puedes comprar alcohol.'))
///


// Algoritmo con ciclo
alert('Ejercicio 2: Algoritmo con ciclo.')
let number = parseInt(prompt('Ingrese un número:')) /* Solicitud de nombre */
let productAmount = parseInt(prompt('Ingrese cantidad de productos deseados:')) /* Solicitud de productos */

for (let i = 1; i <= productAmount; i++) { /* Multiplicación de factores */
    number + i;
    for (let y = 1; y <= productAmount; y++) {
        let result = number * y;
        alert(number + " X " + y + " = " + result);
    }
    break;
}

/* Mensaje final */
alert("Acabas de ver los primeros " + productAmount + " " + "productos del número  " + number)
///