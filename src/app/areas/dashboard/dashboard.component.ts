import { Component,OnInit } from '@angular/core'; 

//import { ActivatedRouteService } from '../service/app/activatedRouteService';

@Component({
  template:  `
	<div class="ml50">
    <nav class="header-nav">
			<div class="headernav-left fl">
				<a class="proj-icon fl"><i class=""></i></a>
				 <div class="title fl">
				 	project name
				 </div>
				 <a class="set-icon fl"><i class=""></i></a>
				 <span class="time">55天11时11分12秒</span>
			</div>
			<div class="headernav-right fr">
				<span class="calender">
					日历
				</span>
				<span class="showmenu">
					菜单
				</span>
			</div>
			<div class="headernav-cont">
				<ul>
					<li><a routerLink="/dashboard" routerLinkActive="active">我的任务</a></li>
					<li><a routerLink="/calendar" routerLinkActive="active">日程</a></li>
					<li><a routerLink="/note" routerLinkActive="active">笔记</a></li>
					<li><a href='javascript:;'>邮件</a></li>
				</ul>
			</div>
		</nav>
    <router-outlet></router-outlet>
	</div>
  `,

})

/* 二级壳 */
export class DashBoardComponent implements OnInit {
	constructor() {}
	ngOnInit() {
    // viewChild is set after the view has been initialized
    // this.activatedRouteService.setActivatedRouteSegment("dashboard");
  }

 }