import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { GetProjectTasks } from '../../service/project/getProjectTasks';

class Task {
  Id: number;
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
      <router-outlet></router-outlet>
  </div>
  `
})
/* 三级组件 */
export class ProjectMainTaskComponent implements OnInit {
  tasks: Task[];
  public selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private GetProjectTasks:GetProjectTasks
  ) {
  }

  isSelected(task: Task) {
    return task.Id === this.selectedId;
  }

  ngOnInit() {
      let params = this.route.snapshot.pathFromRoot[1].params;
      //console.log(this.route.snapshot)
      this.selectedId = +params['id'];

      this.tasks =  this.GetProjectTasks.getProjectTasks(this.selectedId);
      console.log('return:' ,this.tasks );

  }

  onSelect(task: Task) {
    this.selectedId = task.Id;

    // Navigate with relative link
    this.router.navigate([task.Id],{ relativeTo: this.route });
  }
}