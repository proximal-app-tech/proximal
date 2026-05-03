import { Component } from '@angular/core';
import { VideoIframe } from "../../../common/video-iframe/video-iframe";

@Component({
  selector: 'app-organization-settings-guide',
  standalone: true,
  imports: [VideoIframe],
  templateUrl: './organization-settings-guide.component.html',
  styleUrl: '../user-guide.component.css'
})
export class OrganizationSettingsGuideComponent {

  videoLink: string = "https://youtu.be/Ufsf2LSzHtY";
  registrationTitle: string = 'Organization Settings Guide';

}
