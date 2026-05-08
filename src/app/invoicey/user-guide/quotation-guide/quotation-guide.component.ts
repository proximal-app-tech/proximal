import { Component } from '@angular/core';
import { VideoIframe } from "../../../common/video-iframe/video-iframe";

@Component({
  selector: 'app-quotation-guide',
  standalone: true,
  imports: [VideoIframe],
  templateUrl: './quotation-guide.component.html',
  styleUrl: '../user-guide.component.css'
})
export class QuotationGuideComponent {


  videoLink: string = "https://youtu.be/vxGVFA06X28";
  quotationTitle: string = 'Quotation Guide';
}
