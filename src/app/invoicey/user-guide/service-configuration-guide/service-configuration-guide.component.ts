import { Component } from '@angular/core';
import { VideoIframe } from "../../../common/video-iframe/video-iframe";

@Component({
  selector: 'app-service-configuration-guide',
  standalone: true,
  imports: [VideoIframe],
  templateUrl: './service-configuration-guide.component.html',
  styleUrl: '../user-guide.component.css'
})
export class ServiceConfigurationGuideComponent {

  registrationTitle = "Service Configuration | Invoicey"
  videoLink = "https://youtu.be/ROgYdIMCICM"
}
