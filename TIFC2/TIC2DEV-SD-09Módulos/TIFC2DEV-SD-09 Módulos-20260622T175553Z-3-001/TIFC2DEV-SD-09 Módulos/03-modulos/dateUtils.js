// =======================================================
// dateUtils.js
// Este archivo será nuestro módulo.
// Su responsabilidad es construir y devolver la fecha.
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

function getDateString() {
    const year = new Date().getFullYear();
    const currentDay = new Date().getDay();
    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth();

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

function printDate() {
    console.log("Today is " + getDateString());
}

// module.exports permite compartir funciones con otros archivos.
module.exports = {
    getDateString,
    printDate
};