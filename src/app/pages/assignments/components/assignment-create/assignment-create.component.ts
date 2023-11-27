import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/core/template/services/language.service';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { Company } from 'src/app/pages/company/model/company';
import { Offer } from 'src/app/pages/company/model/offer';
import { CompanyService } from 'src/app/pages/company/service/company.service';
import { SelectCandidate } from 'src/app/pages/interview/model/select-candidate';
import { InterviewService } from 'src/app/pages/interview/services/interview.service';
import { Assignment } from '../../model/assignment';
import { AssignmentService } from '../../services/assignment.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/core/template/services/auth.service';

@Component({
  selector: 'app-assignment-create',
  templateUrl: './assignment-create.component.html',
  styleUrls: ['./assignment-create.component.css']
})
export class AssignmentCreateComponent implements OnInit {

  createForm!: FormGroup;
  companies: Company[] = [];
  offers: Offer[] = [];
  candidates: SelectCandidate[] = [];
  assignments: Assignment[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private preloaderService: PreloaderService,
    private languageService: LanguageService,
    private companyService: CompanyService,
    private interviewService: InterviewService,
    private assignmentService: AssignmentService,
    public authService: AuthService,
  ) { }

  ngOnInit() {
    this.formBuilderGroup()
    this.loadData()
    if(this.authService.isCompany())
    {
      this.loadConfigCompany()
    }
  }

  formBuilderGroup() {
    this.createForm = this.formBuilder.group({
      id_company: ['', Validators.required],
      id_offer: ['', Validators.required],
      candidate: ['', Validators.required],
      assignmentType: ['', Validators.required],
      assignment: ['', Validators.required],

    });
  }

  loadData() {
    this.createForm.get('id_company')?.valueChanges.subscribe((selectedCompanyId) => {
      this.loadOffersByCompany(selectedCompanyId);
    });

    this.createForm.get('id_offer')?.valueChanges.subscribe((selectedOfferId) => {
      this.loadCandidateByOffer(selectedOfferId);
    });

    this.createForm.get('assignmentType')?.valueChanges.subscribe((selectedType) => {
      this.loadAssignmentByType(selectedType);
    });

    this.preloaderService.showPreloader();
    this.companyService.getCompanies().subscribe({
      next: (data) => {
        this.companies = data;
        this.preloaderService.hidePreloader();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  loadOffersByCompany(companyId: number) {
    this.preloaderService.showPreloader();
    if (companyId) {
      this.companyService.getOffers(companyId).subscribe((offers) => {
        this.offers = offers;
        this.preloaderService.hidePreloader();
      });
    } else {
      this.offers = [];
    }
  }
  loadCandidateByOffer(offerId: number) {
    this.preloaderService.showPreloader();
    if (offerId) {
      this.interviewService.getCandidatesByOffer(offerId).subscribe((candidates) => {
        this.candidates = candidates;
        this.preloaderService.hidePreloader();
      });
    } else {
      this.candidates = [];
    }
  }

  loadAssignmentByType(type: string) {
    this.preloaderService.showPreloader();
    if (type) {
      this.assignmentService.getAssignmentsType(type).subscribe((assignments) => {
        this.assignments = assignments;
        this.preloaderService.hidePreloader();
      });
    } else {
      this.assignments = [];
    }
  }

  loadConfigCompany() {
    this.createForm.controls['id_company'].setValue(this.authService.getUserKey())
    this.createForm.controls['id_company'].disable()
    this.createForm.controls['assignmentType'].setValue('Performance')
    this.createForm.controls['assignmentType'].disable()
  }

  create() {
    this.preloaderService.showPreloader();
    if (this.createForm.valid) {
      const candidateControl = this.createForm.get('candidate');
      const assignmentControl = this.createForm.get('assignment');

    if (candidateControl && assignmentControl) {


      this.assignmentService.saveAssignmentUser(assignmentControl.value, candidateControl.value).subscribe({
        next: (response) => {
          console.log(response)
          this.preloaderService.hidePreloader();
          let title = 'Registro creado con exito';
          if(this.languageService.currentLanguage == "en"){
            title = 'Record created successfully'
          }
          Swal.fire({
            title: title,
            icon: 'success',
            confirmButtonColor: '#3085d6',
          }).then((result) => {
            location.reload();
          })

        },
        error: (error) => {
          console.error('Error al crear el registro', error);
        }
      });
    }
  }
}

}
