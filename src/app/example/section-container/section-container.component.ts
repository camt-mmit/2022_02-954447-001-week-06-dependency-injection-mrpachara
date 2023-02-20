import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputContainerComponent } from '../input-container/input-container.component';
import { InputType, SectionType } from 'src/app/types';
import { createInput } from 'src/app/helper-functions';

@Component({
  selector: 'app-section-container',
  standalone: true,
  imports: [CommonModule, InputContainerComponent],
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss'],
})
export class SectionContainerComponent implements OnInit {
  @Input() no!: number;
  @Input() data!: SectionType;
  @Input() removable: boolean = true;

  @Output() remove = new EventEmitter<void>();
  @Output() dataChanges = new EventEmitter<SectionType>();

  protected items!: { value: InputType }[];

  ngOnInit(): void {
    if (!this.data || typeof this.no === 'undefined') {
      throw new Error('value an no properties must be speficied');
    }

    this.items = this.data.map((value) => this.createInput(value));
  }

  private changed() {
    this.dataChanges.emit(this.items.map((item) => item.value));
  }

  addChild(): void {
    this.items.push(this.createInput(createInput()));
    this.changed();
  }

  removeChild(index: number): void {
    this.items.splice(index, 1);
    this.changed();
  }

  changeChild(index: number, value: InputType): void {
    this.items[index] = this.createInput(value);
    this.changed();
  }

  onRemove(): void {
    this.remove.emit();
  }

  createInput(value: InputType): { value: InputType } {
    return { value: value };
  }

  getResult(): number {
    return this.items
      .map((item) => item.value)
      .reduce((carry, value) => carry + value, 0);
  }
}
