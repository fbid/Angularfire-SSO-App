import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';

import { HomepageComponent } from './ui/homepage/homepage.component';
import { UserDashboardComponent } from './ui/user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'dashboard', component: UserDashboardComponent, canActivate: [AuthGuard] },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
