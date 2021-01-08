import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.scss']
})
export class TimelineCardComponent implements OnInit {

  @Input() commitDetail;
  @Input() repoName;
  constructor(private router:Router) { }

  ngOnInit() {
     console.log(this.commitDetail);
  }

  backToHome(){
      this.router.navigateByUrl('')
  }

}
