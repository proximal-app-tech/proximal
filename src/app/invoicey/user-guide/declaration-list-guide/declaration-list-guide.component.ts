import { Component } from '@angular/core';
import { VideoIframe } from "../../../common/video-iframe/video-iframe";

@Component({
  selector: 'app-declaration-list-guide',
  standalone: true,
  imports: [VideoIframe],
  templateUrl: './declaration-list-guide.component.html',
  styleUrl: '../user-guide.component.css'
})
export class DeclarationListGuideComponent {
  videoTitle = "Declaration List | Invoicey"
  videoLink = "https://youtu.be/au-anmUCl3Q"
}
