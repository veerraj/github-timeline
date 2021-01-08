import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercardComponent } from './usercard.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('UsercardComponent', () => {
  let component: UsercardComponent;
  let fixture: ComponentFixture<UsercardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ UsercardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
