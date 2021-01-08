import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsercardComponent } from './usercard/usercard.component';
import { RepocardComponent } from './repocard/repocard.component';
import { RepoDetailPageComponent } from './repo-detail-page/repo-detail-page.component';
import { TimelineCardComponent } from './timeline-card/timeline-card.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, UsercardComponent, RepocardComponent, RepoDetailPageComponent, TimelineCardComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent, FooterComponent, UsercardComponent, RepocardComponent,
    RepoDetailPageComponent,TimelineCardComponent
  ]
})
export class ComponentsModule { }
