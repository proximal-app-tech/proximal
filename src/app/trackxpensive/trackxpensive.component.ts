import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../services/seo.service';

@Component({
    selector: 'app-trackxpensive',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './trackxpensive.component.html',
    styleUrl: './trackxpensive.component.css'
})
export class TrackxpensiveComponent implements OnInit {
    private seoService = inject(SeoService);

    features = [
        {
            title: 'Privacy-First & Offline-First',
            description: 'Zero external cloud sync. All data remains in your local high-performance SQLite database with no telemetry, analytics, or ads.',
            icon: 'lock'
        },
        {
            title: 'Multi-Workspace Isolate',
            description: 'Create and switch between separate environments like Personal, Business, or Freelance, keeping independent budgets and ledgers.',
            icon: 'space_dashboard'
        },
        {
            title: 'Dynamic Visual Analytics',
            description: 'Gain rich financial insights with touch-optimized category breakdowns and weekly trend curves powered by custom fl_chart integrations.',
            icon: 'query_stats'
        },
        {
            title: 'Forward-Looking Planner',
            description: 'Project future cash balances weeks or months ahead by listing upcoming inflows and outflows to spot bottlenecks early.',
            icon: 'timeline'
        },
        {
            title: 'Smart Subscription Manager',
            description: 'Track custom cycle utilities, streaming, and gym renewals with proactive payment reminders to prevent unwanted renewals.',
            icon: 'calendar_today'
        },
        {
            title: 'Goal-Oriented Savings',
            description: 'Set target milestones for life events or upgrades, and monitor progress bars with real-time percentage gauges.',
            icon: 'track_changes'
        },
        {
            title: 'Impulse Spend Flags',
            description: 'Tag and identify unwanted purchases to generate dashboard warnings and celebrate zero-impulse milestones.',
            icon: 'warning'
        },
        {
            title: 'Full Data Portability',
            description: 'Export all records to CSV anytime for spreadsheet analysis, and manage local backups via local file storage.',
            icon: 'download'
        }
    ];

    ngOnInit() {
        this.seoService.updateSeo({
            title: 'TrackXpensive | Premium, Privacy-First Personal Finance Tracker',
            description: 'Take control of your spending with TrackXpensive. Features multi-workspace ledgers, offline SQLite security, cash flow planners, and subscription tracking. Free from cloud sync and ads.',
            keywords: 'privacy-first finance tracker, offline budget app, local expense tracker, multi-workspace finance, Flutter budget planner',
            url: 'https://invoicey.com/trackxpensive'
        });

        this.seoService.setJsonLdSchema({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            'name': 'TrackXpensive',
            'operatingSystem': 'Mobile (Android, iOS)',
            'applicationCategory': 'FinanceApplication',
            'description': 'A premium, offline-first personal finance tracker designed for speed, utility, and gorgeous visual analysis.',
            'offers': {
                '@type': 'Offer',
                'price': '0',
                'priceCurrency': 'USD'
            }
        });
    }
}
