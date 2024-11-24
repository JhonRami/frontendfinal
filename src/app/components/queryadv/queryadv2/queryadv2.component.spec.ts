import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Queryadv2Component } from './queryadv2.component';

describe('Queryadv2Component', () => {
  let component: Queryadv2Component;
  let fixture: ComponentFixture<Queryadv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Queryadv2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Queryadv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
