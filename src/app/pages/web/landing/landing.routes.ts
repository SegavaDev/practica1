import { Routes } from "@angular/router";
import { LandingComponent } from "./landing.component"

export const LANDING_ROUTES: Routes = [
    {
        path:"", component: LandingComponent
    },
    {
        path: "tareas", loadChildren: () => import("../../tareas/tareas.routes").then(r => r.TAREAS_ROUTES)
    }
];