import { TareaInterface } from "./tarea.interface";

export class Tarea implements TareaInterface {
    private _nombre: String;
    private _descripcion: String;
    private _fecha: String;
    private _link: String;
    private _estado: boolean;

    constructor(
        nombre: String,
        descripcion: String,
        fecha: String,
        link: String,
        estado: boolean
    ) {
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._fecha = fecha;
        this._link = link;
        this._estado = estado;
    }

    get nombre() {
      return this._nombre;
    }

    set nombre(val: String) {
      this._nombre = val;
    }

    get descripcion() {
      return this._descripcion;
    }

    set descripcion(val: String) {
      this._descripcion = val;
    }

    get fecha() {
      return this._fecha;
    }

    set fecha(val: String) {
      this._fecha = val;
    }

    get link() {
      return this._link;
    }

    set link(val: String) {
      this._link = val;
    }

    get estado() {
      return this._estado;
    }

    set estado(val: boolean) {
      this._estado = val;
    }



}