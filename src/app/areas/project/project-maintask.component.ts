import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

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
export class ProjectMainTaskComponent {
  tasks: Task[];
  public selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  isSelected(task: Task) {
    return task.Id === this.selectedId;
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.selectedId = params['Id'];

      this.tasks = [
        { Id: 1, Title: "任务大大1号", Description: "test" },
        { Id: 2, Title: "任务小小2号", Description: "test" }
      ];
    });
  }

  onSelect(task: Task) {
    this.selectedId = task.Id;

    // Navigate with relative link
    this.router.navigate([task.Id],{ relativeTo: this.route });
  }
}