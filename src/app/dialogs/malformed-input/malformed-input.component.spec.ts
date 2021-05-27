import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalformedInputComponent } from './malformed-input.component';

describe('MalformedInputComponent', () => {
  let component: MalformedInputComponent;
  let fixture: ComponentFixture<MalformedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalformedInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MalformedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
