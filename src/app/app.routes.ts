import { Routes } from '@angular/router';
import { ItemsComponent } from './containers/items/items.component';
import { WorkersComponent } from './containers/workers/workers.component';
import { RegisterComponent } from './containers/register/register.component';

export const routes: Routes = [
    { path: 'items', loadComponent: ()=>import('../app/containers/items/items.component').then(c=>c.ItemsComponent) },
    { path: 'workers', loadComponent: () => import('../app/containers/workers/workers.component').then(c => c.WorkersComponent) },
    { path: 'register', loadComponent: () => import('../app/containers/register/register.component').then(c => c.RegisterComponent) },
];