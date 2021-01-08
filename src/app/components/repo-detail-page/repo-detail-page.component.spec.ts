import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDetailPageComponent } from './repo-detail-page.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RepoDetailPageComponent', () => {
  let component: RepoDetailPageComponent;
  let fixture: ComponentFixture<RepoDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ RepoDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
