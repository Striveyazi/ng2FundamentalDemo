import { Component,OnInit } from '@angular/core';

//import { ActivatedRouteService } from '../service/app/activatedRouteService';

@Component({
    template:
    `
    <div class="ml50">
        <nav>
            <div class="headernav-left">
                <div class="title">
                    项目
                </div>
            </div>
        </nav>
        <router-outlet></router-outlet>
    </div>
    `
})

/*二级壳*/
export class ProjectsComponent implements OnInit{

    constructor() {}

    ngOnInit() {
    // viewChild is set after the view has been initialized
    //this.activatedRouteService.setActivatedRouteSegment("project");
  }
 }