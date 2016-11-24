import { RouterModule } from '@angular/router'

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { DashBoardComponent } from './dashboard.component';
import { DashBoardHomeComponent } from './dashboard-home.component';
import { DashBoardCalendarComponent } from './dashboard-calendar.component';
import { DashBoardNoteComponent } from './dashboard-note.component';

import { DashboardRoutes } from './dashboard.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [
    DashBoardComponent,
    DashBoardHomeComponent,
    DashBoardCalendarComponent,
    DashBoardNoteComponent
  ],
  providers: [
  ]
})
export class DashBoardModule { }