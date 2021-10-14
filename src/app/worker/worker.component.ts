import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  loadedWorker!: User;

  constructor(private aroute: ActivatedRoute, private userSrv: UserService) {
  }

  ngOnInit(): void {
    console.log(this.aroute.snapshot.params['id']);
    // this.loadedWorker = this.userSrv.getUserById(this.aroute.snapshot.params['id']);
    this.loadedWorker = this.userSrv.getUserById('3');
    console.log(this.loadedWorker);

  }

}
