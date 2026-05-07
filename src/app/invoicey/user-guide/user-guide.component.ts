import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-guide',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './user-guide.component.html',
  styleUrl: './user-guide.component.css'
})
export class UserGuideComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  sections = [
    { id: 'onboarding', title: '1. Registration & Subscription Guide' },
    { id: 'org-settings', title: '2. Organization Settings' },
    { id: 'manage-user', title: '3. Manage User' },
    { id: 'product-category', title: '4. Product Category' },
    { id: 'tax-configuration', title: '5. Tax Configuration' },
    { id: 'discounts', title: '6. Discount Management' },
    { id: 'products', title: '7. Product Management' },
    { id: 'services', title: '8. Service Configuration' },
    { id: 'subscriptions', title: '9. Subscriptions & Payments' },
    { id: 'billing', title: '10. Quotations & Invoices' },
    { id: 'crm', title: '11. CRM (Customers & Vendors)' },
    { id: 'reporting', title: '12. Declarations & Reporting' }
  ];
}
