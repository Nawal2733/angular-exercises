import { Component, OnInit } from '@angular/core';

class User {
  constructor(
    public email: string,
    public password: string
  ){ }
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginModel = new User('', '');

  onSubmit(data){
    console.log(data)
  }
  

}
