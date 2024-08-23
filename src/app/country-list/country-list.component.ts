import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit {
  countries: any[] = [];
  filteredCountries: any[] = [];
  regions: any[] = [];
  countryFilterForm: FormGroup;

  constructor(
    private countryService: CountryService,
    private fb: FormBuilder
  ) {
    // Initialize the form
    this.countryFilterForm = this.fb.group({
      search: [''],
      region: ['']
    });
  }

  ngOnInit(): void {
    // Subscribe to country data
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data;
      this.filteredCountries = data;
      this.regions = [...new Set(data.map((country: { region: any; }) => country.region))].filter(region => region);
    });

    // Subscribe to form changes to filter countries
    this.countryFilterForm.valueChanges.subscribe((formValues) => {
      this.filterCountries();
    });
  }

  filterCountries(): void {
    debugger
    const { search, region } = this.countryFilterForm.value;
    
    // Filter countries based on the search term and selected region
    this.filteredCountries = this.countries.filter((country) => {
      debugger
      const matchesSearch = country.name.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = region ? country.region === region : true;
      return matchesSearch && matchesRegion;
    });
  }
}
