import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDougnutChartComponent } from './pie-dougnut-chart.component';

describe('PieDougnutChartComponent', () => {
  let component: PieDougnutChartComponent;
  let fixture: ComponentFixture<PieDougnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieDougnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieDougnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
