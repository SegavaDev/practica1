import { Estado } from "../enums/estados.enum";
import { TareaInterface } from "./tarea.interface";

export class Tarea implements TareaInterface {
    private _nombre: string;
    private _descripcion: string;
    private _fecha: string;
    private _link: string;
    private _estado: Estado;

    constructor(
        nombre: string,
        descripcion: string,
        fecha: string,
        link: string,
        estado: Estado
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

    set nombre(val: string) {
      this._nombre = val;
    }

    get descripcion() {
      return this._descripcion;
    }

    set descripcion(val: string) {
      this._descripcion = val;
    }

    get fecha() {
      return this._fecha;
    }

    set fecha(val: string) {
      this._fecha = val;
    }

    get link() {
      return this._link;
    }

    set link(val: string) {
      this._link = val;
    }

    get estado() {
      return this._estado;
    }

    set estado(val: Estado) {
      this._estado = val;
    }



}