import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private fb = inject(FormBuilder);
  protected readonly title = signal('Proximal');

  countryCodes = [
    { code: '+91', label: 'India (+91)' },
    { code: '+1', label: 'USA (+1)' },
    { code: '+44', label: 'UK (+44)' },
    { code: '+61', label: 'Australia (+61)' },
    { code: '+971', label: 'UAE (+971)' },
    { code: '+81', label: 'Japan (+81)' },
    { code: '+49', label: 'Germany (+49)' }
  ];

  showToaster = signal(false);
  toasterMessage = signal('');

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    countryCode: ['+91', [Validators.required]],
    contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    email: ['', [Validators.required, Validators.email]],
    details: ['', [Validators.required, Validators.minLength(10)]]
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted Successfully:', this.contactForm.value);
      this.showSuccessToaster('Thank you for your time. We will get back to you sortly');
      this.contactForm.reset({ countryCode: '+91' });
    } else {
      this.contactForm.markAllAsTouched();
      console.warn('Form is invalid');
    }
  }

  private showSuccessToaster(message: string) {
    this.toasterMessage.set(message);
    this.showToaster.set(true);
    setTimeout(() => {
      this.showToaster.set(false);
    }, 5000);
  }

  onContactInput(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
  }

  products = [
    {
      name: 'E-Commerce Suite',
      description: 'A complete solution for online businesses with integrated payments.',
      icon: 'shopping_bag'
    },
    {
      name: 'Enterprise CRM',
      description: 'Manage customer relationships effectively with our AI-driven insights.',
      icon: 'groups'
    },
    {
      name: 'Health & Wellness App',
      description: 'Track vitals and schedule appointments with a seamless mobile experience.',
      icon: 'health_and_safety'
    },
    {
      name: 'Smart Portfolio',
      description: 'Showcase your work with stunning, interactive layouts designed to convert.',
      icon: 'palette'
    },
    {
      name: 'Logistics Tracker',
      description: 'Real-time tracking and optimization for modern supply chains.',
      icon: 'local_shipping'
    },
    {
      name: 'SaaS Dashboard',
      description: 'Beautifully crafted metrics and analytics for your subscription business.',
      icon: 'dashboard'
    }
  ];
}
