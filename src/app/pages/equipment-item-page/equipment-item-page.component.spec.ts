import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentItemPageComponent } from './equipment-item-page.component';

describe('EquipmentItemPageComponent', () => {
  let component: EquipmentItemPageComponent;
  let fixture: ComponentFixture<EquipmentItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentItemPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipmentItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
