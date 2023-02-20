import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from '../../section-container/section-container.component';
import { ExampleDataService } from '../../example-data.service';
import { SectionType } from 'src/app/types';
import { createSection } from 'src/app/helper-functions';

@Component({
  selector: 'app-example-input-page',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './example-input-page.component.html',
  styleUrls: ['./example-input-page.component.scss'],
})
export class ExampleInputPageComponent {
  items!: SectionType[];

  constructor(private dataService: ExampleDataService) {
    this.items = this.dataService.load();
  }

  private storeData(): void {
    this.dataService.save(this.items);
  }

  addChild(): void {
    this.items.push(createSection());
    this.storeData();
  }

  changeChild(index: number, value: SectionType): void {
    this.items[index] = value;
    this.storeData();
  }

  removeChild(index: number): void {
    this.items.splice(index, 1);
    this.storeData();
  }
}
