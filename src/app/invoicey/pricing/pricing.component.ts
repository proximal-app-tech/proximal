import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent implements OnInit {
  private seoService = inject(SeoService);

  plans = [
    {
      name: 'Trial',
      priceMonthly: 0,
      priceTotal: 0,
      billingPeriod: '30 Days',
      badge: 'Evaluation',
      popular: false,
      features: [
        'Unlimited invoice generation',
        '1 user account access',
      ]
    },
    {
      name: 'Premium Monthly',
      priceTotal: 250,
      billingPeriod: '30 Days',
      badge: 'Flexible',
      popular: false,
      features: [
        'Unlimited invoice generation',
        'Unlimited user accounts access'
      ]
    },
    {
      name: 'Premium Quarterly',
      priceTotal: 750,
      billingPeriod: '90 Days',
      badge: 'Flexible',
      popular: false,
      features: [
        'Unlimited invoice generation',
        'Unlimited user accounts access'
      ]
    },
    {
      name: 'Premium Half Yearly',
      priceTotal: 1500,
      billingPeriod: '180 Days',
      badge: 'Bestseller',
      popular: false,
      features: [
        'Unlimited invoice generation',
        'Unlimited user accounts access'
      ]
    },
    {
      name: 'Premium Yearly',
      priceTotal: 3000,
      billingPeriod: '365 Days',
      badge: 'Best Value',
      popular: true,
      features: [
        'Unlimited invoice generation',
        'Unlimited user accounts access'
      ]
    }
  ];

  ngOnInit() {
    this.seoService.updateSeo({
      title: 'Simple & Affordable Billing Software Pricing | Invoicey Plans',
      description: 'Choose the plan that fits your business. Plans start from ₹250/month. Try our 30-day free trial, no credit card required.',
      keywords: 'Invoicing software pricing, affordable GST billing plans, Invoicey plans',
      url: 'https://invoicey.com/invoicey/pricing'
    });

    this.seoService.setJsonLdSchema({
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Invoicey Subscription Plans',
      'description': 'GST Invoicing, billing, and inventory management software plans starting from ₹250/month.',
      'brand': {
        '@type': 'Brand',
        'name': 'Invoicey'
      },
      'offers': {
        '@type': 'AggregateOffer',
        'priceCurrency': 'INR',
        'lowPrice': '0',
        'highPrice': '3000',
        'offerCount': '4',
        'offers': [
          {
            '@type': 'Offer',
            'name': 'Trial Plan',
            'price': '0',
            'priceCurrency': 'INR',
            'priceValidUntil': '2027-12-31',
            'url': 'https://invoicey.com/invoicey/pricing',
            'availability': 'https://schema.org/InStock'
          },
          {
            '@type': 'Offer',
            'name': 'Premium Monthly Plan',
            'price': '250',
            'priceCurrency': 'INR',
            'priceValidUntil': '2027-12-31',
            'url': 'https://invoicey.com/invoicey/pricing',
            'availability': 'https://schema.org/InStock'
          },
          {
            '@type': 'Offer',
            'name': 'Premium 6 Months Plan',
            'price': '1500',
            'priceCurrency': 'INR',
            'priceValidUntil': '2027-12-31',
            'url': 'https://invoicey.com/invoicey/pricing',
            'availability': 'https://schema.org/InStock'
          },
          {
            '@type': 'Offer',
            'name': 'Premium Yearly Plan',
            'price': '3000',
            'priceCurrency': 'INR',
            'priceValidUntil': '2027-12-31',
            'url': 'https://invoicey.com/invoicey/pricing',
            'availability': 'https://schema.org/InStock'
          }
        ]
      }
    });
  }
}
