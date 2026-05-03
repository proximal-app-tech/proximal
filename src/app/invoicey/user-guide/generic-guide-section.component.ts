import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generic-guide-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-guide-section.component.html',
  styleUrl: './user-guide.component.css'
})
export class GenericGuideSectionComponent implements OnInit {
  sectionId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.sectionId = params.get('section') || '';
    });
  }
}
