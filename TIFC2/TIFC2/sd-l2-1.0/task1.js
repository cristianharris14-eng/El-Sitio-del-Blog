// const arr = []

// // Type your code below this line!



// // Type your code above this line!

// arr.forEach(element => console.log(element))

const arr = [] // Array Original (vacío)

// Usamos la notación de punto dentro de un ciclo para ir agregando
for (let i = 1; i <= 20; i++) {
    arr.push(i); // Se agrega el número actual al final
}

// Array Actualizado
arr.forEach(element => console.log(element))