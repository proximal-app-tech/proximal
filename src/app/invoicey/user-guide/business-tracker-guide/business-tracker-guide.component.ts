import { Component } from '@angular/core';
import { VideoIframe } from "../../../common/video-iframe/video-iframe";

@Component({
  selector: 'app-business-tracker-guide',
  standalone: true,
  imports: [VideoIframe],
  templateUrl: './business-tracker-guide.component.html',
  styleUrl: '../user-guide.component.css'
})
export class BusinessTrackerGuideComponent {

  videoTitle = "Business Accounts Tracker | Invoicey"
  videoLink = "https://youtu.be/ttJUDB28Y08"

}
