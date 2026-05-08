import { Component } from '@angular/core';
import { VideoIframe } from "../../../common/video-iframe/video-iframe";

@Component({
  selector: 'app-invoice-billing-guide',
  standalone: true,
  imports: [VideoIframe],
  templateUrl: './invoice-billing-guide.component.html',
  styleUrl: '../user-guide.component.css'
})
export class InvoiceBillingGuideComponent {
  videoLink: string = "https://youtu.be/bu1CWd0JtOk";
  invoiceTitle: string = 'Invoice & Billing Guide';
}
