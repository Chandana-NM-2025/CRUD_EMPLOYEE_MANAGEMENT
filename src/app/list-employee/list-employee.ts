import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-employee.html'
})
export class ListEmployeeComponent implements OnInit {
  employees: any[] = [];
  query = '';

  constructor(private empService: EmployeeService, private router: Router) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.employees = this.empService.getEmployees();
  }

  delete(index: number) {
    if (!confirm('Delete this employee?')) return;
    this.empService.deleteEmployee(index);
    this.load();
  }

  edit(index: number) {
    this.router.navigate(['/update', index]);
  }

  filtered() {
    const q = this.query.trim().toLowerCase();
    if (!q) return this.employees;
    return this.employees.filter(e =>
      (e.name||'').toLowerCase().includes(q) ||
      (e.empId||'').toLowerCase().includes(q) ||
      (e.domain||'').toLowerCase().includes(q)
    );
  }
}
