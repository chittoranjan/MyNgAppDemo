import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './MyNgApp/AuthService/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


  constructor(
     private router: Router,
     public authService: AuthService
     ) {

  }

  title = 'Ng App';

  logout(): boolean {
    this.authService.logout();
    return false;
  }
}
