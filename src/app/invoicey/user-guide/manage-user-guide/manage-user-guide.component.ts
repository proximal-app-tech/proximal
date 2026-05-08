import { Component } from '@angular/core';
import { VideoIframe } from "../../../common/video-iframe/video-iframe";

@Component({
  selector: 'app-manage-user-guide',
  standalone: true,
  imports: [VideoIframe],
  templateUrl: './manage-user-guide.component.html',
  styleUrl: '../user-guide.component.css'
})
export class ManageUserGuideComponent {

  videoTitle = "Manage Team Members | Invoicey"
  videoLink = "https://youtu.be/kLjC183yxZc"

}
