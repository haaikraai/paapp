import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from '../projects.model';
import { ProjectsService } from '../projects.service';
import { UserService } from '../user.service';
// import { EditprojectdialogComponent } from '../editprojectdialog/editprojectdialog.component';
import { SpreadtableComponent } from '../spreadtable/spreadtable.component';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})

export class ManagerComponent implements OnInit {

  activepage: string = 'projects';
  loadedProjects: Project[] = [];
  colheaders: string[] = ['Job Code', 'Project Name','Status','Department','Project NOtes','Workers'];

  loadedCell!: Project;
  constructor(private projectSrv: ProjectsService, private UserSrv: UserService, private editDialogue: MatDialog) {
  }

  ngOnInit(): void {
    this.loadedProjects = this.projectSrv.getProjects();
    console.log(this.loadedProjects);
    // console.log(this.loadedProjects[0].)
  }

  onEdit(selectedProject: Project) {
    console.log('from right component');
    console.log(selectedProject);
    // let dialogRes = this.editDialogue.open(EditprojectdialogComponent, {
    //   data: {code: "projcode", projname: "Project 7"}
    // })
  }

}
