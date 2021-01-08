import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repocard',
  templateUrl: './repocard.component.html',
  styleUrls: ['./repocard.component.scss']
})
export class RepocardComponent implements OnInit {

  @Input() data;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  repoDetails(item){
    this.router.navigate(['/repo-details'], { queryParams: { user: item.owner.login, repo:item.name } });
  }

  repoTimeline(item){
    this.router.navigate(['/timeline'], { queryParams: { user: item.owner.login, repo:item.name } });
  }

}
