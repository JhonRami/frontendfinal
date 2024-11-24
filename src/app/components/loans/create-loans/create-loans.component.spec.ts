import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoansComponent } from './create-loans.component';

describe('CreateLoansComponent', () => {
  let component: CreateLoansComponent;
  let fixture: ComponentFixture<CreateLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLoansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
