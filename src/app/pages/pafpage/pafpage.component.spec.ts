import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PafpageComponent } from './pafpage.component';

describe('PafpageComponent', () => {
  let component: PafpageComponent;
  let fixture: ComponentFixture<PafpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PafpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PafpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
