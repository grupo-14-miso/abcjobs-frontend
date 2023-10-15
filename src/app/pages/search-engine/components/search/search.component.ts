import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Profile } from '../../model/profile';
import { PreloaderService } from '../../../../core/template/services/preloader.service';
import { Candidate } from '../../model/candidate';
import { SearchParams } from '../../model/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  profiles: Profile[] = [];
  candidates?: Candidate[];

  roles: string[] = [];
  languages: string[] = [];
  skills: string[] = [];
  idioms: string[] = [];

  searchForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private preloaderService: PreloaderService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.formBuilderGroup();
    this.getListProfiles();
  }

  formBuilderGroup() {
    this.searchForm = this.formBuilder.group({
      rol: [''],
      lenguage: [''],
      skill: [''],
      idiom: [''],
    });
  }

  getListProfiles() {
    this.preloaderService.showPreloader();
    this.userService.getProfiles().subscribe({
      next: (data) => {
        this.profiles = data;
        this.filterTypes();
        this.preloaderService.hidePreloader();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  filterTypes() {
    this.roles = this.getNamesByType('Rol');
    this.languages = this.getNamesByType('programming_languages');
    this.skills = this.getNamesByType('soft_skill');
    this.idioms = this.getNamesByType('idiom');
  }

  private getNamesByType(type: string): string[] {
    return this.profiles
      .filter((profile) => profile.type === type)
      .map((profile) => profile.names)
      .reduce((acc, names) => acc.concat(names), []);
  }

  search() {
    this.preloaderService.showPreloader();

    const searchParams = new SearchParams();
    searchParams.softSkills = ['lider', 'puntual', 'mejor'];
    searchParams.idiomas = ['ingles', 'spanish'];
    searchParams.tecnologiasHerramientas = ['slack'];
    searchParams.rol = ['Devops'];
    searchParams.lenguajes_programacion = ['java'];

    this.userService.search(searchParams).subscribe({
      next: (data) => {
        this.candidates = data;
        console.log(this.candidates)
        this.preloaderService.hidePreloader();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
