import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { blankUser, validUser } from 'src/mocks';


const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
const authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
const toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['login']);

const testUserData = { id: 1, name: 'TekLoon'};
const loginErrorMsg = 'Invalid Login';


// describe('Login Component Shallow Test', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   function updateForm(userEmail, userPassword) {
//     fixture.componentInstance.loginForm.controls['email'].setValue(userEmail);
//     fixture.componentInstance.loginForm.controls['password'].setValue(userPassword);
//   }

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports:[BrowserAnimationsModule,
//         ReactiveFormsModule,RouterTestingModule,ToastrModule.forRoot()],
//       declarations: [ LoginComponent ],
//       providers: [
//         {provide: AuthService, useValue: authServiceSpy},
//         FormBuilder,
//         { provide: Router, useValue: routerSpy },
//         {provide: ToastrService, useValue: toastrServiceSpy}
//       ],
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });


//   it('created a form with username and password input and login button', () => {

//     // const compiled = fixture.debugElement.nativeElement;
//     // expect(compiled.querySelector('p').textContent).toContain(app.user.name);

//     const usernameContainer = fixture.debugElement.nativeElement.querySelector('#email-container');
//     const passwordContainer = fixture.debugElement.nativeElement.querySelector('#password-container');
//     const loginBtnContainer = fixture.debugElement.nativeElement.querySelector('#login-btn-container');
//     expect(usernameContainer).toBeDefined();
//     expect(passwordContainer).toBeDefined();
//     expect(loginBtnContainer).toBeDefined();
//   });

//   it('loginService login() should called ', fakeAsync(() => {
//     updateForm(validUser.email, validUser.password);
//     fixture.detectChanges();
//     const button = fixture.debugElement.nativeElement.querySelector('#login');
//     button.click();
//     fixture.detectChanges();
//     expect(authServiceSpy.signInUser).toHaveBeenCalled();
//   }));

//   // it('Display Username Error Msg when Username is blank', () => {
//   //   // updateForm(blankUser.email, validUser.password);
//   //   // fixture.detectChanges();

//   //   // const button = fixture.debugElement.nativeElement.querySelector('#login');
//   //   // button.click();
//   //   // fixture.detectChanges();

//   //   // const usernameErrorMsg = fixture.debugElement.nativeElement.querySelector('#login');
//   //   // expect(usernameErrorMsg).toBeDefined();
//   //   // expect(usernameErrorMsg.innerHTML).toContain('email is required');
//   // });

// });

describe('Login Component Isolated Test', () => {
  let component: LoginComponent;

  beforeEach(async(() => {
    component = new LoginComponent( new FormBuilder(), authServiceSpy,routerSpy,
    toastrServiceSpy);
  }));

  function updateForm(userEmail, userPassword) {
    component.loginForm.controls['email'].setValue(userEmail);
    component.loginForm.controls['password'].setValue(userPassword);
  }

  it('Component successfully created', () => {
    expect(component).toBeTruthy();
  });

  it('component initial state', () => {
    expect(component.isSubmitted).toBeFalsy();
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.invalid).toBeTruthy();
  
  });

  it('submitted should be true when onSubmit()', () => {
    component.login(blankUser);
    expect(component.isSubmitted).toBeTruthy();
  });

  it('form value should update from when u change the input', (() => {
    updateForm(validUser.email, validUser.password);
    const validUsertest = {email:validUser.email, password:validUser.password}
    expect(component.loginForm.value).toEqual(validUsertest);
  }));

  it('Form invalid should be true when form is invalid', (() => {
    updateForm(blankUser.email, blankUser.password);
    expect(component.loginForm.invalid).toBeTruthy();
  }));
});
