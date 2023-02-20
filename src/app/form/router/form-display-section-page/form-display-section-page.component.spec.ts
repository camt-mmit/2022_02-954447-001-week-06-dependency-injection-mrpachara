import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDisplaySectionPageComponent } from './form-display-section-page.component';

describe('FormDisplaySectionPageComponent', () => {
  let component: FormDisplaySectionPageComponent;
  let fixture: ComponentFixture<FormDisplaySectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormDisplaySectionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDisplaySectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
