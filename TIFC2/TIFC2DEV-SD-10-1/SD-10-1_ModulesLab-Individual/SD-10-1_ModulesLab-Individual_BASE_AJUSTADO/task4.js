// Tarea 4
// Exporta una clase llamada FriendAge.
// Debe incluir un método returnAge() que devuelva:
// <name> is <age> today!

export class FriendAge {

     constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  returnAge() {
    return `${this.name} is ${this.age} today!`;
  }
}
