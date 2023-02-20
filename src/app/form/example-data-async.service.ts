import { Injectable } from '@angular/core';
import { createSection } from '../helper-functions';
import { SectionType } from '../types';

const keyName = 'example-data';

@Injectable({
  providedIn: 'root',
})
export class ExampleDataAsyncService {
  constructor() {}

  async save(data: SectionType[]): Promise<void> {
    localStorage.setItem(keyName, JSON.stringify(data));
  }

  async load(): Promise<SectionType[]> {
    const json = localStorage.getItem(keyName);

    if (json) {
      return JSON.parse(json) as SectionType[];
    } else {
      return [createSection()];
    }
  }
}
