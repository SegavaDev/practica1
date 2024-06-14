import { TareaInterface } from "./tarea.interface";
import { TareaPersistenciaInterface } from "./tareasPersistencia.interface";

export class TareasPeristencia implements TareaPersistenciaInterface {
    private _activas: TareaInterface[];
    private _terminadas: TareaInterface[];

    constructor(
        activas: TareaInterface[] ,
        terminadas: TareaInterface[]
    ) {
        this._activas = activas;
        this._terminadas = terminadas;
    }

    get activas() {
      return this._activas;
    }

    set activas(val: TareaInterface[]) {
      this._activas = val;
    }

    get terminadas() {
      return this._terminadas;
    }

    set terminadas(val: TareaInterface[]) {
      this._terminadas = val;
    }




}