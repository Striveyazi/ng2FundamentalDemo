import { Task } from '../entities/task.entity';
import { Component, Input, TemplateRef } from '@angular/core';

export interface ITreeNodeTemplate {
  node: Task;
  context: any;
}

@Component({
  selector: 'task-content',
  styleUrls:['../templates/res/css/task/tree.css'],
  templateUrl:'../templates/task.templates/task-content.component.html',
})
export class TaskContent {
  @Input() task: Task;
  @Input() parent:any;
}
