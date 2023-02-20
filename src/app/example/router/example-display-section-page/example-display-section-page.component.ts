import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleDataService } from '../../example-data.service';
import { ActivatedRoute } from '@angular/router';
import { InputType } from 'src/app/types';

@Component({
  selector: 'app-example-display-section-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-display-section-page.component.html',
  styleUrls: ['./example-display-section-page.component.scss'],
})
export class ExampleDisplaySectionPageComponent {
  items: { value: InputType }[];

  constructor(
    private dataService: ExampleDataService,
    private route: ActivatedRoute,
  ) {
    const sections = this.dataService.load();
    this.items = sections[this.route.snapshot.params['index'] as number].map(
      (value) => ({
        value: value,
      }),
    );
  }

  getResult(): number {
    return this.items.reduce((carry, value) => carry + value.value, 0);
  }
}
