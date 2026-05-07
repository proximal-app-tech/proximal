import { Component } from '@angular/core';
import { VideoIframe } from "../../../common/video-iframe/video-iframe";

@Component({
  selector: 'app-tax-configuration-guide',
  standalone: true,
  imports: [VideoIframe],
  templateUrl: './tax-configuration-guide.component.html',
  styleUrl: '../user-guide.component.css'
})
export class TaxConfigurationGuideComponent {
  registrationTitle = "Tax Configuration | Invoicey"
  videoLink = "https://youtu.be/nD9PBJQw5Wk"
}
