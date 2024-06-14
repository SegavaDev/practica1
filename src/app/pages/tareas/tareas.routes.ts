import { Routes } from "@angular/router";
import { TareasComponent } from "./tareas.component";

export const TAREAS_ROUTES: Routes = [
    {
        path: "", component: TareasComponent, data: {title: 'Tareas', favicon: 'tareas.svg'}
    },
    {
        path: "activas", loadChildren: () => import("./tareas-activas/tActivas.routes").then(r => r.TAREAS_ACTIVAS_ROUTES)
    }
]