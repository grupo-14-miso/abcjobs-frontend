import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { Company } from 'src/app/pages/company/model/company';
import { Offer } from 'src/app/pages/company/model/offer';
import { CompanyService } from 'src/app/pages/company/service/company.service';
import { InterviewService } from '../../services/interview.service';
import { LanguageService } from 'src/app/core/template/services/language.service';
import { Candidate } from 'src/app/pages/search-engine/model/candidate';
import { SelectCandidate } from '../../model/select-candidate';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-interview-create',
  templateUrl: './interview-create.component.html',
  styleUrls: ['./interview-create.component.css']
})
export class InterviewCreateComponent implements OnInit {

  createForm!: FormGroup;
  companies: Company[] = [];
  offers: Offer[] = [];
  candidates: SelectCandidate[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private preloaderService: PreloaderService,
    private companyService: CompanyService,
    private interviewService: InterviewService,
    private languageService: LanguageService,
  ) { }

  ngOnInit() {
    this.formBuilderGroup();
    this.getCompanies();
  }

  formBuilderGroup() {
    this.createForm = this.formBuilder.group({
      id_company: ['', Validators.required],
      id_offer: ['', Validators.required],
      candidates: ['', Validators.required],
      date: ['', Validators.required],
      link: ['', Validators.required],
      description: [''],
    });

    this.createForm.get('id_company')?.valueChanges.subscribe((selectedCompanyId) => {
      this.loadOffersByCompany(selectedCompanyId);
    });

    this.createForm.get('id_offer')?.valueChanges.subscribe((selectedOfferId) => {
      this.loadCandidateByOffer(selectedOfferId);
    });
  }


  getCompanies() {
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
    if (companyId) {
      this.companyService.getOffers(companyId).subscribe((offers) => {
        this.offers = offers;
      });
    } else {
      this.offers = [];
    }
  }
  loadCandidateByOffer(offerId: number) {
    if (offerId) {
      this.interviewService.getCandidatesByOffer(offerId).subscribe((candidates) => {
        this.candidates = candidates;
      });
    } else {
      this.offers = [];
    }
  }

  create() {
    if (this.createForm.valid) {
      const idCompanyControl = this.createForm.get('id_company');
      const idOfferControl = this.createForm.get('id_offer');
      const candidatesControl = this.createForm.get('candidates');
      const dateControl = this.createForm.get('date');
      const linkControl = this.createForm.get('link');
      const descriptionControl = this.createForm.get('description');

    if (idCompanyControl && idOfferControl && candidatesControl && dateControl && linkControl && descriptionControl) {
      const interviewData = {
        id_company: idCompanyControl.value,
        id_offer: idOfferControl.value,
        candidates: candidatesControl.value,
        date: dateControl.value,
        link: linkControl.value,
        description: descriptionControl.value
      };

      this.interviewService.createInterview(interviewData).subscribe({
        next: (response) => {
          console.log(response)
          this.preloaderService.hidePreloader();
          var title = 'Entrevista creada con exito';
          if(this.languageService.currentLanguage == "en"){
            title = 'Interview created successfully'
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
          console.error('Error al crear la entrevista', error);
        }
      });
    }
  }

  }


}
