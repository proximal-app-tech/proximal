import { Component } from '@angular/core';
import { VideoIframe } from "../../../common/video-iframe/video-iframe";

@Component({
  selector: 'app-service-billing-guide',
  standalone: true,
  imports: [VideoIframe],
  templateUrl: './service-billing-guide.component.html',
  styleUrl: '../user-guide.component.css'
})
export class ServiceBillingGuideComponent {

  videoLink: string = "https://youtu.be/g32P9hNDmEs";
  serviceTitle: string = 'Service & Billing Guide';
}
