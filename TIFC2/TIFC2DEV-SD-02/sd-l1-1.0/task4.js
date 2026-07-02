// Refer to Task 4 in your Instructions to complete this task

for (let i = 1; i <= 105; i++) {
    
    // Múltiplo de los TRES (3, 5 y 7)
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
        console.log("FizzBuzzWoof");
    }
    // Múltiplos de DOS combinaciones
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    else if (i % 3 === 0 && i % 7 === 0) {
        console.log("FizzWoof");
    } 
    else if (i % 5 === 0 && i % 7 === 0) {
        console.log("BuzzWoof");
    } 
    // Múltiplos INDIVIDUALES
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    else if (i % 7 === 0) {
        console.log("Woof");
    } 
    // Si no es ninguno
    else {
        console.log(i);
    }
}