import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { WpGlobalStateService } from '../../service/app/wp-global-state.service'
import { GetProjectTasks } from '../../service/project/getProjectTasks';

class Task {
  Id: string;
  Title: string;
  Description: string;
}

@Component({
  template: `
  <div>
    <p>项目任务板</p>
  </div>
  <div>
      <ul class="items">
        <li *ngFor="let task of tasks"
          [class.selected]="isSelected(task)"
          (click)="onSelect(task)">
          <span class="badge">{{task.Id}}</span> {{task.Title}}
        </li>
      </ul>
      <p>这是组件二的展示板</p><p>{{this.test}}</p>
      <router-outlet></router-outlet>
  </div>
  `
})
/* 三级组件 */
export class ProjectMainTaskComponent implements OnInit {
  tasks: Task[];
  public selectedId: string;
  test:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private GetProjectTasks:GetProjectTasks,
    private wpGlobalStateService:WpGlobalStateService
  ) {
      wpGlobalStateService.Rxjs_Subject_Test$.subscribe(
        value=>{
          this.test = value;
        }
      );
      
      this.wpGlobalStateService.setTestValue('test');
  }

  isSelected(task: Task) {
    return task.Id === this.selectedId;
  }

  ngOnInit() {
      this.selectedId  = this.wpGlobalStateService.getActivatedRouteSegment();

      this.tasks =  this.GetProjectTasks.getProjectTasks(this.selectedId);
      console.log('return:' ,this.tasks );

  }

  onSelect(task: Task) {
    this.selectedId = task.Id;

    // Navigate with relative link
    this.router.navigate([task.Id],{ relativeTo: this.route });
  }
}