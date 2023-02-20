import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleDataService } from '../../example-data.service';
import { ActivatedRoute } from '@angular/router';
import { SectionType } from 'src/app/types';
import { DisplaySectionComponent } from 'src/app/display/display-section/display-section.component';

@Component({
  selector: 'app-example-display-section-page',
  standalone: true,
  imports: [CommonModule, DisplaySectionComponent],
  templateUrl: './example-display-section-page.component.html',
  styleUrls: ['./example-display-section-page.component.scss'],
})
export class ExampleDisplaySectionPageComponent {
  data: SectionType;

  constructor(
    private dataService: ExampleDataService,
    private route: ActivatedRoute,
  ) {
    const sections = this.dataService.load();
    this.data = sections[+this.route.snapshot.params['index']];
  }
}
