import { Component } from '@angular/core';
import { VideoIframe } from "../../../common/video-iframe/video-iframe";

@Component({
  selector: 'app-product-category-guide',
  standalone: true,
  imports: [VideoIframe],
  templateUrl: './product-category-guide.component.html',
  styleUrl: '../user-guide.component.css'
})
export class ProductCategoryGuideComponent {

  videoTitle = "Product Category Creation | Invoicey"
  videoLink = "https://youtu.be/2GxDpg5vUmw"

}
