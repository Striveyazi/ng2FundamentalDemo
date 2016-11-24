import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home';
// import { AboutComponent } from './about';
// import { NoContentComponent } from './no-content';

import { DashBoard } from './dashboard'

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  // { path: '',      component: HomeComponent },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashBoardModule'  },
  // { path: 'projects',  loadChildren: 'app/projects/projects.module#ProjectsModule'   },
  // { path: 'home',  component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // {
  //   path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => {
  //     return comp.default;
  //   })
  //   ,
  // },
  // { path: '**',    component: NoContentComponent },
];
