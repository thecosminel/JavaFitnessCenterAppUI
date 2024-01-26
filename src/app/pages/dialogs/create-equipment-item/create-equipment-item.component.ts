import { Component } from '@angular/core';
import { EquipmentItem } from '../../../../model/equipmentItem';
import { ItemCondition } from '../../../../model/enums/ItemCondition';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import { EquipmentItemServiceService } from '../../../../service/equipment-item-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-equipment-item',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  templateUrl: './create-equipment-item.component.html',
  styleUrl: './create-equipment-item.component.scss'
})
export class CreateEquipmentItemComponent {
  equipmentItem: EquipmentItem = new EquipmentItem(0, "", ItemCondition.UNKNOWN)

  itemConditions = [
    {value: 0, viewValue:"NEW"}, 
    {value: 1, viewValue:"GOOD"}, 
    {value: 2, viewValue:"WORN"}, 
    {value: 3, viewValue:"BROKEN"}, 
    {value: 4, viewValue:"UNKNOWN"}
  ]

  constructor(public dialogRef: MatDialogRef<CreateEquipmentItemComponent>, 
    private service: EquipmentItemServiceService){}
  
  onSubmit()
  {
    var result = this.service.postEquipmentItem(this.equipmentItem);
    result.subscribe((response) => {
      if (response.status == 201)
      {
        this.dialogRef.close("Good")
        window.location.reload();
      }
      else
      {
        this.dialogRef.close("Add failed")
      }
    })
  }

  selectCondition(event: MatSelectChange) {
    this.equipmentItem.condition = parseInt(event.value, 10);
  }
}
