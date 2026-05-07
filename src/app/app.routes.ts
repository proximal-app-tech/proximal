import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvoiceyComponent } from './invoicey/invoicey.component';
import { UserGuideComponent } from './invoicey/user-guide/user-guide.component';
import { RegistrationSubscriptionGuideComponent } from './invoicey/user-guide/registration-subscription-guide/registration-subscription-guide.component';
import { GenericGuideSectionComponent } from './invoicey/user-guide/generic-guide-section.component';
import { OrganizationSettingsGuideComponent } from './invoicey/user-guide/organization-settings-guide/organization-settings-guide.component';
import { ManageUserGuideComponent } from './invoicey/user-guide/manage-user-guide/manage-user-guide.component';
import { ProductCategoryGuideComponent } from './invoicey/user-guide/product-category-guide/product-category-guide.component';
import { TaxConfigurationGuideComponent } from './invoicey/user-guide/tax-configuration-guide/tax-configuration-guide.component';
import { ProductSettingsGuideComponent } from './invoicey/user-guide/product-settings-guide/product-settings-guide.component';
import { DiscountManagementGuideComponent } from './invoicey/user-guide/discount-management-guide/discount-management-guide.component';
import { ServiceConfigurationGuideComponent } from './invoicey/user-guide/service-configuration-guide/service-configuration-guide.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'invoicey', component: InvoiceyComponent },
    { 
      path: 'invoicey/user-guide', 
      component: UserGuideComponent,
      children: [
        { path: '', redirectTo: 'onboarding', pathMatch: 'full' },
        { path: 'onboarding', component: RegistrationSubscriptionGuideComponent },
        { path: 'org-settings', component: OrganizationSettingsGuideComponent },
        { path: 'manage-user', component: ManageUserGuideComponent },
        { path: 'product-category', component: ProductCategoryGuideComponent },
        { path: 'tax-configuration', component: TaxConfigurationGuideComponent },
        { path: 'products', component: ProductSettingsGuideComponent },
        { path: 'services', component: ServiceConfigurationGuideComponent },
        { path: 'discounts', component: DiscountManagementGuideComponent },
        { path: ':section', component: GenericGuideSectionComponent }
      ]
    }
];
