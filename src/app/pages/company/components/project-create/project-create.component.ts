import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { CompanyService } from '../../service/company.service';
import { LanguageService } from 'src/app/core/template/services/language.service';
import { AuthService } from 'src/app/core/template/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  createForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private preloaderService: PreloaderService,
    private companyService: CompanyService,
    private languageService: LanguageService,
    private authService: AuthService,

  ) { }

  ngOnInit() {
    this.formBuilderGroup();

  }

  formBuilderGroup() {
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  create() {
    this.preloaderService.showPreloader();
    if (this.createForm.valid) {
      const nameControl = this.createForm.get('name');
      const descriptionControl = this.createForm.get('description');
      const startDateControl = this.createForm.get('startDate');
      const endDateControl = this.createForm.get('endDate');

    if (nameControl && descriptionControl && startDateControl && endDateControl) {

      let project = {
        company_id: this.authService.getUserKey().toString(),
        name: nameControl.value,
        description: descriptionControl.value,
        start_date: startDateControl.value,
        end_date: endDateControl.value,
      }

      this.companyService.saveOffer(project).subscribe({
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
