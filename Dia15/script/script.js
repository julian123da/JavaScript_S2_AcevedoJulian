import Animal from "./Model/Animal.js";

let animal1 = new Animal("Paco","Perro");//Instancia de la clase -> Objeto
animal1.hablar();
let animal2 = new Animal("Blue","Guacamayo");
animal2.hablar();
console.log(animal1.nombre);