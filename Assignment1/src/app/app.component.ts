import { Component } from '@angular/core';

const data = [
  {
    firstName: "Nawal",
    lastName: "Kishor",
    email: "nawal@gmail.com"
  },
  {
    firstName: "Nawal",
    lastName: "Kishor",
    email: "nawal@gmail.com"
  },
  {
    firstName: "Nawal",
    lastName: "Kishor",
    email: "nawal@gmail.com"
  },
  {
    firstName: "Nawal",
    lastName: "Kishor",
    email: "nawal@gmail.com"
  },
  {
    firstName: "Nawal",
    lastName: "Kishor",
    email: "nawal@gmail.com"
  },
  {
    firstName: "Nawal",
    lastName: "Kishor",
    email: "nawal@gmail.com"
  },
  {
    firstName: "Nawal",
    lastName: "Kishor",
    email: "nawal@gmail.com"
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  public data = data;

}
