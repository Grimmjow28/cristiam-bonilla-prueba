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
    },
    {
        path:'add-bank-product',
        loadComponent: () => 
           import('../app/views/add-bank-account/add-bank-account.component').then(mod => mod.AddBankAccountComponent)
    }
];
