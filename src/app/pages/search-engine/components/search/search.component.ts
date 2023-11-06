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
  searchForm!: FormGroup;

  profiles: Profile[] = [];

  roles: string[] = [];
  languages: string[] = [];
  skills: string[] = [];
  idioms: string[] = [];
  tools: string[] = [];

  candidates?: Candidate[];

  constructor(
    private formBuilder: FormBuilder,
    private preloaderService: PreloaderService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.formBuilderGroup();
    this.getProfiles();
  }

  formBuilderGroup() {
    this.searchForm = this.formBuilder.group({
      rol: [''],
      lenguage: [''],
      skill: [''],
      idiom: [''],
      tools: [''],
    });
  }

  getProfiles() {
    this.preloaderService.showPreloader();
    this.userService.getProfiles().subscribe({
      next: (data) => {
        this.profiles = data;
        this.filterProfilesByType();
        this.preloaderService.hidePreloader();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  filterProfilesByType() {
    this.roles = this.getNamesByType('Rol');
    this.languages = this.getNamesByType('programming_languages');
    this.skills = this.getNamesByType('soft_skill');
    this.idioms = this.getNamesByType('idiom');
    this.tools = this.getNamesByType('tools');
  }

  getNamesByType(type: string): string[] {
    return this.profiles
      .filter((profile) => profile.type === type)
      .map((profile) => profile.names)
      .reduce((acc, names) => acc.concat(names), []);
  }

  search() {
    this.preloaderService.showPreloader();
    console.log(this.searchForm.value)

    const searchParams = new SearchParams();

    const rolControl = this.searchForm.get('rol');
    const lenguageControl = this.searchForm.get('lenguage');
    const skillControl = this.searchForm.get('skill');
    const idiomControl = this.searchForm.get('idiom');
    const toolsControl = this.searchForm.get('tools');

    if (rolControl) {
      searchParams.rol = rolControl.value;
    }
    if (lenguageControl) {
      searchParams.lenguajes_programacion = lenguageControl.value;
    }
    if (skillControl) {
      searchParams.softSkills = skillControl.value;
    }
    if (idiomControl) {
      searchParams.idiomas = idiomControl.value;
    }
    if (toolsControl) {
      searchParams.tools = toolsControl.value;
    }

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
  clear() {
    this.preloaderService.showPreloader();
    this.searchForm.reset();
    this.preloaderService.hidePreloader();
  }
}
