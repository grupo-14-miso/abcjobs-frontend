import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Profile } from '../../model/profile';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  profiles: Array<Profile> = []
  roles: Array<string> = [];
  languages: Array<string> = []
  skills: Array<string> = []
  idioms: Array<string> = []

  searchForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService

  ) { }

  search() {

  }

  ngOnInit() {
    this.formBuilderGroup();
    this.getListProfiles();
  }
  formBuilderGroup(){
    this.searchForm = this.formBuilder.group({
      rol: ["", []],
      lenguage: ["", []],
      skill: ["", []],
      idiom: ["", []],
    });
  }

  getListProfiles() {
    this.userService.getProfiles()
    .subscribe(
      (data) => {
        this.profiles = data;
        this.filterTypes();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  filterTypes() {
    this.roles = this.profiles
      .filter((profile) => profile.type === "Rol")
      .map((profile) => profile.names)
      .reduce((acc, names) => acc.concat(names), []);

    this.languages = this.profiles
      .filter((profile) => profile.type === "programming_languages")
      .map((profile) => profile.names)
      .reduce((acc, names) => acc.concat(names), []);

    this.skills = this.profiles
      .filter((profile) => profile.type === "soft_skill")
      .map((profile) => profile.names)
      .reduce((acc, names) => acc.concat(names), []);

    this.idioms = this.profiles
      .filter((profile) => profile.type === "idiom")
      .map((profile) => profile.names)
      .reduce((acc, names) => acc.concat(names), []);
  }

}
