import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WorkerComponent } from './worker/worker.component';
import { ManagerComponent } from './manager/manager.component';
import { SpreadtableComponent } from './spreadtable/spreadtable.component';
import { WorkerSpreadtableComponent } from './workerspreadtable/workerspreadtable.component';
import { NavguideComponent } from './navguide/navguide.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'quick',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginpageComponent
  },
  {
    path: 'worker',
    component: WorkerComponent
  },
  {
    path: 'admin',
    component: ManagerComponent
  },
  {
    path: 'table',
    component: SpreadtableComponent
  },
  {
    path: 'quick',
    component: NavguideComponent
  },
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'worker/:id',
    component: WorkerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
