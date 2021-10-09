import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpreadtableComponent } from './spreadtable/spreadtable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WorkerComponent } from './worker/worker.component';
import { ManagerComponent } from './manager/manager.component';

import { MatmodulesModule } from './matmodules/matmodules.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { NavguideComponent } from './navguide/navguide.component';
import { NotesComponent } from './notes/notes.component';
import { MatDialogModule } from '@angular/material/dialog';

import { EditprojectdialogComponent } from './editprojectdialog/editprojectdialog.component';
// import { WorkerspreadtableComponent } from './workerspreadtable/workerspreadtable.component';
// import { MatSelectModule } from '@angular/material/select'

@NgModule({
  declarations: [
    AppComponent,
    SpreadtableComponent,
    LoginpageComponent,
    WorkerComponent,
    ManagerComponent,
    ToolbarComponent,
    NavguideComponent,
    NotesComponent,
    EditprojectdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatmodulesModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
