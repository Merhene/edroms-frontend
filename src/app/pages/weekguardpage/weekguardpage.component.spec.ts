import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekguardpageComponent } from './weekguardpage.component';

describe('WeekguardpageComponent', () => {
  let component: WeekguardpageComponent;
  let fixture: ComponentFixture<WeekguardpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekguardpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekguardpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
