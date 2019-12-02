import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../core/guard/auth.guard';

const routesDashboard: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    canActivateChild: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesDashboard)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
