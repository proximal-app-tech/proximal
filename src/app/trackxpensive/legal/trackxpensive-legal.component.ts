import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-trackxpensive-legal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trackxpensive-legal.component.html',
  styleUrl: './trackxpensive-legal.component.css'
})
export class TrackxpensiveLegalComponent implements OnInit {
  private seoService = inject(SeoService);
  private route = inject(ActivatedRoute);

  activeTab: 'privacy' | 'terms' = 'privacy';

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const tab = params['tab'];
      if (tab === 'privacy' || tab === 'terms') {
        this.activeTab = tab;
      }
      this.updateSeo();
    });
  }

  setActiveTab(tab: 'privacy' | 'terms') {
    this.activeTab = tab;
    this.updateSeo();
  }

  private updateSeo() {
    const isPrivacy = this.activeTab === 'privacy';
    const title = isPrivacy 
      ? 'Privacy Policy | TrackXpensive' 
      : 'Terms and Conditions | TrackXpensive';
    const description = isPrivacy
      ? 'Read the Privacy Policy for TrackXpensive to understand how we protect and handle your personal offline budget data.'
      : 'Read the Terms and Conditions governing your use of the TrackXpensive offline finance application.';

    this.seoService.updateSeo({
      title: title,
      description: description,
      keywords: 'TrackXpensive privacy policy, TrackXpensive terms and conditions, offline data security, finance app legal',
      url: `https://invoicey.com/trackxpensive/privacy-terms`
    });
  }
}
