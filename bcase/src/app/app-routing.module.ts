import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonGuardGuard } from './guard/mon-guard.guard';

const routes: Routes = [
  { path: "connexion", component: ConnexionComponent },
  { path: "dashboard", component: DashboardComponent, canActivate: [MonGuardGuard] },
  { path: "**", redirectTo: "connexion" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
