import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Queryadv1Component } from './queryadv1.component';

describe('Queryadv1Component', () => {
  let component: Queryadv1Component;
  let fixture: ComponentFixture<Queryadv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Queryadv1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Queryadv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
