import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvoiceyComponent } from './invoicey/invoicey.component';
import { UserGuideComponent } from './invoicey/user-guide/user-guide.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'invoicey', component: InvoiceyComponent },
    { path: 'invoicey/user-guide', component: UserGuideComponent }
];
