import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEquipmentItemComponent } from './create-equipment-item.component';

describe('CreateEquipmentItemComponent', () => {
  let component: CreateEquipmentItemComponent;
  let fixture: ComponentFixture<CreateEquipmentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEquipmentItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEquipmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
