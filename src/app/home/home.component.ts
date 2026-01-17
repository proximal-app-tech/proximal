import { Component, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EmailService } from '../services/email.service';
import { App } from '../app';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    private fb = inject(FormBuilder);
    private emailService = inject(EmailService);
    private app = inject(App);

    countryCodes = [
        { code: '+91', label: 'India (+91)' },
        { code: '+1', label: 'USA (+1)' },
        { code: '+44', label: 'UK (+44)' },
        { code: '+61', label: 'Australia (+61)' },
        { code: '+971', label: 'UAE (+971)' },
        { code: '+81', label: 'Japan (+81)' },
        { code: '+49', label: 'Germany (+49)' }
    ];

    contactForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        countryCode: ['+91', [Validators.required]],
        contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        email: ['', [Validators.required, Validators.email]],
        details: ['', [Validators.required, Validators.minLength(10)]]
    });

    async onSubmit() {
        if (this.contactForm.valid) {
            try {
                await this.emailService.sendContactEmail(this.contactForm.value);
                this.app.showSuccessToaster('Thank you for contacting us.');
                this.contactForm.reset({ countryCode: '+91' });
            } catch (error) {
                this.app.showSuccessToaster('Sorry, there was an error sending your message. Please try again later.');
                console.error('Submission error:', error);
            }
        } else {
            this.contactForm.markAllAsTouched();
        }
    }

    onContactInput(event: Event) {
        const input = event.target as HTMLInputElement;
        input.value = input.value.replace(/[^0-9]/g, '');
    }

    products = [
        {
            name: 'Invoicey',
            description: 'Smart Billing & Invoicing Solution for modern businesses.',
            icon: '/assets/invoicey_icon_dark_theme.png',
            link: '/invoicey'
        }
    ];
}
