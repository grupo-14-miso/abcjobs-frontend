import { Component, OnInit } from '@angular/core';
import { Interview } from '../../model/interview';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { InterviewService } from '../../services/interview.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css']
})
export class InterviewListComponent implements OnInit {

  interviews: Interview[] = [];

  constructor(
    private preloaderService: PreloaderService,
    private interviewService: InterviewService,
    ) { }

  ngOnInit() {
    this.getAssignments()
  }

  getAssignments() {
    this.preloaderService.showPreloader();
    this.interviewService.getInterviews().subscribe({
      next: (data) => {
        console.log(data)
        this.interviews = data;
        this.preloaderService.hidePreloader();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  createModal(){
    const myElement = document.getElementById('createModal');
    if (myElement) {
      const myModal = new Modal(myElement);
      myModal.show();
    } else {
      console.error('El elemento no se encontró en el DOM.');
    }
  }

}
