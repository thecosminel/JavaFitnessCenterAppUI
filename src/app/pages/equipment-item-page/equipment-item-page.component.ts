import { Component } from '@angular/core';
import { EquipmentItemCardComponent } from '../cards/equipment-item-card/equipment-item-card.component';
import { EquipmentItem } from '../../../model/equipmentItem';
import { ItemCondition } from '../../../model/enums/ItemCondition';
import { EquipmentItemServiceService } from '../../../service/equipment-item-service.service';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatFabButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CreateEquipmentItemComponent } from '../dialogs/create-equipment-item/create-equipment-item.component';

@Component({
  selector: 'app-equipment-item-page',
  standalone: true,
  imports: [
    EquipmentItemCardComponent,
    HttpClientModule,
    MatIconModule,
    MatFabButton
  ],
  templateUrl: './equipment-item-page.component.html',
  styleUrl: './equipment-item-page.component.scss'
})
export class EquipmentItemPageComponent {
  equipmentItems: EquipmentItem[] = []

  constructor(private service: EquipmentItemServiceService, public dialog: MatDialog) {}

  ngOnInit() : void{
    this.service.getEquipmentItems().subscribe(
      (data) => this.equipmentItems = data.map((item: { id: number; name: string; condition: string; }) => {
        return new EquipmentItem(item.id, item.name, ItemCondition[item.condition as keyof typeof ItemCondition]);
      })
    )
  }

  handleOpenCreate(){
    this.dialog.open(CreateEquipmentItemComponent);
  }
}
