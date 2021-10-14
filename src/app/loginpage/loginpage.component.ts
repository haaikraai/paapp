import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  public allUsers: User[] = [];
  public selectedUserId: string = '';

  constructor(private routing: Router, private route: ActivatedRoute, private userSrv: UserService ) {}

  ngOnInit() {
    this.allUsers = this.userSrv.getUsers;
    console.log(this.allUsers);
  }

  onLogin(formData: HTMLInputElement) {

    console.log('submitting');
    console.log(formData.value);
    this.routing.navigateByUrl('worker');
  }

  onSubmit(userId: string) {
    // console.log(userId);

    // setTimeout(() => {
    //   console.log(userId);
    // },5000);

    if (this.userSrv.getUserById(userId).role == 'worker') {
      console.log('navigating to', './worker/',userId);
    this.routing.navigate(['.','worker',userId]);
    }
    if (this.userSrv.getUserById(userId).role == 'manager') {
      this.routing.navigate(['.','admin']);
    }

  }

}
