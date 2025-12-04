import { Direccion } from "./direccion";

export class Alumno {

    constructor(
        private _dni : string,
        private _nombre : string,
        private _apellidos : string,
        private _fechaNacimiento : Date,
        private _direccion : Direccion,
    ){};

    //Getters y setters
    get dni() : string { return this._dni;}
    get nombre() : string { return this._nombre;}
    get apellidos() : string { return this._apellidos;}
    get fechaNacimiento() : Date { return this._fechaNacimiento;}
    get direccion() : Direccion { return this._direccion;}

    set dni(dni : string ) { this._dni = dni}
    set nombre(nombre : string ) { this._nombre = nombre}
    set apellidos(apellidos : string ) { this._apellidos = apellidos}
    set fechaNacimiento(fechaNacimiento : Date ) { this._fechaNacimiento = fechaNacimiento}
    set direccion(direccion : Direccion ) { this._direccion = direccion}

    public getEdad() : number{
        let año = this._fechaNacimiento.getFullYear();
        let añoAhora = new Date().getFullYear();
        return añoAhora - año;
    }
}
