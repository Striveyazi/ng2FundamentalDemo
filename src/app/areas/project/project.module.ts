import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { ProjectComponent } from './project.component';
import { ProjectMainTaskComponent } from './project-maintask.component';
import { ProjectBugsComponent } from './project-bugs.component';
import { ProjectTopicsComponent } from './project-topics.component';
import { ProjectMemberComponent } from './project-member.component'
import { ProjectTaskDetalComponent } from "./project-task-detail.component";


import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProjectRoutingModule
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