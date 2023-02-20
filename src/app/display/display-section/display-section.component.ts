import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputType, SectionType } from 'src/app/types';

@Component({
  selector: 'app-display-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-section.component.html',
  styleUrls: ['./display-section.component.scss'],
})
export class DisplaySectionComponent implements OnInit {
  @Input() data!: SectionType;

  protected items!: { value: InputType }[];

  ngOnInit(): void {
    if (!this.data) {
      throw new Error(`Proerty 'data' is required!`);
    }

    this.items = this.data.map((value) => ({ value }));
  }

  getResult(): number {
    return this.items.reduce((carry, value) => carry + value.value, 0);
  }
}
