import { Component, OnInit } from '@angular/core';
import { Interview } from '../../model/interview';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { InterviewService } from '../../services/interview.service';
import { Modal } from 'bootstrap';
import { AuthService } from 'src/app/core/template/services/auth.service';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css']
})
export class InterviewListComponent implements OnInit {

  interviews: Interview[] = [];
  interview?: Interview;

  constructor(
    private preloaderService: PreloaderService,
    private interviewService: InterviewService,
    public authService: AuthService
    ) { }

  ngOnInit() {
    if(this.authService.isCandidate())
    {
      this.getInterviewsByCandidate(this.authService.getUserKey())
    }
    if(this.authService.isCompany())
    {
      this.getInterviewsByCompany(this.authService.getUserKey())
    }
    if(this.authService.isAdmin())
    {
      this.getInterviews()
    }
  }

  getInterviews() {
    this.preloaderService.showPreloader();
    this.interviewService.getInterviews().subscribe({
      next: (data) => {
        console.log(data)
        this.interviews = data;
        setTimeout(() => {
          this.preloaderService.hidePreloader();
        }, 6000);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  getInterviewsByCompany(company_id: number) {
    this.preloaderService.showPreloader();
    this.interviewService.getInterviewsByCompany(company_id).subscribe({
      next: (data) => {
        console.log(data)
        this.interviews = data;
        setTimeout(() => {
          this.preloaderService.hidePreloader();
        }, 6000);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  getInterviewsByCandidate(candidate_id: number) {
    this.preloaderService.showPreloader();
    this.interviewService.getInterviewsByCandidate(candidate_id).subscribe({
      next: (data) => {
        console.log(data)
        this.interviews = data;
        setTimeout(() => {
          this.preloaderService.hidePreloader();
        }, 6000);
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

  start(interview: Interview) {
    this.preloaderService.showPreloader();
    if (interview != null) {
      this.interview = interview
      console.log(interview)

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


  result(interview: Interview) {
    this.preloaderService.showPreloader();
    if (interview != null) {
      this.interview = interview
      console.log(interview)

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

}
