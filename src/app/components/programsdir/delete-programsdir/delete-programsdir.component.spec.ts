import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProgramsdirComponent } from './delete-programsdir.component';

describe('DeleteProgramsdirComponent', () => {
  let component: DeleteProgramsdirComponent;
  let fixture: ComponentFixture<DeleteProgramsdirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProgramsdirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProgramsdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
