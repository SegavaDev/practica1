import { Routes } from '@angular/router';
import { NoFoundComponent } from './pages/error/no-found/no-found.component';

export const routes: Routes = [
    {
        path: "", redirectTo: "tareas", pathMatch: "full"
    },
    {
        path: 'tareas',
        loadChildren: () =>
            import('./pages/tareas/tareas.routes').then((r) => r.TAREAS_ROUTES),
    },
    {
        path: '404',
        component: NoFoundComponent,
        data: { title: '404', favicon: 'error.svg' },
    },
    {
        path: '**',
        component: NoFoundComponent,
        data: { title: '404', favicon: 'error.svg' },
    },
];
