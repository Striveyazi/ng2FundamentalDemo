import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { ProjectModule } from './areas/project/project.module'

import { ProjectComponent }  from './areas/project/project.component';

import { ProjectsComponent } from './areas/projects/projects.component';
import { ProjectsListComponent } from './areas/projects/projects-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectModule,
    RouterModule.forChild([
        {
          path:'',
          component:ProjectsComponent,
          children:[{
            path:'projects',
            component:ProjectsListComponent
          },
          {
            path:'project/:Id',
            component: ProjectComponent
          }]
        }
    ])
  ],
  declarations: [
    ProjectsComponent,
    ProjectsListComponent
  ],
  providers: [
  ]
})

export class ProjectsModule {}