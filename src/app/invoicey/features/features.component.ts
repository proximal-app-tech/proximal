import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent implements OnInit {
  private seoService = inject(SeoService);

  featuresList = [
    {
      id: 'gst-billing',
      title: 'GST-Compliant Billing',
      badge: 'Tax Compliance',
      description: 'Fully automated tax engine that computes CGST, SGST, and IGST percentages instantly based on customer location. Output clean, GST-ready invoices that are formatted for rapid reporting.',
      icon: 'receipt_long',
      details: [
        'Automated CGST/SGST/IGST computation',
        'State-code verification for precise IGST mapping',
        'Custom declarations and tax invoice prefixes',
        'Instant exportable GST transaction ledgers'
      ]
    },
    {
      id: 'inventory',
      title: 'Advanced Inventory Control',
      badge: 'Stock Management',
      description: 'Keep tabs on stock levels, map HSN codes, and define safety stock thresholds. Minimize stockouts and damaged stock leakage with dedicated tracking.',
      icon: 'inventory_2',
      details: [
        'HSN code mappings and SKU organization',
        'Real-time stock level counters and low-stock alerts',
        'Damaged items tracking and log reports',
        'Stock history and categories categorization'
      ]
    },
    {
      id: 'pos-barcode',
      title: 'POS & Camera Barcode Scanning',
      badge: 'Fast Checkout',
      description: 'Convert any smartphone camera or USB scanner into a high-speed barcode reader. Add products to cart and generate invoices within seconds.',
      icon: 'qr_code_scanner',
      details: [
        'Zero-latency product search via barcodes',
        'Integrated mobile scanner support (no external hardware)',
        'Quick-add cart checkout operations',
        'Instant totals calculations with automatic rounding'
      ]
    },
    {
      id: 'estimates-quotes',
      title: 'Estimates & Quotation Builder',
      badge: 'Sales Funnel',
      description: 'Draft professional estimates and quotation PDFs to share with prospects. Track status transitions from Draft to Accepted or Rejected.',
      icon: 'request_quote',
      details: [
        'One-click quotation maker with item catalogs',
        'Visual status tracking dashboard',
        'Seamless conversion from Quote to invoice bill',
        'Custom note additions and validity timers'
      ]
    },
    {
      id: 'payments',
      title: 'Razorpay Gateway & Invoices',
      badge: 'Integrations',
      description: 'Incorporate online payment links directly onto invoices. Enable seamless payments using Razorpay and automate status markings.',
      icon: 'credit_card',
      details: [
        'Integrated Razorpay link generations',
        'Automatic payment status sync',
        'UPI, NetBanking, and credit card support',
        'Comprehensive payment ledger reports'
      ]
    }
    // ,
    // {
    //   id: 'printing',
    //   title: 'Thermal & Laser Printer Support',
    //   badge: 'Hardware Support',
    //   description: 'Print invoice slips in A4, A5, or thermal paper rolls. Full support for Bluetooth, Wi-Fi, and USB print protocols.',
    //   icon: 'print',
    //   details: [
    //     '2-inch & 3-inch thermal printer layouts',
    //     'A4 & A5 standard invoice templates',
    //     'Clean text spacing to avoid paper waste',
    //     'Direct print triggering on compile'
    //   ]
    // }
  ];

  ngOnInit() {
    this.seoService.updateSeo({
      title: 'Invoicey Features | Billing, Inventory & GST Reports',
      description: 'Explore features like point-of-sale billing, barcode scanning, HSN/SKU management, quotation building, and CGST/SGST/IGST tax reports.',
      keywords: 'Barcode billing system, inventory tracker, GST report generator, quotation maker',
      url: 'https://invoicey.com/invoicey/features'
    });
  }
}
