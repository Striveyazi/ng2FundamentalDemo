import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

class Project {
    Id:number;
    Title:string;
    Description:string;
}

@Component({
  template: `
  <div>
      <ul class="items">
        <li *ngFor="let project of projects"
          [class.selected]="isSelected(project)"
          (click)="onSelect(project)">
          <span class="badge">{{project.Id}}</span> {{project.Title}}
        </li>
      </ul>
      <router-outlet></router-outlet>
  </div>
  `
})

export class ProjectsListComponent implements OnInit {
  projects: Project[];

  public selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
   }

  isSelected(project: Project) {
    return project.Id === this.selectedId;
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.selectedId = params['Id'];
      
      this.projects = [
        {Id:1,Title:"我的项目1号",Description:"test"},
        {Id:2,Title:"我的项目2号",Description:"test"}
        ];
    });
  }

  onSelect(project: Project) {
    this.selectedId = project.Id;

    // Navigate with relative link
    this.router.navigate(["project",project.Id]);
  }
}