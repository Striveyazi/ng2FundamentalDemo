import { Routes } from '@angular/router';

import { ProjectComponent } from './project.component';
import { ProjectMainTaskComponent } from './project-maintask.component';
import { ProjectBugsComponent } from './project-bugs.component';
import { ProjectTopicsComponent } from './project-topics.component';

import { ProjectTaskDetalComponent } from "./project-task-detail.component";

export const ProjectRoutes: Routes = [
    {
        path: 'project/:Id',
        component: ProjectComponent,
        children: [
            {
                path: 'Task',
                component: ProjectMainTaskComponent,
                children: [
                    {
                        path: ':Id',
                        component: ProjectTaskDetalComponent
                    },
                    {
                        path: ''
                    }
                ]
            },
            {
                path: 'Bug',
                component: ProjectBugsComponent
            },
            {
                path: 'Topic',
                component: ProjectTopicsComponent
            },
            // {
            //     path: 'Member',
            //     component: ProjectMemberComponent
            // }
        ]
    },
    {
        path: 'project/:Id',
        redirectTo: 'project/:Id/Task',
        pathMatch: 'full'
    },
];
