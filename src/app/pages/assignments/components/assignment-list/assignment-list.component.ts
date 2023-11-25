import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Assignment } from '../../model/assignment';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { AssignmentService } from '../../services/assignment.service';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2'
import { TranslatePipe } from 'src/app/core/template/pipes/translate.pipe';
import { LanguageService } from 'src/app/core/template/services/language.service';
import { AuthService } from 'src/app/core/template/services/auth.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {

  assignments: Assignment[] = [];
  assignment?: Assignment;
  type: string = '';
  program: boolean = true;
  isInit: boolean = false;


  constructor(
    private preloaderService: PreloaderService,
    private assignmentService: AssignmentService,
    private languageService: LanguageService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {   }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.type = params.get('type') as string;
      console.log(this.type)

      if(this.type == "Performance"){
        if(this.authService.isCompany())
        {
          this.isInit=true
          this.getAssignmentsCompany(this.authService.getUserKey())
        }
        if(this.authService.isAdmin())
        {
          this.program = false;
          this.getAssignmentsType("Performance")
        }
      }

      if(this.type != "Performance"){
        if(this.authService.isCandidate())
        {
          this.program = false;
          this.isInit=true
          this.getAssignmentsCandidate(this.authService.getUserKey())
        }
        if(this.authService.isAdmin())
        {
          this.getAssignmentsCandidate(0)
        }
      }


    });


  }

  start(assignment: Assignment, indice: number) {
    let title = '¿Esta seguro de iniciar la prueba?';
    let text = 'Una vez iniciada no se puede cancelar'
    if(this.languageService.currentLanguage == "en"){
      title = 'Are you sure to start the test?'
      text = 'Once started it cannot be canceled'
    }

    Swal.fire({
      title: title ,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
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
    })


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

  getAssignmentsType(type: string) {
    this.preloaderService.showPreloader();
    this.assignmentService.getAssignmentsType(type).subscribe({
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

  getAssignmentsCandidate(key: number) {
    this.preloaderService.showPreloader();
    this.assignmentService.getAssignmentsCandidate(key).subscribe({
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

  getAssignmentsCompany(key: number) {
    this.preloaderService.showPreloader();
    this.assignmentService.getAssignmentsCompany(key).subscribe({
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

  result(assignment: Assignment, indice: number) {
    this.preloaderService.showPreloader();
    if (assignment != null) {
      console.log(assignment)
      this.assignment = assignment

      setTimeout(() => {
        this.preloaderService.hidePreloader();
        const myElement = document.getElementById('resultModal');
        if (myElement) {
          const myModal = new Modal(myElement);
          myModal.show();
        } else {
          console.error('El elemento no se encontró en el DOM.');
        }
      }, 1000);
    }
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
