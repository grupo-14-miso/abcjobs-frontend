import { Component, Input, OnInit } from '@angular/core';
import { Interview } from '../../model/interview';

@Component({
  selector: 'app-interview-result',
  templateUrl: './interview-result.component.html',
  styleUrls: ['./interview-result.component.css']
})
export class InterviewResultComponent implements OnInit {

  @Input() interview?: Interview;

  constructor() { }

  ngOnInit() {
  }

}
