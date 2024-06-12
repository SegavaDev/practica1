import { Responsive404Interface, ResponsiveBoton } from './responsive.interface';

/* Responsividad error 404 */
export class Responsive404 implements Responsive404Interface {
    private _titulo: String;
    private _texto: String;
    private _boton: ResponsiveBoton;

    constructor(titulo: String = "", texto: String = "", boton: ResponsiveBoton = {}) {
        this._titulo = titulo;
        this._texto = texto;
        this._boton = boton;
    }

    get titulo(): String {
        return this._titulo;
    }

    set titulo(titulo: String) {
        this._titulo = titulo;
    }

    get texto(): String {
        return this._texto;
    }

    set texto(texto: String) {
        this._texto = texto;
    }

    get boton(): ResponsiveBoton {
        return this._boton;
    }

    set boton(boton: ResponsiveBoton) {
        this._boton = boton;
    }
}
