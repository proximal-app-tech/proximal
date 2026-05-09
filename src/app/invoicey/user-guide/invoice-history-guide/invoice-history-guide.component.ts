import { Component } from '@angular/core';
import { VideoIframe } from "../../../common/video-iframe/video-iframe";

@Component({
  selector: 'app-invoice-history-guide',
  standalone: true,
  imports: [VideoIframe],
  templateUrl: './invoice-history-guide.component.html',
  styleUrl: '../user-guide.component.css'
})
export class InvoiceHistoryGuideComponent {

  videoTitle = "Invoice History | Invoicey"
  videoLink = "https://youtu.be/Xvo0IpMKTkw"
}
