import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../model/assignment';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { AssignmentService } from '../../services/assignment.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {

  constructor(
    private preloaderService: PreloaderService,
    private assignmentService: AssignmentService
  ) { }

  assignments: Assignment[] = [];
  assignment?: Assignment;

  ngOnInit() {
    this.getAssignments()
  }

  start(assignment: Assignment, indice: number) {
    this.preloaderService.showPreloader();
    if (assignment != null) {
      console.log(assignment)
      this.assignment = assignment

      setTimeout(() => {
        this.preloaderService.hidePreloader();
        const myElement = document.getElementById('testModal');
        if (myElement) {
          const myModal = new Modal(myElement);
          myModal.show();
        } else {
          console.error('El elemento no se encontró en el DOM.');
        }
      }, 1000);
    }
  }

  getAssignments() {
    this.preloaderService.showPreloader();
    this.assignmentService.getAssignments().subscribe({
      next: (data) => {
        console.log(data)
        this.assignments = data;
        this.preloaderService.hidePreloader();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
