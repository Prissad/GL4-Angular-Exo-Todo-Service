import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotoAdderComponent } from './toto-adder.component';

describe('TotoAdderComponent', () => {
  let component: TotoAdderComponent;
  let fixture: ComponentFixture<TotoAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotoAdderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotoAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
