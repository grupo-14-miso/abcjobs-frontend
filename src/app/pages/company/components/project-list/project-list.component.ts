import { Component, OnInit } from '@angular/core';
import { Offer } from '../../model/offer';
import { CompanyService } from '../../service/company.service';
import { AuthService } from 'src/app/core/template/services/auth.service';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { Modal } from 'bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Offer[] = [];

  constructor(
    private companyService: CompanyService,
    private authService: AuthService,
    private preloaderService: PreloaderService,
    private router: Router) { }

  ngOnInit() {
    this.loadData()
  }

  createModal(){
    const myElement = document.getElementById('createModal');
    if (myElement) {
      const myModal = new Modal(myElement);
      myModal.show();
    } else {
      console.error('El elemento no se encontró en el DOM.');
    }
  }

  loadData() {
    this.preloaderService.showPreloader();
    this.companyService.getOffers(this.authService.getUserKey()).subscribe(data => {
      console.log(data)
      this.projects = data
      console.log(this.projects)
      this.preloaderService.hidePreloader();
    });
  }

  team(offer: Offer) {
    console.log(offer)
    this.router.navigate(['projects/team', offer.offer_id]);
  }

}
