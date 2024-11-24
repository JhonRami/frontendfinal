import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Queryadv4Component } from './queryadv4.component';

describe('Queryadv4Component', () => {
  let component: Queryadv4Component;
  let fixture: ComponentFixture<Queryadv4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Queryadv4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Queryadv4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
