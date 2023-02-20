import { Routes } from '@angular/router';
import { ExampleDisplayPageComponent } from './app/example/router/example-display-page/example-display-page.component';
import { ExampleDisplaySectionPageComponent } from './app/example/router/example-display-section-page/example-display-section-page.component';
import { ExampleInputPageComponent } from './app/example/router/example-input-page/example-input-page.component';
import { ExampleComponent } from './app/example/router/example/example.component';
import { FormDisplayPageComponent } from './app/form/router/form-display-page/form-display-page.component';
import { FormDisplaySectionPageComponent } from './app/form/router/form-display-section-page/form-display-section-page.component';
import { FormInputPageComponent } from './app/form/router/form-input-page/form-input-page.component';
import { FormComponent } from './app/form/router/form/form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'example', pathMatch: 'full' },
  {
    path: 'example',
    component: ExampleComponent,
    children: [
      { path: '', redirectTo: 'input', pathMatch: 'full' },
      { path: 'input', component: ExampleInputPageComponent },
      { path: 'display', component: ExampleDisplayPageComponent },
      { path: 'display/:index', component: ExampleDisplaySectionPageComponent },
    ],
  },
  {
    path: 'form',
    component: FormComponent,
    children: [
      { path: '', redirectTo: 'input', pathMatch: 'full' },
      { path: 'input', component: FormInputPageComponent },
      { path: 'display', component: FormDisplayPageComponent },
      { path: 'display/:index', component: FormDisplaySectionPageComponent },
    ],
  },
];
