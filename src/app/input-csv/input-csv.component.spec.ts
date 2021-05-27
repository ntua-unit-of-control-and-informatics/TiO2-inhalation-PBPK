import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCsvComponent } from './input-csv.component';

describe('InputCsvComponent', () => {
  let component: InputCsvComponent;
  let fixture: ComponentFixture<InputCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
