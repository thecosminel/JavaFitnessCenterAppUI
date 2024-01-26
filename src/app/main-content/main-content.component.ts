import { Component } from '@angular/core';
import { EquipmentItemPageComponent } from '../pages/equipment-item-page/equipment-item-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    EquipmentItemPageComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  public static eiVisibility = true;

  public static toggleEIVisibility(): void{
    MainContentComponent.eiVisibility = !MainContentComponent.eiVisibility;
  }

  public doStuff(){
    return MainContentComponent.eiVisibility;
  }
}
