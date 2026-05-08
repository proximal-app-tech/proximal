import { Component } from '@angular/core';
import { VideoIframe } from "../../../common/video-iframe/video-iframe";

@Component({
  selector: 'app-damaged-items-guide',
  standalone: true,
  imports: [VideoIframe],
  templateUrl: './damaged-items-guide.component.html',
  styleUrl: '../user-guide.component.css'
})
export class DamagedItemsGuideComponent { }
