import { Component } from '@angular/core';
import { VideoIframe } from "../../../common/video-iframe/video-iframe";

@Component({
  selector: 'app-gst-reports-guide',
  standalone: true,
  imports: [VideoIframe],
  templateUrl: './gst-reports-guide.component.html',
  styleUrl: '../user-guide.component.css'
})
export class GstReportsGuideComponent {
  videoTitle = "GST Reports | Invoicey"
  videoLink = "https://youtu.be/GPUbRF8Vg8g"
}
