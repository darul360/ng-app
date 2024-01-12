import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,FormsModule,MatButtonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  authService: any;
  constructor(authService: AuthService){this.authService = authService;}
onSubmit(form : NgForm){
this.authService
.logIn(form.value);
}
onLogout(){
  this.authService.logOut();
}
}
