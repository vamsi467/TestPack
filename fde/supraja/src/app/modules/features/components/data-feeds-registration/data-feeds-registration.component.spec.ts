import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFeedsRegistrationComponent } from './data-feeds-registration.component';

describe('DataFeedsRegistrationComponent', () => {
  let component: DataFeedsRegistrationComponent;
  let fixture: ComponentFixture<DataFeedsRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataFeedsRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFeedsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
