// =======================================================
// app.js
// Este archivo usa el módulo dateUtils.js.
// Aquí ya no necesitamos tener toda la lógica de fechas.
// =======================================================

const dateUtils = require("./dateUtils");

console.log("Using a module:");
dateUtils.printDate();

console.log("\nCalling another exported function:");
console.log(dateUtils.getDateString());