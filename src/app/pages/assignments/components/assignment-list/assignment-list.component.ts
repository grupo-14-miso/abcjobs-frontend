import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../model/assignment';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { AssignmentService } from '../../services/assignment.service';

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

  ngOnInit() {
    this.getAssignments()
  }

  start(assignment: Assignment, indice: number) {
    if (assignment != null) {
      console.log(assignment)
    }
  }

  getAssignments() {
    this.preloaderService.showPreloader();
    this.assignmentService.getAssignments().subscribe({
      next: (data) => {
        this.assignments = data;
        this.preloaderService.hidePreloader();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
