
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

import { ProjectRoutes } from './project.routes';

//service
import { GetProjectTasks } from '../../service/project/getProjectTasks';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ProjectRoutes)
    ],
    declarations: [
        RightSlider,
        ProjectTaskDetalComponent,
        ProjectComponent,
        ProjectMainTaskComponent,
        ProjectBugsComponent,
        ProjectTopicsComponent,
        ProjectMemberComponent,
    ],
    providers: [
        GetProjectTasks
    ]
})
export class ProjectModule { }