import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../services/seo.service';

@Component({
    selector: 'app-invoicey',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './invoicey.component.html',
    styleUrl: './invoicey.component.css'
})
export class InvoiceyComponent implements OnInit {
    private seoService = inject(SeoService);

    features = [
        {
            title: 'GST-Compliant Invoicing',
            description: 'Create professional invoices with automatic CGST, SGST, and IGST calculations tailored to Indian tax rules.',
            icon: 'description'
        },
        {
            title: 'Inventory & HSN Codes',
            description: 'Track stock levels, manage item categories, and map products with official HSN/SKU mappings.',
            icon: 'inventory_2'
        },
        {
            title: 'Barcode & POS Billing',
            description: 'Accelerate checkout times with quick mobile camera barcode scanning and POS system integration.',
            icon: 'qr_code_scanner'
        },
        {
            title: 'Estimates & Quotation Maker',
            description: 'Convert leads to clients by building premium quotations and tracking their status in real-time.',
            icon: 'store'
        },
        {
            title: 'Sales Ledgers & Tracking',
            description: 'Access complete vendor transactions, payment logs, and sales dashboards to audit business health.',
            icon: 'manage_accounts'
        },
        {
            title: 'Online Payment Gates',
            description: 'Collect client invoices instantly through Razorpay gateway integrations with automatic receipt generation.',
            icon: 'payments'
        }
    ];

    technicalHighlights = [
        { label: 'Platform', value: 'Mobile, Tablet' },
        { label: 'Compliance', value: 'GST-Compliant (CGST/SGST/IGST)' },
    ];

    ngOnInit() {
        this.seoService.updateSeo({
            title: 'Invoicey | Simple, Fast & compliant Invoicing & Billing Software',
            description: 'Automate your billing, track inventory, and generate GST-compliant invoices with Invoicey. Perfect for Indian SMBs. Start your 30-day free trial today!',
            keywords: 'GST billing software, easy invoicing platform, invoice generator for small business, SaaS billing app',
            url: 'https://invoicey.com/invoicey'
        });

        this.seoService.setJsonLdSchema({
            '@context': 'https://schema.org',
            '@graph': [
                {
                    '@type': 'SoftwareApplication',
                    'name': 'Invoicey',
                    'operatingSystem': 'All (Web, Android, iOS)',
                    'applicationCategory': 'BusinessApplication',
                    'aggregateRating': {
                        '@type': 'AggregateRating',
                        'ratingValue': '4.8',
                        'ratingCount': '120'
                    },
                    'offers': {
                        '@type': 'Offer',
                        'price': '250',
                        'priceCurrency': 'INR'
                    }
                },
                {
                    '@type': 'FAQPage',
                    'mainEntity': [
                        {
                            '@type': 'Question',
                            'name': 'Is Invoicey GST-compliant?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'Yes, Invoicey automatically calculates CGST, SGST, and IGST according to Indian tax regulations and creates exportable GST-ready financial reports.'
                            }
                        },
                        {
                            '@type': 'Question',
                            'name': 'Does Invoicey offer a free trial?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'Yes, we offer a 30-day free trial with access to all invoicing, inventory, and reporting features. No credit card is required to start.'
                            }
                        },
                        {
                            '@type': 'Question',
                            'name': 'Is Invoicey compatible with thermal printers?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'Yes, Invoicey supports standard 2-inch and 3-inch Bluetooth thermal printers, as well as A4/A5 laser/inkjet printers for professional billing prints.'
                            }
                        }
                    ]
                }
            ]
        });
    }
}
