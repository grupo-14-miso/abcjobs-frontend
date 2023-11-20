import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  personal(){
    this.router.navigate(['users/personal']);
  }

  studies(){
    this.router.navigate(['users/academic']);
  }

  experience(){
    this.router.navigate(['users/']);
  }

  idioms(){
    this.router.navigate(['users/languages']);
  }

}
