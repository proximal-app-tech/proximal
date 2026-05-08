import { Component } from '@angular/core';
import { VideoIframe } from "../../../common/video-iframe/video-iframe";

@Component({
  selector: 'app-pending-invoices-guide',
  standalone: true,
  imports: [VideoIframe],
  templateUrl: './pending-invoices-guide.component.html',
  styleUrl: '../user-guide.component.css'
})
export class PendingInvoicesGuideComponent {
  videoTitle = "Pending Invoices | Invoicey"
  videoLink = "https://youtu.be/5gckDXDKV14"
}
