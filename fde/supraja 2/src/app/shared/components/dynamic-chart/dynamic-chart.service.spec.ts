import { TestBed } from '@angular/core/testing';

import { DynamicChartService } from './dynamic-chart.service';

describe('DynamicChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicChartService = TestBed.get(DynamicChartService);
    expect(service).toBeTruthy();
  });
});
