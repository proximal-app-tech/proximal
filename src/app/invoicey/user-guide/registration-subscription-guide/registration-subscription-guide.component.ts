import { Component } from '@angular/core';
import { VideoIframe } from "../../../common/video-iframe/video-iframe";

@Component({
  selector: 'app-registration-subscription-guide',
  standalone: true,
  imports: [VideoIframe],
  templateUrl: './registration-subscription-guide.component.html',
  styleUrl: './registration-subscription-guide.component.css'
})
export class RegistrationSubscriptionGuideComponent {
  videoLink: string = "https://youtu.be/0-uO8d28ilo";
  registrationTitle: string = 'Registration and Subscription Guide';

  constructor() { }

  ngOnInit(): void {
  }
}
