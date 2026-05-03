import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-iframe',
  imports: [],
  templateUrl: './video-iframe.html',
  styleUrl: './video-iframe.css',
})
export class VideoIframe implements OnInit {

  safeUrl!: SafeResourceUrl;

  @Input() registrationTitle: string = '';

  @Input()
  set youtubeVideoUrl(url: string) {
    if (url) {
      const embedUrl = this.createEmbedUrl(url);
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }
  }

  // Convert regular YouTube link to an embed link
  private createEmbedUrl(link: string): string {
    if (link.includes('youtu.be/')) {
      const videoId = link.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (link.includes('youtube.com/watch?v=')) {
      const videoId = link.split('youtube.com/watch?v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return link;
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
