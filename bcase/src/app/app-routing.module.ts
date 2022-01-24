import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { DboardComponent } from './dboard/dboard.component';
import { MonGuardGuard } from './guard/mon-guard.guard';

const routes: Routes = [
  { path: "connexion", component: ConnexionComponent },
  { path: "dboard", component: DboardComponent, canActivate: [MonGuardGuard] },
  { path: "**", redirectTo: "dboard" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
