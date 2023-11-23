import { Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';
import { Candidate, Education } from 'src/app/pages/search-engine/model/candidate';
import { UserService } from '../../services/user.service';
import { AuthService } from 'src/app/core/template/services/auth.service';
import { Academic } from '../../model/academic';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';

@Component({
  selector: 'app-academic-list',
  templateUrl: './academic-list.component.html',
  styleUrls: ['./academic-list.component.css']
})
export class AcademicListComponent implements OnInit {

  studies: Education[] = [];
  candidate!: Candidate
  academic!: Academic

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
      this.studies = data.educacion
      this.academic = {
        id_candidato: data.id_candidato,
        educacion: this.studies
      }
      console.log(this.academic)
      this.preloaderService.hidePreloader();
    });
  }

}
