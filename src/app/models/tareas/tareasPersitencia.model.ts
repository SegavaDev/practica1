import { TareaInterface } from "./tarea.interface";
import { TareaPersistenciaInterface } from "./tareasPersistencia.interface";

export class TareasPeristencia implements TareaPersistenciaInterface {
    private _activas: [(TareaInterface | undefined)?];
    private _terminadas: [(TareaInterface | undefined)?];

    constructor(
        activas: [(TareaInterface | undefined)],
        terminadas: [(TareaInterface | undefined)]
    ) {
        this._activas = activas;
        this._terminadas = terminadas;
    }

    get activas() {
      return this._activas;
    }

    set activas(val: [(TareaInterface | undefined)?]) {
      this._activas = val;
    }

    get terminadas() {
      return this._terminadas;
    }

    set terminadas(val: [(TareaInterface | undefined)?]) {
      this._terminadas = val;
    }




}