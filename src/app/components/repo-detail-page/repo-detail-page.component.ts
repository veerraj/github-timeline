import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repo-detail-page',
  templateUrl: './repo-detail-page.component.html',
  styleUrls: ['./repo-detail-page.component.scss']
})
export class RepoDetailPageComponent implements OnInit {

  @Input() dataDetail;
  constructor(private router:Router) { }

  ngOnInit() {
    if(this.dataDetail){
       console.log(this.dataDetail);
       
    }
  }

  downloadCode(){
      let url = this.dataDetail.clone_url.split('.git')[0];
      window.location.assign(url+"/archive/master.zip");
  }

  backToHome(){
    this.router.navigateByUrl('/home');
  }

}
