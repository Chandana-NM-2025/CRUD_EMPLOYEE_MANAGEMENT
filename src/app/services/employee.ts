// import { Injectable } from '@angular/core';

// @Injectable({ providedIn: 'root' })
// export class EmployeeService {
//   private key = 'employees_v1';
//   private employees: any[] = [];

//   constructor() {
//     try {
//       this.employees = JSON.parse(localStorage.getItem(this.key) || '[]');
//     } catch {
//       this.employees = [];
//     }
//   }

//   getEmployees() {
//     return this.employees;
//   }

//   getEmployee(index: number) {
//     if (index<0 || index>=this.employees.length) return null;
//     return this.employees[index];
//   }

//   addEmployee(emp: any) {
//     this.employees.push(emp);
//     this.save();
//   }

//   updateEmployee(index: number, emp: any) {
//     if (index<0 || index>=this.employees.length) return;
//     this.employees[index] = emp;
//     this.save();
//   }

//   deleteEmployee(index: number) {
//     if (index<0 || index>=this.employees.length) return;
//     this.employees.splice(index,1);
//     this.save();
//   }

//   private save() {
//     localStorage.setItem(this.key, JSON.stringify(this.employees));
//   }
// }





import { Injectable } from '@angular/core';

export interface Employee {
  id: number;
  name: string;
  domain: string;
}

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private key = 'employees_v1';
  private employees: Employee[] = [];

  constructor() {
    this.load();
  }

  private load() {
    try {
      this.employees = JSON.parse(localStorage.getItem(this.key) || '[]');
    } catch {
      this.employees = [];
    }
  }

  private save() {
    localStorage.setItem(this.key, JSON.stringify(this.employees));
  }

  getEmployees(): Employee[] {
    return [...this.employees]; // return a copy to avoid direct mutation
  }

  getEmployee(index: number): Employee | null {
    if (index < 0 || index >= this.employees.length) return null;
    return this.employees[index];
  }

  addEmployee(emp: Employee) {
    this.employees.push(emp);
    this.save();
  }

  updateEmployee(index: number, emp: Employee) {
    if (index < 0 || index >= this.employees.length) return;
    this.employees[index] = emp;
    this.save();
  }

  deleteEmployee(index: number) {
    if (index < 0 || index >= this.employees.length) return;
    this.employees.splice(index, 1);
    this.save();
  }

  clearAll() {
    this.employees = [];
    this.save();
  }
}
