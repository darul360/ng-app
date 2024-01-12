import { Routes } from '@angular/router';
import { ItemsComponent } from './containers/items/items.component';
import { WorkersComponent } from './containers/workers/workers.component';
import { RegisterComponent } from './containers/register/register.component';

export const routes: Routes = [
    {path:'items', component:ItemsComponent},
    {path:'workers', component:WorkersComponent},
    {path:'register', component:RegisterComponent}
];
