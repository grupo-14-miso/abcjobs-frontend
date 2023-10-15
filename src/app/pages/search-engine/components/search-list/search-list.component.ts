import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from '../../model/candidate';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  @Input() candidates?: Candidate[];

  constructor() { }

  ngOnInit() {
  }

}
