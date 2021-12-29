import { async, ComponentFixture, TestBed } from '@angular/core/testing';
jestMockGet

import { RoomsComponent } from './rooms.component';
jest.mock('RoomsHttpService', jest.fn(()={
  return {
    get: jestMockGet,
  }
}))

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
