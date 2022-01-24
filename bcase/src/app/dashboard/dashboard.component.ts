import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiStatData } from '../models/types';
import { AuthServiceService } from '../services/auth-service.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  http: HttpClient;
  recurence!: number;

  constructor(http: HttpClient, private authService: AuthServiceService) {
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
