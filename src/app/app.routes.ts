import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvoiceyComponent } from './invoicey/invoicey.component';
import { UserGuideComponent } from './invoicey/user-guide/user-guide.component';
import { RegistrationSubscriptionGuideComponent } from './invoicey/user-guide/registration-subscription-guide/registration-subscription-guide.component';
import { GenericGuideSectionComponent } from './invoicey/user-guide/generic-guide-section.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'invoicey', component: InvoiceyComponent },
    { 
      path: 'invoicey/user-guide', 
      component: UserGuideComponent,
      children: [
        { path: '', redirectTo: 'onboarding', pathMatch: 'full' },
        { path: 'onboarding', component: RegistrationSubscriptionGuideComponent },
        { path: ':section', component: GenericGuideSectionComponent }
      ]
    }
];
