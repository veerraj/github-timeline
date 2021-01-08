import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoading = false;
  isSubmitted = false;

  constructor(private fb: FormBuilder,
    private auth: AuthService, private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })

   }

  ngOnInit(): void {
  }

  login(loginData) {
    this.isSubmitted = true;
    if(this.loginForm.valid){
      this.isLoading = true;
      this.auth.signInUser(this.loginForm.value).then((res:any) => {
        if (res) {
          localStorage.setItem('token',res.user.refreshToken)
          this.isLoading = false;
          // this.spinnerService.hide();
          this.auth.setToken(res);
          this.toastr.success('user logged in successfully', 'Success');
          this.loginForm.reset();
          this.router.navigateByUrl('/home');
        }
      }).
        catch((e) => {
          console.log("hello", e.error);
          this.toastr.error(e.error.error, 'Error');
          this.isLoading = false;
        });
    }
  }

}