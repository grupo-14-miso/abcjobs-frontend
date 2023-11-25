import { Component, Input, OnInit } from '@angular/core';
import { Interview } from '../../model/interview';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { InterviewService } from '../../services/interview.service';
import { LanguageService } from 'src/app/core/template/services/language.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-interview-result-create',
  templateUrl: './interview-result-create.component.html',
  styleUrls: ['./interview-result-create.component.css']
})
export class InterviewResultCreateComponent implements OnInit {

  @Input() interview?: Interview;
  createForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private preloaderService: PreloaderService,
    private interviewService: InterviewService,
    private languageService: LanguageService,
  ) { }

  ngOnInit() {
    this.formBuilderGroup();
  }

  formBuilderGroup() {
    this.createForm = this.formBuilder.group({
      result: ['', Validators.required],
    });
  }

  create() {
    this.preloaderService.showPreloader();
    if (this.createForm.valid) {
      const resultControl = this.createForm.get('result');

    if (resultControl) {

      let result = {
        result: resultControl.value,
      }

      this.interviewService.saveResult(result, this.interview?.id ?? 0).subscribe({
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
