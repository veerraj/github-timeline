import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { blankUser, validUser } from 'src/mocks';

const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
const authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
const toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['login']);
// describe('RegisterComponent', () => {
//   let component: RegisterComponent;
//   let fixture: ComponentFixture<RegisterComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports:[ReactiveFormsModule,RouterTestingModule,ToastrModule.forRoot(),HttpClientModule],
//       declarations: [ RegisterComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(RegisterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     fixture = TestBed.createComponent(RegisterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     expect(component).toBeTruthy();
//   });
// });

describe('Register Component Isolated Test', () => {
  let component: RegisterComponent;

  beforeEach(async(() => {
    component = new RegisterComponent( new FormBuilder(), authServiceSpy,routerSpy,
    toastrServiceSpy);
  }));

  function updateForm(userEmail, userPassword,userName) {
    component.registerForm.controls['username'].setValue(userName);
    component.registerForm.controls['email'].setValue(userEmail);
    component.registerForm.controls['password'].setValue(userPassword);
  }

  it('Component successfully created', () => {
    expect(component).toBeTruthy();
  });

  it('component initial state', () => {
    expect(component.isSubmitted).toBeFalsy();
    expect(component.registerForm).toBeDefined();
    expect(component.registerForm.invalid).toBeTruthy();
  });

  it('submitted should be true when onSubmit()', () => {
    component.register(blankUser);
    expect(component.isSubmitted).toBeTruthy();
  });

  it('form value should update from when u change the input', (() => {
    updateForm(validUser.email, validUser.password,validUser.username);
    expect(component.registerForm.value).toEqual(validUser);
  }));

  it('Form invalid should be true when form is invalid', (() => {
    updateForm(blankUser.email, blankUser.password,blankUser.username);
    expect(component.registerForm.invalid).toBeTruthy();
  }));
});