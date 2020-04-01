import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathercardComponent } from './weathercard.component';

describe('WeathercardComponent', () => {
  let component: WeathercardComponent;
  let fixture: ComponentFixture<WeathercardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeathercardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
