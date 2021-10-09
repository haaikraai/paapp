import { Component, OnInit } from '@angular/core';
import { User } from '../../user.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  // @Input() tblHeaders: string[] = [];
  // @Input() usrData: User[];
  // @Input() mngData: Project[] = [];
  // @Output() cellSelect = new EventEmitter<Project>();

  allWorkers: User[] = this.userSrv.getUsers;
  colheaders: string[] = ['Staff Code', 'Name','Todo extract\nSurname','Cost Rate','Billing Rate'];


  constructor(private userSrv: UserService) { }

  ngOnInit(): void {
    console.log('in worker table now');
    console.log(this.allWorkers);
  }

  onSelect() {
    console.log('heres');
  }

}
