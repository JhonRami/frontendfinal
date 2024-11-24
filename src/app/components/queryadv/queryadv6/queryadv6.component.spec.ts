import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Queryadv6Component } from './queryadv6.component';

describe('Queryadv6Component', () => {
  let component: Queryadv6Component;
  let fixture: ComponentFixture<Queryadv6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Queryadv6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Queryadv6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
