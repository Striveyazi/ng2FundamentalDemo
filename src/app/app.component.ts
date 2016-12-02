/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';

import { AppState } from './app.service';
import { WpGlobalStateService } from './service/app/wp-global-state.service'


import {LeftExpand} from './common/slider/left-expand.component';
import {LeftSlider} from './common/slider/left-slider.component';


import {MarkdownIME} from '../assets/plug/MarkdownIME';
import { Test } from './test.component';

import { Uploader } from './common/uploader/uploader.component';
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
    <!--<pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>-->
    <div>
      <nav class="left-nav">
        <div class="leftnav-top">
            <a><i class="witpm-logo"></i></a>
        </div>
        <div class="leftnav-cont">
            <ul>
                <li><span><a routerLink='dashboard'><i class="desk-icon "></i></a></span></li>
                <li><span><a href='javascript:;' (click)="onSearchClicked($event)"><i class="search-icon "></i></a></span></li>
                <li><span><a href='javascript:;' (click)="onMessageClicked($event)"><i class="news-icon "></i></a></span></li>
                <li><span><a routerLink='project'><i class="item-icon "></i></a></span></li>
                <li><span><a routerLink='contacts'><i class="contact-icon "></i></a></span></li>
            </ul>
        </div>
        <div class="leftnav-footer">
            <a><i class="imessge-icon"></i></a>
            <a><i class="photo-icon"></i></a>
        </div>
      </nav>
      <div class='ml50'>
        <left-slider *ngIf=isLeftSlider ></left-slider>
        <left-expand *ngIf=isLeftExpand ></left-expand>
      </div>
    </div>
    <main>
      <div  class='ml50' id="editor" contentEditable="true">
        <p>Input your text here...</p>
      </div>
      <router-outlet></router-outlet>

      <test-child></test-child>
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
  providers:[WpGlobalStateService]
})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  isLeftSlider = false;
  isLeftExpand = false;

  constructor(
    public appState: AppState,
    private router:Router,
    private wpGlobalStateService:WpGlobalStateService,
  ) { 
  }

  onSearchClicked($event) {
    //todo:pass current route pos and the needed function 
    this.isLeftExpand =  this.isLeftExpand ? false:true;
  }

  onMessageClicked($event) {
    //todo:pass current route pos and the needed function 
    this.isLeftExpand =  this.isLeftExpand ? false:true;
  }
  
  onProjectClicked($event) {
    //todo:pass current route pos and the needed function 
    this.isLeftExpand =  this.isLeftExpand ? false:true;
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
    console.log(MarkdownIME);
    var editor = document.getElementById('editor');
    MarkdownIME.Enhance(editor);
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
