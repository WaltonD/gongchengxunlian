import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiaoxianComponent } from './biaoxian.component';

describe('BiaoxianComponent', () => {
  let component: BiaoxianComponent;
  let fixture: ComponentFixture<BiaoxianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiaoxianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiaoxianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
