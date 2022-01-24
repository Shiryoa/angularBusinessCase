import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  hide = true;
  public email!: string;
  public pass!: string;
  public connexionRatee = false;

  constructor(private monServiceAuth: AuthServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  validerForm() {
    this.monServiceAuth.checkAuth(this.email, this.pass).then(connexionValide => {
      if (connexionValide) {
        this.router.navigate(["dashboard"]);
      } else {
        this.connexionRatee = true;
      }
    });

  }

}
