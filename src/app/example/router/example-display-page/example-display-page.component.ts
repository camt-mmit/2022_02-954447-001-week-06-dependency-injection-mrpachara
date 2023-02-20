import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleDataService } from '../../example-data.service';
import { RouterModule } from '@angular/router';
import { SectionType } from 'src/app/types';

@Component({
  selector: 'app-example-display-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './example-display-page.component.html',
  styleUrls: ['./example-display-page.component.scss'],
})
export class ExampleDisplayPageComponent {
  data: SectionType[];

  constructor(private dataService: ExampleDataService) {
    this.data = this.dataService.load();
  }

  getResult(section: SectionType): number {
    return section.reduce((carry, value) => carry + value, 0);
  }
}
