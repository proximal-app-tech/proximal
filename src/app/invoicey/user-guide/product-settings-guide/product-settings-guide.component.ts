import { Component } from '@angular/core';
import { VideoIframe } from "../../../common/video-iframe/video-iframe";

@Component({
  selector: 'app-product-settings-guide',
  standalone: true,
  imports: [VideoIframe],
  templateUrl: './product-settings-guide.component.html',
  styleUrl: '../user-guide.component.css'
})
export class ProductSettingsGuideComponent {

  registrationTitle = "Product Settings | Invoicey"
  videoLink = "https://youtu.be/nuLZMyu-bK8"
}
