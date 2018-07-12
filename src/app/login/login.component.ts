import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cdk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }
  username : string
  password : string


  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["auth/tables"]);
    }else {
      alert("Invalid credentials");
      this.username="";
      this.password="";
    }
  }
}
