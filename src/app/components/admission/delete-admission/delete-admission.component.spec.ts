import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAdmissionComponent } from './delete-admission.component';

describe('DeleteAdmissionComponent', () => {
  let component: DeleteAdmissionComponent;
  let fixture: ComponentFixture<DeleteAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAdmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
