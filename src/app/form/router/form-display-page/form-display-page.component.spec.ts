import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDisplayPageComponent } from './form-display-page.component';

describe('FormDisplayPageComponent', () => {
  let component: FormDisplayPageComponent;
  let fixture: ComponentFixture<FormDisplayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormDisplayPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
