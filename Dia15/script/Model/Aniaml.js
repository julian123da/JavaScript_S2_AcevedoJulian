/*
Una clase es la representación más abstracta posible de 
un objeto de la vida real, el cual tiene características (atributos)
y funciones (métodos) que lo caracterizan.
 */
export default class Animal{
    /*El constructor es el indicativo de cómo una instancia de la clase
    se debe crear(objeto) */
    //let nombre="";
    //let especie)"";
    constructor(nombreAfuera,especieAfuera){
  
          //Los atributos son las características que un
          //objeto tendrá.
          this.nombre=nombreAfuera;
          this.especie=especieAfuera;
    }
    //Los métodos son las funciones que podrá hacer
    hablar(){
      console.log(`El animal ${this.nombre} de la especie ${this.especie} esta hablando!!!`);
    }
  }