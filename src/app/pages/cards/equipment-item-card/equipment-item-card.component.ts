import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { ItemCondition, getItemConditionString } from '../../../../model/enums/ItemCondition';
// @ts-ignore
import { EquipmentItem } from '../../../../model/equipmentItem';
import { EquipmentItemServiceService } from '../../../../service/equipment-item-service.service';
import { MatDialog } from '@angular/material/dialog';
import { EditEquipmentItemComponent } from '../../dialogs/edit-equipment-item/edit-equipment-item.component';


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
  constructor(private service: EquipmentItemServiceService, public dialog: MatDialog){}
  ngOnInit(): void {}

  

  getItemCondition(): string
  {
    return getItemConditionString(this.item?.condition)
  }

  editItem()
  {
    this.dialog.open(EditEquipmentItemComponent, {
      data: {item: this.item}
    });
  }

  deleteItem()
  {
    this.service.deleteEquipmentItem(this.item.id)
    window.location.reload();
  }
}
