import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Candidate } from '../../model/candidate';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from '../../../company/model/company';
import { Offer } from '../../../company/model/offer';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { CompanyService } from 'src/app/pages/company/service/company.service';
import { InterviewService } from 'src/app/pages/interview/services/interview.service';
import { InterviewPreCandidate } from 'src/app/pages/interview/model/interview-pre-candidate';
import { LanguageService } from 'src/app/core/template/services/language.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/core/template/services/auth.service';

@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.css']
})
export class SearchSelectComponent implements OnInit {

  @Input() candidate?: Candidate;

  selectForm!: FormGroup;
  companies: Company[] = [];
  offers: Offer[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private preloaderService: PreloaderService,
    private companyService: CompanyService,
    private interviewService: InterviewService,
    private languageService: LanguageService,
    private authService: AuthService

  ) { }

  ngOnInit() {
    this.formBuilderGroup();
    this.getCompanies();
    this.loadConfigCompany();
  }


  loadConfigCompany() {
    this.selectForm.controls['company'].setValue(this.authService.getUserKey())
    this.selectForm.controls['company'].disable()
  }

  formBuilderGroup() {
    this.selectForm = this.formBuilder.group({
      company: [''],
      offer: ['', Validators.required],
      candidate: [''],
    });

    this.selectForm.get('company')?.valueChanges.subscribe((selectedCompanyId) => {
      this.loadOffersByCompany(selectedCompanyId);
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

  select() {
    var id_candidato = "";

    if(this.candidate){
      id_candidato = this.candidate?.key.id.toString();

    }
    const interviewPreCandidate = new InterviewPreCandidate(
      this.selectForm.get('company')?.value,
      this.selectForm.get('offer')?.value,
      id_candidato
    )

    this.interviewService.savePreCandidate(interviewPreCandidate).subscribe({
      next: (data) => {
        console.log(data)
        this.preloaderService.hidePreloader();
        var title = 'Candidato pre-seleccionado con exito';
        if(this.languageService.currentLanguage == "en"){
          title = 'Successfully assigned candidate'
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
        console.error(error);
      }
    });


  }

}
