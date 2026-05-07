import { Component } from '@angular/core';
import { VideoIframe } from "../../../common/video-iframe/video-iframe";

@Component({
  selector: 'app-discount-management-guide',
  standalone: true,
  imports: [VideoIframe],
  templateUrl: './discount-management-guide.component.html',
  styleUrl: '../user-guide.component.css'
})
export class DiscountManagementGuideComponent {

  registrationTitle = "Discount Management | Invoicey"
  videoLink = "https://youtu.be/E8mhXIfuwSM"
}
