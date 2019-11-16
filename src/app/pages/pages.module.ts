import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '../services/services.module';

import { PagesRoutingModule } from './pages-routing.module';

import { ResidencyComponent } from './residency/residency.component';
import { RegistrationComponent } from './registration/registration.component';
import { RestrictionComponent } from './restriction/restriction.component';
import { HomeComponent } from './home/home.component';
import { OfferModule } from './offer/offer.module';



@NgModule({
  declarations: [ResidencyComponent, RegistrationComponent, RestrictionComponent, HomeComponent],
  imports: [
    CommonModule,
    OfferModule,
    ServicesModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
