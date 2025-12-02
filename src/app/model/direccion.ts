export class Direccion {
    //Atributos de la clase
    // //Los atributos privados se empiezan con ' _ '
    // private _idDireccion: number;
    // private _cod_postal: string;
    // private _ciudad: string;
    // private _municipio: string;
    // private _provincia: string;

    //Constructor de tipo firma ( se hace asi 100% )
    constructor(
        private _idDireccion: number,
        private _codPostal: string,
        private _ciudad: string,
        private _municipio: string,
        private _provincia: string
    ) { };

    // Getters y setters

    get getIdDireccion(): number {
        return this._idDireccion;
    }

    get getCodPostal(): string {
        return this._codPostal;
    }

    get getCiudad(): string {
        return this._ciudad;
    }

    get getMunicipio(): string {
        return this._municipio;
    }

    get getProvincia(): string {
        return this._provincia;
    }

    set setIdDireccion(idDireccion: number) {
        this._idDireccion = idDireccion;
    }

    set setCodPostal(codPostal: string) {
        this._codPostal = codPostal;
    }

    set setCiudad(ciudad: string) {
        this._ciudad = ciudad;
    }

    set setMunicipio(municipio: string) {
        this._municipio = municipio;
    }
    set setProvincia(provincia: string) {
        this._provincia = provincia;
    }

}
