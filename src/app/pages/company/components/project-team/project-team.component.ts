import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../model/member';
import { Modal } from 'bootstrap';
import { Offer } from '../../model/offer';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { CompanyService } from '../../service/company.service';
import { MemberTeam } from '../../model/member-team';

@Component({
  selector: 'app-project-team',
  templateUrl: './project-team.component.html',
  styleUrls: ['./project-team.component.css']
})
export class ProjectTeamComponent implements OnInit {

  project: string;
  members: Member[] = [];
  offer?: Offer;

  constructor(
    private route: ActivatedRoute,
    private preloaderService: PreloaderService,
    private companyService: CompanyService) {
    this.project = ""
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.project = params.get('project') as string;
      console.log(this.project)
      this.loadData()
    });


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
    this.companyService.getOfferById(Number(this.project)).subscribe(data => {
      console.log(data)
      this.offer = data
    });
    this.companyService.getTeam(Number(this.project)).subscribe(data => {
      console.log(data)
      this.members = data
      this.preloaderService.hidePreloader();
    });
  }

}
