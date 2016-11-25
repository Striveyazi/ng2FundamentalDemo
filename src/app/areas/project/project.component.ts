import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    template: `
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
                <li><a routerLink="Task" routerLinkActive="active">MainTask</a></li>
                <li><a routerLink="Bug" routerLinkActive="active">Bugs</a></li>
                <li><a routerLink="Topic" routerLinkActive="active">Topic</a></li>
                <li><a href='javascript:;'>Member</a></li>
            </ul>
        </div>
    </nav>
    <router-outlet></router-outlet>
	</div>
  `
})

/* 二级壳 */
export class ProjectComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        console.log(this.route.snapshot.params);
        let id = this.route.snapshot.params['id'];
        this.router.navigate(['task']);
    }
}