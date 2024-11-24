import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProgramsComponent } from './delete-programs.component';

describe('DeleteProgramsComponent', () => {
  let component: DeleteProgramsComponent;
  let fixture: ComponentFixture<DeleteProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProgramsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
