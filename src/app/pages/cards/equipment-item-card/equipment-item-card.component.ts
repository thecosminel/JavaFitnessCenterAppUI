import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { EquipmentItem } from '../../../../model/equipmentItem';
import { ItemCondition, getItemConditionString } from '../../../../model/enums/ItemCondition';

@Component({
  selector: 'app-equipment-item-card',
  standalone: true,
  imports: [
    MatCardModule, 
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './equipment-item-card.component.html',
  styleUrl: './equipment-item-card.component.scss'
})
export class EquipmentItemCardComponent {
  @Input() item: EquipmentItem = new EquipmentItem(0, "", ItemCondition.UNKNOWN);
  constructor() {}
  ngOnInit(): void {}

  getItemCondition(): string
  {
    return getItemConditionString(this.item?.condition)
  }
}
