import { Component, Input, OnInit } from '@angular/core';
import { WorkExperience } from '../../model/work-experience';

@Component({
  selector: 'app-experience-create',
  templateUrl: './experience-create.component.html',
  styleUrls: ['./experience-create.component.css']
})
export class ExperienceCreateComponent implements OnInit {

  @Input() experience?: WorkExperience;

  constructor() { }

  ngOnInit() {
  }

}
