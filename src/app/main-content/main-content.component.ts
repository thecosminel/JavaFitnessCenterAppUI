import { Component } from '@angular/core';
import { EquipmentItemPageComponent } from '../pages/equipment-item-page/equipment-item-page.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    EquipmentItemPageComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
