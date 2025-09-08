import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggleForm = new EventEmitter<void>();

  constructor(public auth: AuthService, private router: Router) { }

  onAddRecipe() {
    this.router.navigateByUrl('/ajouter');
  }

  login() {
    this.auth.loginWithRedirect({
      appState: { target: '/ajouter' }
    });
  }

  logout() {
    this.auth.logout({ 
      logoutParams: { 
        returnTo: window.location.origin 
      } 
    });
  }
}