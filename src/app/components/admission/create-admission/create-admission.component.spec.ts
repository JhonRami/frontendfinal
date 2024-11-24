import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdmissionComponent } from './create-admission.component';

describe('CreateAdmissionComponent', () => {
  let component: CreateAdmissionComponent;
  let fixture: ComponentFixture<CreateAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAdmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
