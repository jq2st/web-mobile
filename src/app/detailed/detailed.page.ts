import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Country } from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.page.html',
  styleUrls: ['./detailed.page.scss'],
})
export class DetailedPage implements OnInit {

  cCountry: Country = {}
  newConfirmed: any
  newDeaths: any
  newRecovered: any

  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.httpService.getCountryInfo(params.id)
        .subscribe((country: Country[]) => {
          this.cCountry = country[country.length - 1]

          this.newConfirmed = +this.cCountry.Confirmed - +country[country.length - 2].Confirmed
          this.newDeaths = +this.cCountry.Deaths - +country[country.length - 2].Deaths
          this.newRecovered = +this.cCountry.Recovered - +country[country.length - 2].Recovered
        })
    })
  }

}
