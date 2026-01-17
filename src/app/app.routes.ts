import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvoiceyComponent } from './invoicey/invoicey.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'invoicey', component: InvoiceyComponent }
];
