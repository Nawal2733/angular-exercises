import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const data = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",

  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",

  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",

  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",

  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",

  },
]

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private _http: HttpClient) { }

  getEmployee() {
    return data;
  }

  getSingleEmployee(id) {
    let user = data.filter(user => user.id == id);
    return user;
  }

  addEmployee(newdata) {
    data.push(newdata);
  }

  updateEmployee(id, newdata) {
    data.filter(user => {
      if(user.id == id){
        user.first_name = newdata.first_name,
        user.last_name = newdata.last_name,
        user.email = newdata.email
      }
    })
  }


  deleteEmployee(id) {
    console.log(id)
    let index = data.findIndex( user => user.id == id)
    data.splice(index, 1)
  }

}
