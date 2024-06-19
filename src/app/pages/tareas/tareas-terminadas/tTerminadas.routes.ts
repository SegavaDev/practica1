import { Routes } from "@angular/router";
import { TareasTerminadasComponent } from "./tareas-terminadas.component";

export const TAREAS_TERMINADAS_ROUTES: Routes = [
    {
        path: '', component: TareasTerminadasComponent, data: {title: 'Tareas finalizadas', favicon: 'tareas.svg'},
    }
]