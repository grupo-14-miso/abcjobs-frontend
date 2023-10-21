import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from '../../model/assignment';

@Component({
  selector: 'app-assignment-test',
  templateUrl: './assignment-test.component.html',
  styleUrls: ['./assignment-test.component.css']
})
export class AssignmentTestComponent implements OnInit {

  @Input() assignment?: Assignment;

  constructor() { }

  ngOnInit() {
  }

}
