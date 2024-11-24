import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProgramsdirComponent } from './show-programsdir.component';

describe('ShowProgramsdirComponent', () => {
  let component: ShowProgramsdirComponent;
  let fixture: ComponentFixture<ShowProgramsdirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowProgramsdirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProgramsdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
