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
  sections = [
    { id: 'onboarding', title: '1. Registration & Subscription Guide' },
    { id: 'products', title: '2. Product Management' },
    { id: 'discounts', title: '3. Discount Management' },
    { id: 'users', title: '4. User Management' },
    { id: 'org-settings', title: '5. Organization Settings' },
    { id: 'subscriptions', title: '7. Subscriptions & Payments' },
    { id: 'billing', title: '8. Quotations & Invoices' },
    { id: 'crm', title: '9. CRM (Customers & Vendors)' },
    { id: 'reporting', title: '10. Declarations & Reporting' }
  ];
}
