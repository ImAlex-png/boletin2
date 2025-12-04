import { Alumno } from "./alumno";
import { Asignatura } from "./asignatura";

export class Matricula {

    constructor(
        private _alumno: Alumno,
        private _asignatura : Asignatura,
        private _notaT1 : number,
        private _notaT2 : number,
        private _notaT3 : number,
    ){};

    get alumno() : Alumno { return this._alumno}
    get asignatura(): Asignatura { return this._asignatura}
    get notaT1() : number { return this._notaT1}
    get notaT2(): number { return this._notaT2}
    get notaT3(): number { return this._notaT3}

    set alumno(alumno : Alumno){ this._alumno}
    set asignatura(asignatura : Asignatura){ this._asignatura }
    set notaT1(notaT2 : number) { this._notaT1}
    set notaT2(notaT2 : number) { this._notaT2}
    set notaT3(notaT2 : number) { this._notaT3}

    public getNotaMedia(): number{
        return ((this._notaT1 + this._notaT2 + this._notaT3) / 3)
    }

}
