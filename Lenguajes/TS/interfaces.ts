export interface UsuarioIf {
    nombre: string;
    email: string;
    pass: string;
    // saludar: Function;
}

export class Usuario implements UsuarioIf {
    nombre: string;
    email: string;
    pass: string;
    // saludar: Function;

    constructor(nombre: string, email: string, pass: string) {

    }
}
