import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private router = inject(Router);

  protected readonly title = signal('Proximal');
  isInvoiceyRoute = signal(false);
  isMobileMenuOpen = signal(false);

  showToaster = signal(false);
  toasterMessage = signal('');

  constructor() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      const url = event.urlAfterRedirects || event.url;
      this.isInvoiceyRoute.set(url.startsWith('/invoicey'));
      this.isMobileMenuOpen.set(false);
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  // The toaster logic remains in App for global accessibility
  public showSuccessToaster(message: string) {
    this.toasterMessage.set(message);
    this.showToaster.set(true);
    setTimeout(() => {
      this.showToaster.set(false);
    }, 5000);
  }
}
