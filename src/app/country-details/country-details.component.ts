import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../services/country.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.css',
})
export class CountryDetailsComponent {
  country: any;
  borderCountries: string[] = []; 

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const countryName: any = this.route.snapshot.paramMap.get('name');
    this.countryService.getCountryByName(countryName).subscribe((data) => {
      this.country = data;
      this.borderCountries = data.borders;
    });
  }
  getCurrencies(): string {
    return this.country.currencies.map((c: { name: string }) => c.name).join(', ');
  }
  getLanguage(): string {
    return this.country.languages.map((l: { name: string }) => l.name).join(', ');
  }
  goBack(): void {
    this.location.back();  // This will navigate back to the previous page
  }
}
