import { Component, OnInit } from '@angular/core';
import { Candidate, Experience } from 'src/app/pages/search-engine/model/candidate';
import { WorkExperience } from '../../model/work-experience';
import { UserService } from '../../services/user.service';
import { AuthService } from 'src/app/core/template/services/auth.service';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit {

  experience: Experience[] = [];
  candidate!: Candidate
  workExperience!: WorkExperience

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private preloaderService: PreloaderService) { }

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
    this.userService.getUserByKey(this.authService.getUserKey()).subscribe(data => {
      console.log(data)
      this.candidate = data
      this.experience = data.experiencia
      this.workExperience = {
        id_candidato: data.id_candidato,
        experiencia: this.experience
      }
      console.log(this.experience)
      this.preloaderService.hidePreloader();
    });
  }
}
