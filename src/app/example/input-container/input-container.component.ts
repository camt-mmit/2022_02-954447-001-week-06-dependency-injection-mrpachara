import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputType } from 'src/app/types';

@Component({
  selector: 'app-input-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss'],
})
export class InputContainerComponent implements OnInit {
  @Input() no!: number;
  @Input() data!: InputType;
  @Input() removable: boolean = true;

  @Output() remove = new EventEmitter<void>();
  @Output() dataChanges = new EventEmitter<InputType>();

  protected readonly id = Math.floor(Math.random() * 6);
  protected value!: InputType;

  ngOnInit(): void {
    if (typeof this.data === 'undefined' || typeof this.no === 'undefined') {
      throw new Error('value an no properties must be speficied');
    }

    this.value = this.data;
  }

  onChange(value: number): void {
    this.value = value;
    this.dataChanges.emit(this.value);
  }

  onRemove(): void {
    this.remove.emit();
  }
}
