import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './Employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './Employee/update-employee/update-employee.component';

const routes: Routes = [
  // { path: 'employees', component: EmployeeListComponent },
  // { path: 'create-employee', component: CreateEmployeeComponent },
  // { path: '', redirectTo: 'employees', pathMatch: 'full' },
  // { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  // { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  {
    path: 'Employee',
    loadChildren: () =>
      import('./Employee/employee.module').then((m) => m.EmployeesModule),
  },
  {
    path: 'dashBoard',
    loadChildren: () =>
      import('./dashBoard/dash-board-home/dashBoard.module').then((m) => m.DashboardModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
