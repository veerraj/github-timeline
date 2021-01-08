import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../features.service';
import { ActivatedRoute } from '@angular/router';
import { RepoResponseModel } from 'src/app/shared/reporesponse.model';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.scss']
})
export class RepoDetailComponent implements OnInit {

  userName:string;
  repoName:string;
  repoDetail:RepoResponseModel;
  constructor(private feature:FeaturesService,private route: ActivatedRoute) {
    this.route.queryParams
      .subscribe(params => {
         this.userName = params.user;
         this.repoName = params.repo;
      }
    );
   }

  ngOnInit() {
     this.feature.getRepoDetail(this.userName,this.repoName).subscribe((res:RepoResponseModel)=>{
         this.repoDetail = res;
         console.log(res,"repo detail");
     })
  }

}
