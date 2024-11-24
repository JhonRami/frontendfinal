import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Queryadv5Component } from './queryadv5.component';

describe('Queryadv5Component', () => {
  let component: Queryadv5Component;
  let fixture: ComponentFixture<Queryadv5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Queryadv5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Queryadv5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
