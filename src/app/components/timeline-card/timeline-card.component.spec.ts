import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineCardComponent } from './timeline-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TimelineCardComponent', () => {
  let component: TimelineCardComponent;
  let fixture: ComponentFixture<TimelineCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ TimelineCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
