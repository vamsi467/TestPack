import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFeedsResourceRegistryComponent } from './data-feeds-resource-registry.component';

describe('DataFeedsResourceRegistryComponent', () => {
  let component: DataFeedsResourceRegistryComponent;
  let fixture: ComponentFixture<DataFeedsResourceRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataFeedsResourceRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFeedsResourceRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
