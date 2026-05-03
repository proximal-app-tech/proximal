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
    { id: 'org-settings', title: '2. Organization Settings' },
    { id: 'manage-user', title: '3. Manage User' },
    { id: 'products', title: '4. Product Management' },
    { id: 'discounts', title: '5. Discount Management' },
    { id: 'subscriptions', title: '6. Subscriptions & Payments' },
    { id: 'billing', title: '7. Quotations & Invoices' },
    { id: 'crm', title: '8. CRM (Customers & Vendors)' },
    { id: 'reporting', title: '9. Declarations & Reporting' }
  ];
}
