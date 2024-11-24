import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProgramsdirComponent } from './update-programsdir.component';

describe('UpdateProgramsdirComponent', () => {
  let component: UpdateProgramsdirComponent;
  let fixture: ComponentFixture<UpdateProgramsdirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateProgramsdirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProgramsdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
