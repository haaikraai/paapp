import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private routing: Router) { }

  ngOnInit() {
  }

  onLogin(formData: HTMLInputElement) {

    console.log('submitting');
    console.log(formData.value);
    this.routing.navigateByUrl('worker');
  }

}
