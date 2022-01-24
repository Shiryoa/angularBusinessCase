import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiLoginData } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  connectionned = true;
  public token!: string;
  constructor(private httpClient: HttpClient) { }


  checkAuth(email: string, pass: string): Promise<boolean> {
    let url = "https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/login";

    return lastValueFrom(
      this.httpClient.post<ApiLoginData>(url, JSON.stringify({
        email: email,
        password: pass
      }))
    ).then(
      res => {
        this.token = res.token;
        this.connectionned = true;
        return true;
      },
      erreur => false
    )

  }
}
