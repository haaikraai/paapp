import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project, projectStatus, projectDepartments } from '../projects.model';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-spreadtable',
  templateUrl: './spreadtable.component.html',
  styleUrls: ['./spreadtable.component.css']
})
export class SpreadtableComponent implements OnInit {

  @Input() tblHeaders: string[] = [];
  @Input() usrData: User[] = [];
  @Input() mngData: Project[] = [];
  @Input() tblData!: Array<any>;
  @Input() tableType: 'projects' | 'workers' | 'user' = 'user';
  @Output() cellSelect = new EventEmitter<Project>();

  selectedProject!: Project;
  // statusDropValues = Object.keys(projectStatus);
  statusDropValues = Object.values(projectStatus);
  selectedStatus = projectStatus.active;
  departmentDropValues = Object.values(projectDepartments);
  workerDropValues = this.userSrv.getUsers.map((userID) => {
    return userID.userId;
  });


  constructor(private projectSrv: ProjectsService, private userSrv: UserService) { }

  ngOnInit() {
    console.log(this.tblHeaders);
    console.log(this.mngData);
    console.log(projectStatus);
    this.ifAdmin();

    // console.log(this.mngData[0].status);
  }

  ifAdmin() {
    console.log('in admin table mode');
    this.selectedProject = this.mngData[0];
    console.log(this.selectedProject);
    console.log(this.statusDropValues);
  }

  onClickCell(cell: Project) {
    // this.selectedCell = cell;
    // console.log(this.selectedCell);
    let cellBlock = cell;
    // console.log(cell.contentEditable);
    console.log(cellBlock);
    this.cellSelect.emit(cellBlock);
    // console.log(cellBlock.target.value);
    // cell.setAttribute('contenteditable', !cell.isContentEditable as unknown as string);
    // cellBlock.rem
    // console.log((<HTMLElement>cell.target).innerHTML);
    // console.log(<HTMLElement>cellBlock.innerHtML);
    // console.log(cell.target);
  }

  onEditCell(cell: HTMLTableCellElement, rowID: string) {
    // this.selectedCell = (<HTMLElement>cell.target);
    // this.selectedCell = cell.t
    console.log(cell.textContent, rowID);
    this.selectedProject = this.projectSrv.getProjectById(rowID);
    console.log(this.selectedProject);
    // this.cellSelect.emit(this.selectedProject);
  }

  onApplyChanges(table: HTMLTableElement) {
    this.mngData = this.projectSrv.getProjects();
    alert('Update Table Manually, gotta go into Reactive form field and observables. Ez stuffs\nToets maar met die remove\nDie add natuurlik baie makliker');
  }
}
