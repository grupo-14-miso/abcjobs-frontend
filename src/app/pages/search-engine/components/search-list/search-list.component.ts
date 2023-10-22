import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from '../../model/candidate';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  @Input() candidates?: Candidate[];
  candidateSelect?: Candidate
  constructor() { }

  ngOnInit() {
  }

  openModal(candidate: Candidate){
    this.candidateSelect = candidate
    const myElement = document.getElementById('detailModal');
    if (myElement) {
      const myModal = new Modal(myElement);
      myModal.show();
    } else {
      console.error('El elemento no se encontró en el DOM.');
    }
  }

}
