import { Routes } from '@angular/router';

import { ProjectComponent } from './project.component';
import { ProjectMainTaskComponent } from './project-maintask.component';
import { ProjectBugsComponent } from './project-bugs.component';
import { ProjectTopicsComponent } from './project-topics.component';

import { RightSlider } from '../../common/slider/right-slider.component'
import { ProjectTaskDetalComponent } from '../../common/task/project-task-detail.component'


export const ProjectRoutes: Routes = [
    {
        path: 'project/:id',
        component: ProjectComponent,
        children: [
            {
                path: 'Task',
                component: ProjectMainTaskComponent,
                children: [
                    {
                        path: ':id',
                        component: RightSlider,
                        children: [{
                            path: '',
                            component: ProjectTaskDetalComponent
                        }]
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
            {
                path:''
            }
        ]
    },
    // {
    //     path: 'project/:Id',
    //     redirectTo: 'project/:Id/Task',
    //     pathMatch: 'full'
    // },
];
