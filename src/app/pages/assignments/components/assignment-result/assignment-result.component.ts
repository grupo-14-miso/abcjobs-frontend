import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from '../../model/assignment';

@Component({
  selector: 'app-assignment-result',
  templateUrl: './assignment-result.component.html',
  styleUrls: ['./assignment-result.component.css']
})
export class AssignmentResultComponent implements OnInit {

  @Input() assignment?: Assignment;

  constructor() { }

  ngOnInit() {
  }

}
