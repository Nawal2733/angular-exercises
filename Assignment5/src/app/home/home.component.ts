import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';

class Employee {
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public email: string
  ){}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public employeesData;

  public editEmployee;

  newEmployee = new Employee(null, '', '', '');

  constructor(private _employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.getEmployees()
  }

  getEmployees() {
    this.employeesData = this._employeeService.getEmployee()
  }

  onClickEdit(id){
    this.editEmployee = this._employeeService.getSingleEmployee(id)[0 ]
  }  

  update(id, data){
    this._employeeService.updateEmployee(id , data)
  }

  deleteEmployee(id){
    console.log(id)
    this._employeeService.deleteEmployee(id)
  }


  addNewEmployee(data){
    // console.log(this.employeesData)
    // console.log(data)
    let newEmployee = {
      id : this.employeesData[this.employeesData.length-1].id,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email
    }

    this._employeeService.addEmployee(newEmployee);
    newEmployee = new Employee(null, '', '', '');
  }

}
