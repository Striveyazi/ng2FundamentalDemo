import { Routes } from '@angular/router'

import { ProjectsComponent } from './projects.component';
import { ProjectsListComponent } from './projects-list.component';


export const ProjectsRoutes: Routes = [
    {
        path: '',
        component: ProjectsComponent,
        children: [{
            path: 'project',
            component: ProjectsListComponent
        }]
    },
    {
        path:'project/:id',
        loadChildren: '../project/project.module#ProjectModule'
    }
];