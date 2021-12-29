import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFeedDeliveryComponent } from './data-feed-delivery.component';

describe('DataFeedDeliveryComponent', () => {
  let component: DataFeedDeliveryComponent;
  let fixture: ComponentFixture<DataFeedDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataFeedDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFeedDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
