import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../features.service';
import { ResponseModel } from 'src/app/shared/response.model';
import { RepoResponseModel } from 'src/app/shared/reporesponse.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username = "";
  userObj: ResponseModel;
  repoData: RepoResponseModel[];
  constructor(private feature: FeaturesService, private toastr: ToastrService) { }

  ngOnInit() {
       if(localStorage.getItem('userdata')){
            this.userObj = JSON.parse(localStorage.getItem('userdata'));
            this.username = this.userObj.login;
            this.getRepoUrl(this.userObj.repos_url);
       }
  }

  searchUser() {
    if (this.username) {
      this.feature.getUser(this.username).subscribe((res: ResponseModel) => {
        this.userObj = res;
        localStorage.setItem('userdata',JSON.stringify(this.userObj));
        this.getRepoUrl(res.repos_url);
      }, (e) => {
        this.toastr.error(e.error.message, 'Error');
      });
    }
  }

  getRepoUrl(repoUrl) {
    this.feature.getRepoOfUser(repoUrl).subscribe((res: RepoResponseModel[]) => {
      this.repoData = res;
    })
  }

}
