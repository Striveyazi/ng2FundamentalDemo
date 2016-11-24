import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { DashBoardComponent } from './dashboard.component';
import { DashBoardHomeComponent } from './dashboard-home.component';
import { DashBoardCalendarComponent } from './dashboard-calendar.component';
import { DashBoardNoteComponent } from './dashboard-note.component';

import { DashBoardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashBoardRoutingModule
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