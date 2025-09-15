import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService, Employee } from '../services/employee';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.html'
})
export class AddEmployee {
  employee = { name: '', empId: '', domain: '' };

  constructor(private empService: EmployeeService, private router: Router) {}

  onSubmit() {
    if (!this.employee.name || !this.employee.empId) {
      alert('Name and EmpID required');
      return;
    }

    const newEmp: Employee = {
      id: Number(this.employee.empId),  // map empId → id
      name: this.employee.name,
      domain: this.employee.domain
    };

    this.empService.addEmployee(newEmp);

    // reset form
    this.employee = { name: '', empId: '', domain: '' };

    // navigate back
    this.router.navigateByUrl('/');
  }
}
