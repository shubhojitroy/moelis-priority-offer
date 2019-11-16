import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncludesRoutingModule } from './includes-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, PrivacyPolicyComponent, ContactComponent],
  imports: [
    CommonModule,
    IncludesRoutingModule
  ],
  exports: [HeaderComponent, FooterComponent, PrivacyPolicyComponent, ContactComponent]
})
export class IncludesModule { }
