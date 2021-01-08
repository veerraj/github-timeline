import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  isLoading = false;
  isSubmitted = false;

  constructor(private fb:FormBuilder,
    private auth:AuthService,private router:Router,
    private toastr:ToastrService,
   ) { 
      this.registerForm = this.fb.group({
        // username:['',Validators.required],
        email:['',[Validators.required, Validators.email]],
        password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
     })
   }

  ngOnInit(): void {
  }

  register(registerData){
    this.isSubmitted = true;
    if(this.registerForm.valid){
      this.isLoading = true;
      this.auth.signUpUser(this.registerForm.value).then((res:any)=>{
        if(res){
          this.isLoading = false;
          this.registerForm.reset();
          this.toastr.success('user registration successfully', 'Success');
          this.router.navigateByUrl('/login');
        }
      }).catch((e) => {
        console.log(e);
        
        this.toastr.error(e.error, 'Error');
        this.isLoading = false;
     });
    }
  }
 
}
