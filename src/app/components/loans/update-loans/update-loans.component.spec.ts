import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLoansComponent } from './update-loans.component';

describe('UpdateLoansComponent', () => {
  let component: UpdateLoansComponent;
  let fixture: ComponentFixture<UpdateLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLoansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
