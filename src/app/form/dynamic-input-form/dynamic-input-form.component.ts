import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputType, SectionType } from 'src/app/types';
import { filter, map, Subscription } from 'rxjs';
import { createInput, createSection } from 'src/app/helper-functions';

@Component({
  selector: 'app-dynamic-input-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-input-form.component.html',
  styleUrls: ['./dynamic-input-form.component.scss'],
})
export class DynamicInputFormComponent implements OnInit, OnDestroy {
  @Input() data!: SectionType[];

  @Output() readonly dataChanges = new EventEmitter<SectionType[]>();

  protected form!: FormGroup<{
    value: FormArray<FormArray<FormControl<InputType>>>;
  }>;

  private sucscription: Subscription | null = null;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.data) {
      throw new Error(`Property 'data' is required!`);
    }

    this.form = this.fb.nonNullable.group({
      value: this.fb.nonNullable.array(
        this.data.map((section) => this.createSection(section)),
      ),
    });

    this.sucscription = this.form.valueChanges
      .pipe(
        map((form) => form.value),
        filter((sections): sections is SectionType[] => !!sections),
      )
      .subscribe((data) => this.dataChanges.emit(data));
  }

  ngOnDestroy(): void {
    this.sucscription?.unsubscribe();
  }

  protected getSections(): FormArray<FormArray<FormControl<InputType>>> {
    return this.form.get('value') as FormArray<
      FormArray<FormControl<InputType>>
    >;
  }

  private createInput(value: InputType): FormControl<InputType> {
    return this.fb.nonNullable.control(value);
  }

  private createSection(value: SectionType): FormArray<FormControl<InputType>> {
    return this.fb.nonNullable.array(
      value.map((input) => this.createInput(input)),
    );
  }

  protected addSection(): void {
    this.getSections().push(this.createSection(createSection()));
  }

  protected removeSection(index: number): void {
    this.getSections().removeAt(index);
  }

  protected addInput(section: FormArray<FormControl<InputType>>): void {
    section.push(this.createInput(createInput()));
  }

  protected removeInput(
    section: FormArray<FormControl<InputType>>,
    index: number,
  ): void {
    section.removeAt(index);
  }

  protected getResult(section: FormArray<FormControl<InputType>>): number {
    return section.controls
      .map((control) => control.value)
      .reduce((carry, value) => carry + value, 0);
  }
}
