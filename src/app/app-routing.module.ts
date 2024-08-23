import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

const routes: Routes = [
  { path: '', component: CountryListComponent },
  { path: 'country/:name', component: CountryDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
