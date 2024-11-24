import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProgramsdirComponent } from './create-programsdir.component';

describe('CreateProgramsdirComponent', () => {
  let component: CreateProgramsdirComponent;
  let fixture: ComponentFixture<CreateProgramsdirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProgramsdirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProgramsdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
