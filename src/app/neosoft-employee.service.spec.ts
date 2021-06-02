import { TestBed } from '@angular/core/testing';

import { NeosoftEmployeeService } from './neosoft-employee.service';

describe('NeosoftEmployeeService', () => {
  let service: NeosoftEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeosoftEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
