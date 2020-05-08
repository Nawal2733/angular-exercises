import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employeeData;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployeeData().subscribe(
      res => this.employeeData = res.data,
      err => console.log(err)
    )
  }



}
