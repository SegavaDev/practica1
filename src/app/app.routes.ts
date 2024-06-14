import { Routes } from '@angular/router';
import { NoFoundComponent } from './pages/error/no-found/no-found.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./pages/web/landing/landing.routes').then(
                (r) => r.LANDING_ROUTES
            ),
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
