import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDynamicInputComponent } from './display-dynamic-input.component';

describe('DisplayDynamicInputComponent', () => {
  let component: DisplayDynamicInputComponent;
  let fixture: ComponentFixture<DisplayDynamicInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DisplayDynamicInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDynamicInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
