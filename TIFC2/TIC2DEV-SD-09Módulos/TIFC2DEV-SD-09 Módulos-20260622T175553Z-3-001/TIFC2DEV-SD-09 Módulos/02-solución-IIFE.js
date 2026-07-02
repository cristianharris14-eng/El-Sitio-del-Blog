// =======================================================
// 02-solucion-iife.js
// Objetivo:
// Resolver los conflictos de nombres y mostrar tres formas:
// 1. Función tradicional
// 2. Función anónima inmediatamente invocada
// 3. Arrow function inmediatamente invocada
// =======================================================

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const ordinal = [
    null,
    "st", "nd", "rd", "th", "th", "th", "th", "th", "th",
    "th", "th", "th", "th", "th", "th", "th", "th", "th", "th",
    "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "st"
];

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let year = new Date().getFullYear();

// Ahora usamos nombres más específicos.
// No es obligatorio usar exactamente estos nombres,
// pero sí conviene que sean claros.
let currentDay = new Date().getDay();
let currentDate = new Date().getDate();
let currentMonth = new Date().getMonth();


// =======================================================
// OPCIÓN 1: FUNCIÓN TRADICIONAL
// =======================================================
// Intención:
// Usar una función con nombre cuando queremos reutilizar lógica.

function getDateString() {
    return (
        days[currentDay] +
        " " +
        currentDate +
        ordinal[currentDate] +
        " " +
        months[currentMonth] +
        " " +
        year
    );
}

function printDateTraditional() {
    console.log("Traditional function:");
    console.log("Today is " + getDateString());
}

printDateTraditional();


// =======================================================
// OPCIÓN 2: FUNCIÓN ANÓNIMA + IIFE
// =======================================================
// IIFE significa Immediately Invoked Function Expression.
// En español: expresión de función invocada inmediatamente.
// Intención:
// Crear una función, ejecutarla en ese momento y no dejarla
// disponible con un nombre para usarla después.

function printDateAnonymousIIFE() {
    console.log("\nAnonymous function IIFE:");

    console.log(
        "Today is " +
        (function () {
            return (
                days[currentDay] +
                " " +
                currentDate +
                ordinal[currentDate] +
                " " +
                months[currentMonth] +
                " " +
                year
            );
        })()
    );
}

printDateAnonymousIIFE();


// =======================================================
// OPCIÓN 3: ARROW FUNCTION + IIFE
// =======================================================
// Intención:
// Hacer lo mismo que la función anónima,
// pero con sintaxis de flecha.

function printDateArrowIIFE() {
    console.log("\nArrow function IIFE:");

    console.log(
        "Today is " +
        (() =>
            days[currentDay] +
            " " +
            currentDate +
            ordinal[currentDate] +
            " " +
            months[currentMonth] +
            " " +
            year)()
    );
}

printDateArrowIIFE();