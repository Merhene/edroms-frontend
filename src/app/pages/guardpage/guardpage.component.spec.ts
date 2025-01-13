import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardpageComponent } from './guardpage.component';

describe('GuardpageComponent', () => {
  let component: GuardpageComponent;
  let fixture: ComponentFixture<GuardpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
