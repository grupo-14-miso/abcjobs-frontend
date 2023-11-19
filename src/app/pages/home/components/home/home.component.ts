import { Component, OnInit } from '@angular/core';
import Translate from "@google-cloud/translate";
import { TranslationService } from '../../../../core/template/services/translation.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/template/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService)  {
  }

  ngOnInit() {
    if(this.authService.isCandidate()){
      this.router.navigate(['users']);
    }
    if(this.authService.isCompany()){
      this.router.navigate(['dashboard']);
    }
    if(this.authService.isAdmin()){
      this.router.navigate(['dashboard']);
    }
  }

  users() {
    this.router.navigate(['/login', "Candidate"]);
  }

  companies() {
    this.router.navigate(['/login', "Company"]);
  }

  admin() {
    this.router.navigate(['/login', "Admin"]);
  }

}
