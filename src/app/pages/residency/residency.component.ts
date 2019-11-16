import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'mpo-residency',
  templateUrl: './residency.component.html',
  styleUrls: ['./residency.component.scss']
})
export class ResidencyComponent implements OnInit {

  pageTitle = 'Residency Validation';
  cardTitle = 'Welcome';
  cardSubTitle = 'Validate your Residency to access the prospectus';
  cardLabel = 'Country of residency';
  disabled = false;
  countryform: FormGroup;
  country: FormControl;
  countries: any[];

  constructor(private router: Router, private countryService: CountryService) { }

  createFormControls() {
    this.country = new FormControl('', Validators.required);
  }

  createForm() {
    this.countryform = new FormGroup({
      country: this.country
    });
  }

  ngOnInit() {
    this.countries = this.countryService.getcountries();
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    if (this.countryform.valid) {
      if (this.country.value === 'Australia') {
        console.log('Form Submitted!', this.countryform.value);
        this.router.navigate(['/pds-download']);
        this.countryform.reset();
      } else {
        this.router.navigate(['/restriction']);
      }
    }
  }

}
