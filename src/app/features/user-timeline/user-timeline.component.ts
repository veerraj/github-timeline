import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../features.service';
import { ActivatedRoute } from '@angular/router';
import { CommitResponseModel } from 'src/app/shared/commit-response.model';

@Component({
  selector: 'app-user-timeline',
  templateUrl: './user-timeline.component.html',
  styleUrls: ['./user-timeline.component.scss']
})
export class UserTimelineComponent implements OnInit {

  userName:string;
  repoName:string;
  repoCommitDetail:CommitResponseModel[];
  constructor(private feature:FeaturesService,private route: ActivatedRoute) {
    this.route.queryParams
      .subscribe(params => {
         this.userName = params.user;
         this.repoName = params.repo;
      }
    );
   }

   ngOnInit() {
    this.feature.getCommitDetail(this.userName,this.repoName).subscribe((res:CommitResponseModel[])=>{
        this.repoCommitDetail = res;
        console.log("res",res);
        
    })
 }
}
