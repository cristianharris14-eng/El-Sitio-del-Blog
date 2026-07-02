// Tarea 3
// Exporta una función llamada ageCalculator.
// Debe recibir year, month y day, y devolver la edad actual.

export function ageCalculator(year, month, day) {
    const today = new Date();
    const birth= new Date(year, month, day); 
  
  // Calculamos la edad básica restando los años
  let age = today.getFullYear() - birth.getFullYear();
  
  // Comparamos los meses y días usando los métodos de Date para ver si ya cumplió años
  const monthDifference = today.getMonth() - birth.getMonth();
  
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  // El ejercicio pide "devolver la edad actual"
  return age;

}
