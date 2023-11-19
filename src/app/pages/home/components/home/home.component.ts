import { Component, OnInit } from '@angular/core';
import Translate from "@google-cloud/translate";
import { TranslationService } from '../../../../core/template/services/translation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router)  {
  }

  ngOnInit() {
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
