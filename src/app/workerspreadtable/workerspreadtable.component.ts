import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project, projectStatus } from '../projects.model';

@Component({
  selector: 'app-workerspreadtable',
  templateUrl: './workerspreadtable.component.html',
  styleUrls: ['./workerspreadtable.component.css']
})
export class WorkerSpreadtableComponent implements OnInit {

  @Input() tblHeaders: string[] = [];
  @Input() usrData: [{}] = [{}];
  @Input() mngData: Project[] = [];
  @Input() selectedCell: string = '';

  selectedProject!: Project;
  statusDropValues = Object.keys(projectStatus);


  constructor(private projectSrv: ProjectsService) { }

  ngOnInit() {
    console.log(this.tblHeaders);
    console.log(this.mngData);
    console.log(projectStatus);
    this.ifAdmin();
  }

  ifAdmin() {
    console.log('in admin table mode');
    console.log(this.statusDropValues);
  }

  ifWorker() {
    console.log('in worrker tgable mode');
    console.log('nada');
  }

  selectCell(cell: string) {
    this.selectedCell = cell;
    console.log(this.selectedCell);
  }
}
