import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { ProjectModule } from '../project/project.module';

import { ProjectsRoutes } from './projects.routes';;

//component for declarations
import { ProjectsComponent } from './projects.component';
import { ProjectsListComponent } from './projects-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectModule,
    RouterModule.forChild( ProjectsRoutes )
  ],
  declarations: [
    ProjectsComponent,
    ProjectsListComponent
  ],
  providers: [
  ]
})

export class ProjectsModule {}