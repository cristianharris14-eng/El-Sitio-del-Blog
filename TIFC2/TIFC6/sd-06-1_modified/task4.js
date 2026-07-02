// 1. Creamos la función constructora 
function Journey(start, end) {
    this.start = start;
    this.end = end;
}

// 2. Creamos las constantes jalando los datos de la terminal
const from = process.argv[3];
const to = process.argv[4];



const travel = new Journey(from, to)

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")