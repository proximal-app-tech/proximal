import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'product' | 'article';
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private defaultImage = 'https://invoicey.com/assets/invoicey_preview.png';
  private defaultUrl = 'https://invoicey.com';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  updateSeo(config: SeoConfig) {
    const title = config.title;
    const desc = config.description;
    const url = config.url || this.defaultUrl;
    const image = config.image || this.defaultImage;
    const type = config.type || 'website';

    // Update Browser Page Title
    this.titleService.setTitle(title);

    // Standard Meta Tags
    this.metaService.updateTag({ name: 'description', content: desc });
    if (config.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: config.keywords });
    } else {
      this.metaService.removeTag('name="keywords"');
    }

    // Open Graph (OG) Tags
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: desc });
    this.metaService.updateTag({ property: 'og:image', content: image });
    this.metaService.updateTag({ property: 'og:url', content: url });
    this.metaService.updateTag({ property: 'og:type', content: type });

    // Twitter Card Tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: desc });
    this.metaService.updateTag({ name: 'twitter:image', content: image });

    // Inject Canonical URL
    this.updateCanonicalUrl(url);
  }

  private updateCanonicalUrl(url: string) {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  /**
   * Dynamic Structured Data injection (JSON-LD) for Search Rich Results
   */
  setJsonLdSchema(schema: Record<string, any>) {
    let script = this.document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.text = JSON.stringify(schema);
  }
}
