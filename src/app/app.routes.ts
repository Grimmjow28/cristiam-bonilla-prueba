import { Route } from '@angular/router';

export const routes: Route[]= [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'bank-administrator'
    },
    {
        path:'bank-administrator',
        loadComponent: () => 
           import('../app/views/bank-administrator/bank-administrator.component').then(mod => mod.BankAdministratorComponent)
    }
];
