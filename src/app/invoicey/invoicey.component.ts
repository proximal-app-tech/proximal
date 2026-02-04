import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-invoicey',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './invoicey.component.html',
    styleUrl: './invoicey.component.css'
})
export class InvoiceyComponent {
    features = [
        {
            title: 'Dynamic Invoice Generation',
            description: 'Create professional PDF invoices with automated tax calculations (CGST, SGST, IGST) and custom branding.',
            icon: 'description'
        },
        {
            title: 'Inventory Management',
            description: 'Efficiently track stock levels, manage categories, and organize products with HSN/SKU codes.',
            icon: 'inventory_2'
        },
        {
            title: 'QR/Barcode Scanning',
            description: 'Speed up the billing process with integrated mobile scanning for quick product lookup.',
            icon: 'qr_code_scanner'
        },
        {
            title: 'Vendor Management',
            description: 'Maintain a comprehensive supplier directory with interactive one-click contact options for Phone, WhatsApp, and Email.',
            icon: 'store'
        },
        {
            title: 'Multi-admin & Modern UI',
            description: 'Secure role-based access control and a modernized vertical card-list dashboard layout for effortless management.',
            icon: 'manage_accounts'
        },
        {
            title: 'Integrated Payments',
            description: 'Subscription management with payment history and automated status updates.',
            icon: 'payments'
        }
    ];

    technicalHighlights = [
        { label: 'Platform', value: 'Cross-Platform (Flutter)' },
        { label: 'Backend', value: 'Real-time (Supabase)' },
        { label: 'Security', value: 'RLS (Row Level Security)' },
        { label: 'UI/UX', value: 'Modern & Responsive' }
    ];
}
