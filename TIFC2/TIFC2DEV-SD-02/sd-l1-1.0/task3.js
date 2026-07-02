// Refer to Task 3 in your Instructions to complete this task

for (let i = 1; i <= 105; i++) {
    // 1. ¿Es múltiplo de 3 Y TAMBIÉN de 5? 
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    // 2. Si no fue el primero, ¿es solo múltiplo de 3?
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    // 3. Si no, ¿es solo múltiplo de 5?
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    // 4. Si no cumple ninguna, imprime el número normal
    else {
        console.log(i);
    }
}