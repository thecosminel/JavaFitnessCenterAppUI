import { Component, Inject, Input } from '@angular/core';
import { EquipmentItem } from '../../../../model/equipmentItem';
import { ItemCondition, getItemConditionString } from '../../../../model/enums/ItemCondition';
import { EquipmentItemServiceService } from '../../../../service/equipment-item-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-equipment-item',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  templateUrl: './edit-equipment-item.component.html',
  styleUrl: './edit-equipment-item.component.scss'
})
export class EditEquipmentItemComponent {
  item: EquipmentItem = new EquipmentItem(0, "", ItemCondition.UNKNOWN);
  initialCondition: any

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service: EquipmentItemServiceService) {
    this.item = data.item
    this.initialCondition = {value: this.item.condition.toString(), viewValue: getItemConditionString(this.item.condition)}
  }

  itemConditions = [
    {value: 0, viewValue:"NEW"}, 
    {value: 1, viewValue:"GOOD"}, 
    {value: 2, viewValue:"WORN"}, 
    {value: 3, viewValue:"BROKEN"}, 
    {value: 4, viewValue:"UNKNOWN"}
  ]

  selectCondition(event: MatSelectChange) {
    this.item.condition = parseInt(event.value, 10);
  }

  onSubmit()
  {
    var result = this.service.putEquipmentItem(this.item);
    window.location.reload();
  }
}
