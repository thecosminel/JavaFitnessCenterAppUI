import { Injectable } from '@angular/core';
import { MainContentComponent } from '../app/main-content/main-content.component';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  constructor() { }

  toggleEIVisibility()
  {
    MainContentComponent.toggleEIVisibility();
  };
}
