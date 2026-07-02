// const arr = [1,2,3,4,5,6,7,9,10,11,12]

// // Type your code below this line!



// // Type your code above this line!

// arr.forEach(element => console.log(element))

const arr = [1,2,3,4,5,6,7,9,10,11,12] // Array Original (falta el 8)

// Notación de punto: (índice donde se trabaja, cuántos borrar, qué insertar)
arr.splice(7, 0, 8); 

// Array Actualizado: El 8 se mete en el índice 7, y el 9 se recorre.
arr.forEach(element => console.log(element))