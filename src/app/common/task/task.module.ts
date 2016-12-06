import { MianTaskContainerComponent } from './components/mainTask-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskLoadingComponent } from './components/task-loading.component';
// import { LoadingComponent as DeprecatedLoadingComponent } from './components/deprecated-loading.component';
import { TaskBagComponent } from './components/taskbag.component';
import { TaskComponent } from './components/task.component';
import {  TaskContent } from './components/task-content.component';
// import { TreeNodeContent as DeprecatedTreeNodeContent } from './components/deprecated-tree-node-content.component';
import { TaskDropSlot } from './components/task-drop-slot.component';
// import { AdHocComponentFactoryCreator } from './components/adhoc-component-factory.service';

// import './polyfills';
// import { deprecated } from './deprecated';

export {
  TaskLoadingComponent,
  TaskBagComponent,
  TaskComponent,
  TaskContent,
  TaskDropSlot
};
@NgModule({
  declarations: [
    TaskLoadingComponent,
    TaskBagComponent,
    TaskComponent,
    TaskContent,
    MianTaskContainerComponent,
    TaskDropSlot
  ],
  exports: [
    MianTaskContainerComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class TaskModule {}
export default TaskModule;
