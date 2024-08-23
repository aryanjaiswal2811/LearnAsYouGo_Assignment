import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private dataUrl = '../assets/JsonData/data.json';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {
    return this.http.get(this.dataUrl);
  }

  getCountryByName(name: string): Observable<any> {
    return this.getCountries().pipe(
      map((countries: any[]) => countries.find(country => country.name === name))
    );
  }
}
