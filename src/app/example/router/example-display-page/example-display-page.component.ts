import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleDataService } from '../../example-data.service';
import { SectionType } from 'src/app/types';
import { DisplayDynamicInputComponent } from 'src/app/display/display-dynamic-input/display-dynamic-input.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-example-display-page',
  standalone: true,
  imports: [CommonModule, DisplayDynamicInputComponent],
  templateUrl: './example-display-page.component.html',
  styleUrls: ['./example-display-page.component.scss'],
})
export class ExampleDisplayPageComponent {
  data: SectionType[];

  constructor(
    private readonly dataService: ExampleDataService,
    protected readonly router: ActivatedRoute,
  ) {
    this.data = this.dataService.load();
  }
}
