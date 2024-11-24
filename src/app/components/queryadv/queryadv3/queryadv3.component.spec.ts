import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Queryadv3Component } from './queryadv3.component';

describe('Queryadv3Component', () => {
  let component: Queryadv3Component;
  let fixture: ComponentFixture<Queryadv3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Queryadv3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Queryadv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
