import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from 'src/app/projects.model';
import { ProjectsService } from 'src/app/projects.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // @Output()

  loadedProjects: Project[] = [];
  colheaders: string[] = ['Job Code', 'Project Name','Status','Department','Project NOtes','Workers'];

  loadedProject!: Project;
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

  onRemove() {
    this.projectSrv.removeProject(this.loadedProject);
  }

  onSelect(selectedProject: Project) {
    console.log('selected Project Row');
    console.log(selectedProject);
    this.loadedProject = selectedProject;
  }
}
