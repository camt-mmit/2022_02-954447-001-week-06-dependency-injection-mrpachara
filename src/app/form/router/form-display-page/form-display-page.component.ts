import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayDynamicInputComponent } from 'src/app/display/display-dynamic-input/display-dynamic-input.component';
import { ExampleDataAsyncService } from '../../example-data-async.service';
import { SectionType } from 'src/app/types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-display-page',
  standalone: true,
  imports: [CommonModule, DisplayDynamicInputComponent],
  templateUrl: './form-display-page.component.html',
  styleUrls: ['./form-display-page.component.scss'],
})
export class FormDisplayPageComponent {
  data$: Promise<SectionType[]>;

  constructor(
    private readonly dataService: ExampleDataAsyncService,
    protected router: ActivatedRoute,
  ) {
    this.data$ = this.dataService.load();
  }
}
