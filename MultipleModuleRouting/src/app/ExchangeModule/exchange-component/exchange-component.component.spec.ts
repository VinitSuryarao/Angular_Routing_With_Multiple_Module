import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeComponentComponent } from './exchange-component.component';

describe('ExchangeComponentComponent', () => {
  let component: ExchangeComponentComponent;
  let fixture: ComponentFixture<ExchangeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
