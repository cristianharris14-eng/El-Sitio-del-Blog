import validator from 'validator';

console.log("Validando correos:");

console.log(validator.isEmail('mari@gmail.com')); //True
console.log(validator.isEmail('mari-sincorreo')); // False
