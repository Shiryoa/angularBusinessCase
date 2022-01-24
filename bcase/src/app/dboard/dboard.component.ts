import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiStatData } from '../models/types';
import { AuthServiceService } from '../services/auth-service.service';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-dboard',
  templateUrl: './dboard.component.html',
  styleUrls: ['./dboard.component.css']
})
export class DboardComponent {
  http: HttpClient;
  recurence!: number;
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Ventes par Jour', cols: 3, rows: 1 },
          { title: 'Nombre de Commandes / Paniers', cols: 3, rows: 1 },
          { title: 'Nombre de visites', cols: 3, rows: 1 },
          { title: 'Valeur panier Moyen', cols: 3, rows: 1 },
          { title: 'Total de paniers vendus', cols: 3, rows: 1 }
        ];
      }

      return [
        { title: 'Ventes par Jour', cols: 1, rows: 1 },
        { title: 'Nombre de Commandes / Paniers', cols: 1, rows: 2 },
        { title: 'Nombre de visites', cols: 1, rows: 3 },
        { title: 'Valeur panier Moyen', cols: 1, rows: 1 },
        { title: 'Total de paniers vendus', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, http: HttpClient, private authService: AuthServiceService) {
    this.http = http;
    this.getAllStats();
  }
  ngOnInit(): void {
  }
  getAllStats() {
    let url = 'https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/stats/2001/2021';
    let httpHeaders = new HttpHeaders({
      "Authorization": this.authService.token,
      "Content-Type": "application/json"
    });
    lastValueFrom(this.http.get<ApiStatData>(url, { headers: httpHeaders })).then(
      res => this.recurence = res.recurrence
    );
  }
}
