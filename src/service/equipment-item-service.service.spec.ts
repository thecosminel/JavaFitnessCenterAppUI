import { TestBed } from '@angular/core/testing';

import { EquipmentItemServiceService } from './equipment-item-service.service';

describe('EquipmentItemServiceService', () => {
  let service: EquipmentItemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentItemServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
