import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project, projectStatus, projectDepartments } from '../../projects.model';
import { ProjectsService } from '../../projects.service';
import { User } from '../../user.model'
import { UserService } from '../../user.service';

/*
MANAGER Table to manage workers
*/
@Component({
  selector: 'app-workertable',
  templateUrl: './workertable.component.html',
  styleUrls: ['./workertable.component.css']
})

export class WorkertableComponent implements OnInit {

  @Input() tblHeaders: string[] = [];
  @Input() usrData: User[] = [];
  // @Input() mngData: Project[] = [];
  @Input() tblData!: Array<any>;
  // @Input() tableType: 'projects' | 'workers' | 'user' = 'user';
  @Output() cellSelect = new EventEmitter<User>();

  selectedWorker!: User;
  // statusDropValues = Object.keys(projectStatus);
  // statusDropValues = Object.values(projectStatus);
  // selectedStatus = projectStatus.active;
  projectDropValues = this.projectSrv.getProjects().map((proj) => {
    return proj.code;
  })
  departmentDropValues = Object.values(projectDepartments);
  workerDropValues = this.userSrv.getUsers.map((userID) => {
    return userID.userId;
  });


  constructor(private projectSrv: ProjectsService, private userSrv: UserService) { }

  ngOnInit() {
    console.log(this.tblHeaders);
    console.log(this.usrData);
    // console.log(projectStatus);
    this.ifWorker();

    // console.log(this.mngData[0].status);
  }

  ifWorker() {
    console.log('in worker manager table mode');
    this.selectedWorker = this.usrData[0];
    console.log(this.selectedWorker);
    console.log(this.usrData);
  }

  onClickCell(cell: User) {
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
    this.selectedWorker = this.userSrv.getUserById(rowID);
    console.log(this.selectedWorker);
    // this.cellSelect.emit(this.selectedProject);
  }

  onApplyChanges(table: HTMLTableElement) {
    this.usrData = this.userSrv.getUsers;
    alert('Update Table Manually, gotta go into Reactive form field and observables. Ez stuffs\nToets maar met die remove\nDie add natuurlik baie makliker');
  }
}
