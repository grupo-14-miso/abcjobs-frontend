import { Component, OnInit } from '@angular/core';
import { Candidate, Language } from 'src/app/pages/search-engine/model/candidate';
import { Idiomas } from '../../model/idioms';
import { UserService } from '../../services/user.service';
import { AuthService } from 'src/app/core/template/services/auth.service';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.css']
})
export class LanguagesListComponent implements OnInit {

  language: Language[] = [];
  candidate!: Candidate
  idiomas!: Idiomas

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
      this.language = data.idiomas
      this.idiomas = {
        id_candidato: data.id_candidato,
        idiomas: this.language
      }
      console.log(this.language)
      this.preloaderService.hidePreloader();
    });
  }

}
