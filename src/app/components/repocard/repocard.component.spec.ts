import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepocardComponent } from './repocard.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RepocardComponent', () => {
  let component: RepocardComponent;
  let fixture: ComponentFixture<RepocardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ RouterTestingModule ],
      declarations: [ RepocardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
