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
    { id: 'onboarding', title: '1. Registration & Subscription' },
    { id: 'org-settings', title: '2. Organization Settings' },
    { id: 'manage-user', title: '3. Manage User' },
    { id: 'product-category', title: '4. Product Category' },
    { id: 'tax-configuration', title: '5. Tax Configuration' },
    { id: 'discounts', title: '6. Discount Management' },
    { id: 'products', title: '7. Product Management' },
    { id: 'services', title: '8. Service Configuration' },
    { id: 'quotation', title: '9. Quotation' },
    { id: 'service-billing', title: '10. Service Billing' },
    { id: 'invoice-billing', title: '11. Invoice Billing' },
    { id: 'damaged-items', title: '12. Damaged Items' },
    { id: 'business-tracker', title: '13. Business Accounts Tracker' },
    { id: 'gst-reports', title: '14. GST Return Sheets' },
    { id: 'pending-invoices', title: '15. Pending Payments' },
    { id: 'declaration-list', title: '16. Declaration List' },
    { id: 'invoice-history', title: '17. Invoice History' }
  ];
}
