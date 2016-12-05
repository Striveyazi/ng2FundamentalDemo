
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { ProjectComponent } from './project.component';
import { ProjectMainTaskComponent } from './project-maintask.component';
import { ProjectBugsComponent } from './project-bugs.component';
import { ProjectTopicsComponent } from './project-topics.component';
import { ProjectMemberComponent } from './project-member.component'

import { RightSlider } from '../../common/slider/right-slider.component'
import { ProjectTaskDetalComponent } from '../../common/task/project-task-detail.component'
import { TaskEditorComponent } from '../../common/editor/task-editor.component'

import { ProjectRoutes } from './project.routes';
import { TreeModule } from 'app/angular2-tree-component/dist/angular2-tree-component';

//service
import { GetProjectTasks } from '../../service/project/getProjectTasks';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ProjectRoutes),
        TreeModule
    ],
    declarations: [
        RightSlider,
        ProjectTaskDetalComponent,
        ProjectComponent,
        ProjectMainTaskComponent,
        ProjectBugsComponent,
        ProjectTopicsComponent,
        ProjectMemberComponent,
        TaskEditorComponent
    ],
    providers: [
        GetProjectTasks
    ]
})
export class ProjectModule { }