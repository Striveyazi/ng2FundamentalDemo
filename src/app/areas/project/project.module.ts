
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { ProjectComponent } from './project.component';
import { ProjectMainTaskComponent } from './project-maintask.component';
import { ProjectBugsComponent } from './project-bugs.component';
import { ProjectTopicsComponent } from './project-topics.component';
import { ProjectMemberComponent } from './project-member.component'
import { ProjectTaskDetalComponent } from "./project-task-detail.component";


import { ProjectRoutes } from './project.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ProjectRoutes)
    ],
    declarations: [
        ProjectComponent,
        ProjectMainTaskComponent,
        ProjectBugsComponent,
        ProjectTopicsComponent,
        ProjectMemberComponent,
        ProjectTaskDetalComponent
    ],
    providers: [
    ]
})
export class ProjectModule { }