import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotEnoughErrorComponent } from './not-enough-error.component';

describe('NotEnoughErrorComponent', () => {
  let component: NotEnoughErrorComponent;
  let fixture: ComponentFixture<NotEnoughErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotEnoughErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotEnoughErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
