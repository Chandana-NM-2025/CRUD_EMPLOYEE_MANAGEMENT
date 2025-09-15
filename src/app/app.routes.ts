import { Routes } from '@angular/router';

import { ListEmployeeComponent } from './list-employee/list-employee';

import { AddEmployee } from './add-employee/add-employee';
import { UpdateEmployeeComponent } from './update-employee/update-employee';

export const routes: Routes = [
  { path: '', component: ListEmployeeComponent },
  { path: 'add', component: AddEmployee },
  { path: 'update/:index', component: UpdateEmployeeComponent },
  { path: '**', redirectTo: '' }
];
