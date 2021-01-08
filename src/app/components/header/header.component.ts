import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user = null;
  constructor(private authservice:AuthService,private router:Router,
    private toastr:ToastrService) { 
    
  }

  ngOnInit() {
    // let user = this.authservice.getUser();
  }

  signOut(){
     this.authservice.signOut();
     this.toastr.success('user logged out successfully', 'Success');
     this.router.navigateByUrl('/login');
  }

  

}
