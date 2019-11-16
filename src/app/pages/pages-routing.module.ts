import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidencyComponent } from './residency/residency.component';
import { RegistrationComponent } from './registration/registration.component';
import { RestrictionComponent } from './restriction/restriction.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: ResidencyComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'restriction', component: RestrictionComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
