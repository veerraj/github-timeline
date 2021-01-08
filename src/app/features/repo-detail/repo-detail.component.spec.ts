import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDetailComponent } from './repo-detail.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

describe('RepoDetailComponent', () => {
  let component: RepoDetailComponent;
  let fixture: ComponentFixture<RepoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ComponentsModule,HttpClientModule,RouterTestingModule,ToastrModule.forRoot()],
      declarations: [ RepoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
