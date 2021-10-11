import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WorkerComponent } from './worker/worker.component';
import { SpreadtableComponent } from './spreadtable/spreadtable.component';
import { NavguideComponent } from './navguide/navguide.component';
import { NotesComponent } from './notes/notes.component';
import { ProjectsComponent } from './manager/projects/projects.component';
import { WorkersComponent } from './manager/workers/workers.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'quick',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginpageComponent,
  },
  {
    path: 'admin',
    component: ManagerComponent,
    children: [
      {
        path: 'manageprojects',
        component: ProjectsComponent,
      },
      {
        path: 'manageworkers',
        component: WorkersComponent,
      },
    ],
  },
  {
    path: 'table',
    component: SpreadtableComponent,
  },
  {
    path: 'quick',
    component: NavguideComponent,
  },
  {
    path: 'notes',
    component: NotesComponent,
  },
  {
    path: 'worker',
    component: WorkerComponent,
    children: [
      {
        path: ':id',
        component: WorkerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
