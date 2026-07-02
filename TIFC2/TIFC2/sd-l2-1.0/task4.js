const arr = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14] // Array Original (con el 5 repetido)

// Notación de punto: nos paramos en el índice 5 y borramos 1 elemento
arr.splice(5, 1); 

// Array Actualizado: el segundo 5 desaparece y el array queda limpio
arr.forEach(element => console.log(element))