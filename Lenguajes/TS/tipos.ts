import { UsuarioIf, Usuario } from './interfaces';
import { type } from 'os';

function tipos() {
    let nombre: string;
    let edad: number;
    let isAdulto: boolean;
    let id: string | number;
    // let aDatos: [];
    let aDatos: Array<any>;
    // let aNumbers: [number];
    let aNumbers: Array<Number>;
    let oDatos: {user: string};
    
    nombre = 'Pepe';
    edad = 23;
    isAdulto = true;
    id = '007';
    aDatos = [];
    aNumbers = [];
    oDatos = {user: 'Pepe'};
    aDatos.push(1);

     let oUser: UsuarioIf;
     let oUser1: Usuario;

    oUser = {
        nombre: 'Pepe',
        email: 'pepe@sample.com',
        pass: 'pepe12'
    };


    oUser1 = {
        nombre: 'Pepe',
        email: 'pepe@sample.com',
        pass: 'pepe12'
    };

    console.log(oUser1);
    console.log(typeof oUser1);

}

tipos();