// import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';

import { DashBoardComponent } from './dashboard.component';
import { DashBoardHomeComponent } from './dashboard-home.component';
import { DashBoardCalendarComponent } from './dashboard-calendar.component';
import { DashBoardNoteComponent } from './dashboard-note.component';

export const DashboardRoutes: Routes = [
    {
        path: '',
        component: DashBoardComponent,
        children: [
            {
                path: 'dashboard',
                component: DashBoardHomeComponent
            },
            {
                path: 'calendar',
                component: DashBoardCalendarComponent
            },
            {
                path: 'note',
                component: DashBoardNoteComponent
            }
        ]
    }
];