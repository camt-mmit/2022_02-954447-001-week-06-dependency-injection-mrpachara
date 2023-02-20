import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionType } from 'src/app/types';
import { ExampleDataAsyncService } from '../../example-data-async.service';
import { DynamicInputFormComponent } from '../../dynamic-input-form/dynamic-input-form.component';

@Component({
  selector: 'app-form-input-page',
  standalone: true,
  imports: [CommonModule, DynamicInputFormComponent],
  templateUrl: './form-input-page.component.html',
  styleUrls: ['./form-input-page.component.scss'],
})
export class FormInputPageComponent {
  data$: Promise<SectionType[]>;

  constructor(private readonly dataService: ExampleDataAsyncService) {
    this.data$ = this.dataService.load();
  }

  async onChange(data: SectionType[]): Promise<void> {
    await this.dataService.save(data);
  }
}
