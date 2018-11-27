// class Persona {

//     private name: string;
//     private edad: number;
    
//     constructor (name: string, edad: number) {
//         this.name = name;
//         this.edad = edad;
//     }

//     saludar () {
//         console.log(`Hola, soy ${this.name} y tengo ${this.edad} años`);
//     }
// }

class Persona {

    // private name: string;
    // private edad: number;
    
    constructor (private name: string, private edad: number) {
        // this.name = name;
        // this.edad = edad;
    }

    saludar () {
        console.log(`Hola, soy ${this.name} y tengo ${this.edad} años`);
    }
}

const o2 = new Persona('Pepe', 23);
o2.saludar();

class Alumno extends Persona {

    // private curso;
    
    constructor(name, edad, private curso: string) {
        super(name, edad);
        // this.curso = curso;
    }

    saludar() {
        super.saludar();
        console.log(`Estudio ${this.curso}`);
    }
}

const a2 = new Alumno('Luis', 34, 'Angular');
a2.saludar();

// a.turno = 'Tarde';

const b2 = new Alumno('Juan', 32, 'Angular');

console.log(a2);
console.log(b2);
