import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProgramsComponent } from './create-programs.component';

describe('CreateProgramsComponent', () => {
  let component: CreateProgramsComponent;
  let fixture: ComponentFixture<CreateProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProgramsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
