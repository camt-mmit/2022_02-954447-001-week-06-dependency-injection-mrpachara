import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplaySectionComponent } from 'src/app/display/display-section/display-section.component';
import { SectionType } from 'src/app/types';
import { ExampleDataAsyncService } from '../../example-data-async.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-display-section-page',
  standalone: true,
  imports: [CommonModule, DisplaySectionComponent],
  templateUrl: './form-display-section-page.component.html',
  styleUrls: ['./form-display-section-page.component.scss'],
})
export class FormDisplaySectionPageComponent {
  data$: Promise<SectionType>;

  constructor(
    private readonly dataService: ExampleDataAsyncService,
    private readonly router: ActivatedRoute,
  ) {
    const index = this.router.snapshot.params['index'];
    this.data$ = this.dataService.load().then((data) => data[index]);
  }
}
