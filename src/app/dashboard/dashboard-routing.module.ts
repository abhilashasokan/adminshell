import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guard/auth.guard';
import { ShellComponent } from './../layout/containers/shell/shell.component';
import { DashboardComponent } from './dashboard.component';

const routesDashboard: Route[] = [
  {
    path: '',
    component: ShellComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesDashboard)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
