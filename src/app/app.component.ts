/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';

import { AppState } from './app.service';

import { ActivatedRouteService } from './service/app/activatedRouteService';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
   <!--<nav>
      <span>
        <a [routerLink]=" ['./'] ">
          Index
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./home'] ">
          Home
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./detail'] ">
          Detail
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./about'] ">
          About
        </a>
      </span>
    </nav>-->

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
    <nav class="left-nav">
      <div class="leftnav-top">
          <a><i class="witpm-logo"></i></a>
      </div>
      <div class="leftnav-cont">
          <ul>
              <li><span><a routerLink='dashboard'><i class="desk-icon "></i></a></span></li>
              <li><span><a href="javascript:;" (click)="onSearchClicked($event)"><i class="search-icon "></i></a></span></li>
              <li><span><a routerLink='message'><i class="news-icon "></i></a></span></li>
              <li><span><a routerLink='projects'><i class="item-icon "></i></a></span></li>
              <li><span><a routerLink='contacts'><i class="contact-icon "></i></a></span></li>
          </ul>
      </div>
      <div class="leftnav-footer">
          <a><i class="imessge-icon"></i></a>
          <a><i class="photo-icon"></i></a>
      </div>
    </nav>

    <main>
     <div class='ml50'>
      <search-dashboard *ngIf='isSearchClickedInDashBoard'></search-dashboard>
     </div>
      <router-outlet></router-outlet>
    </main>

    <!--<footer class = ml50>
      <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      <pre>this.test = {{ test }}</pre>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo" width="5%">
        </a>
      </div>
    </footer>-->
  `,
  providers:[ActivatedRouteService]
})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  test =  ""
  isSearchClickedInDashBoard = false;

  constructor(
    public appState: AppState,
    private router:Router,
    private activatedRouteService: ActivatedRouteService
  ) { }

  onSearchClicked($event) {
    console.log(this.activatedRouteService.getActivatedRouteSegment());
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
