import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicInputFormComponent } from './dynamic-input-form.component';

describe('DynamicInputFormComponent', () => {
  let component: DynamicInputFormComponent;
  let fixture: ComponentFixture<DynamicInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DynamicInputFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
