import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProfessorComponent } from './delete-professor.component';

describe('DeleteProfessorComponent', () => {
  let component: DeleteProfessorComponent;
  let fixture: ComponentFixture<DeleteProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProfessorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
