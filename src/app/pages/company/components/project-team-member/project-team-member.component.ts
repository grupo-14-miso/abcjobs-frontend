import { Component, Input, OnInit } from '@angular/core';
import { MemberTeam } from '../../model/member-team';
import { Offer } from '../../model/offer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { CompanyService } from '../../service/company.service';
import { LanguageService } from 'src/app/core/template/services/language.service';
import { CandidateReady } from 'src/app/pages/user/model/candidate-ready';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/pages/user/services/user.service';

@Component({
  selector: 'app-project-team-member',
  templateUrl: './project-team-member.component.html',
  styleUrls: ['./project-team-member.component.css']
})
export class ProjectTeamMemberComponent implements OnInit {

  private _offer?: Offer;

  @Input() set offer(value: Offer | undefined) {
    this._offer = value;
    if (this._offer) {
      this.loadData();
    }
  }

  get offer(): Offer | undefined {
    return this._offer;
  }

  createForm!: FormGroup;
  candidate!: CandidateReady
  candidates: CandidateReady[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private preloaderService: PreloaderService,
    private companyService: CompanyService,
    private languageService: LanguageService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.formBuilderGroup();
    this.loadData()
  }

  formBuilderGroup() {
    this.createForm = this.formBuilder.group({
      candidateId: ['', Validators.required],
      tipo: ['', Validators.required],
      rol: ['', Validators.required]
    });
  }

  loadData() {
    this.preloaderService.showPreloader();
    this.userService.getUserForTeam(this.offer?.offer_id ?? 0).subscribe(data => {
      console.log(data)
      this.candidates = data
      this.preloaderService.hidePreloader();
    });
  }

  create() {
    this.preloaderService.showPreloader();
    if (this.createForm.valid) {
      const candidateIdControl = this.createForm.get('candidateId');
      const tipoControl = this.createForm.get('tipo');
      const rolControl = this.createForm.get('rol');

    if (candidateIdControl && tipoControl && rolControl && rolControl) {
      let memberTeam= {
        offer_id: this.offer?.offer_id.toString() ?? "",
        candidate_id: candidateIdControl.value,
        tipo: tipoControl.value,
        rol: rolControl.value,
        nombre: this.candidate.name,
      }

      this.companyService.saveMemberTeam(memberTeam).subscribe({
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
change(event: Event) {
  const selectElement = event.target as HTMLSelectElement; // Casting aquí
  const value = selectElement.value;
  const selectedCandidate = this.candidates.find(candidate => candidate.id_candidato === value);

  if (selectedCandidate) {
    this.candidate = selectedCandidate
  }
}
}
