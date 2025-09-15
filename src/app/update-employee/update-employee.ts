import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService, Employee } from '../services/employee';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.html'
})
export class UpdateEmployeeComponent implements OnInit {
  employee = { name: '', empId: '', domain: '' };
  index = -1;

  constructor(
    private route: ActivatedRoute,
    private empService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    const idx = Number(this.route.snapshot.paramMap.get('index'));
    this.index = isNaN(idx) ? -1 : idx;

    const e = this.empService.getEmployee(this.index);
    if (!e) {
      alert('Employee not found');
      this.router.navigateByUrl('/');
      return;
    }

    this.employee = {
      name: e.name,
      empId: e.id.toString(),
      domain: e.domain
    };
  }

  onUpdate() {
    if (this.index < 0) return;

    const updatedEmp: Employee = {
      id: Number(this.employee.empId),
      name: this.employee.name,
      domain: this.employee.domain
    };

    this.empService.updateEmployee(this.index, updatedEmp);
    this.router.navigateByUrl('/');
  }
}
