import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  link = 'https://api.covid19api.com/'

  getCountries() {
    return this.http.get(this.link + 'countries')
  }

  getCountryInfo(id) {
    return this.http.get(this.link + 'total/country/' + id)
  }
}
