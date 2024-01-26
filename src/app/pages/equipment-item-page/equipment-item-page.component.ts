import { Component } from '@angular/core';
import { EquipmentItemCardComponent } from '../cards/equipment-item-card/equipment-item-card.component';
import { EquipmentItem } from '../../../model/equipmentItem';
import { ItemCondition } from '../../../model/enums/ItemCondition';
import { EquipmentItemServiceService } from '../../../service/equipment-item-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-equipment-item-page',
  standalone: true,
  imports: [
    EquipmentItemCardComponent,
    HttpClientModule
  ],
  templateUrl: './equipment-item-page.component.html',
  styleUrl: './equipment-item-page.component.scss'
})
export class EquipmentItemPageComponent {
  equipmentItems: EquipmentItem[] = [
    new EquipmentItem(1, "Dumbell", ItemCondition.GOOD),
    new EquipmentItem(2, "Dumbell", ItemCondition.BROKEN)
  ]

  constructor(private service: EquipmentItemServiceService) {}

  ngOnInit() : void{
    this.service.getEquipmentItems().subscribe(
      (data) => this.equipmentItems = data.map((item: { id: number; name: string; condition: string; }) => {
        return new EquipmentItem(item.id, item.name, ItemCondition[item.condition as keyof typeof ItemCondition]);
      })
    )
  }
}
