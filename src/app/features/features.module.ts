import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../core/guard/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';
import { ComponentsModule } from '../components/components.module';
import { UserTimelineComponent } from './user-timeline/user-timeline.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    
  },
  {
    path: 'home',
    canActivate:[AuthGuard],
    component: HomeComponent
  },
  {
    path: 'repo-details',
    canActivate:[AuthGuard],
    component: RepoDetailComponent
  },
  {
    path: 'timeline',
    canActivate:[AuthGuard],
    component: UserTimelineComponent
  }
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent, HomeComponent, RepoDetailComponent, UserTimelineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class FeaturesModule { }
