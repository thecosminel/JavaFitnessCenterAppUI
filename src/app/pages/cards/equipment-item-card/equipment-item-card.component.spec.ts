import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentItemCardComponent } from './equipment-item-card.component';

describe('EquipmentItemCardComponent', () => {
  let component: EquipmentItemCardComponent;
  let fixture: ComponentFixture<EquipmentItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentItemCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipmentItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
