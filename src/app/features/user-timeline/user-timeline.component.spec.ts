import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTimelineComponent } from './user-timeline.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

describe('UserTimelineComponent', () => {
  let component: UserTimelineComponent;
  let fixture: ComponentFixture<UserTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ComponentsModule,HttpClientModule,RouterTestingModule,ToastrModule.forRoot()],
      declarations: [ UserTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
