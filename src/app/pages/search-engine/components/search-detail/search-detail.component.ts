import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from '../../model/candidate';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {

  @Input() candidate?: Candidate;
  constructor() { }

  ngOnInit() {
  }

}
