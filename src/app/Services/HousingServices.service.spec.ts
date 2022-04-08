/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HousingServicesService } from './HousingServices.service';

describe('Service: HousingServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HousingServicesService]
    });
  });

  it('should ...', inject([HousingServicesService], (service: HousingServicesService) => {
    expect(service).toBeTruthy();
  }));
});
