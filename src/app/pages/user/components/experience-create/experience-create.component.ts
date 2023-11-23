import { Component, Input, OnInit } from '@angular/core';
import { WorkExperience } from '../../model/work-experience';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { UserService } from '../../services/user.service';
import { LanguageService } from 'src/app/core/template/services/language.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experience-create',
  templateUrl: './experience-create.component.html',
  styleUrls: ['./experience-create.component.css']
})
export class ExperienceCreateComponent implements OnInit {

  @Input() experience?: WorkExperience;
  createForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private preloaderService: PreloaderService,
    private userService: UserService,
    private languageService: LanguageService,

  ) { }

  ngOnInit() {
    this.formBuilderGroup();

  }

  formBuilderGroup() {
    this.createForm = this.formBuilder.group({
      empresa: ['', Validators.required],
      pais: ['', Validators.required],
      ciudad: ['', Validators.required],
      cargo: ['', Validators.required],
      rol: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
    });
  }

  create() {
    this.preloaderService.showPreloader();
    if (this.createForm.valid) {
      const empresaControl = this.createForm.get('empresa');
      const paisControl = this.createForm.get('pais');
      const ciudadControl = this.createForm.get('ciudad');
      const cargoControl = this.createForm.get('cargo');
      const rolControl = this.createForm.get('rol');
      const fechaInicioControl = this.createForm.get('fechaInicio');
      const fechaFinControl = this.createForm.get('fechaFin');

    if (paisControl && empresaControl && ciudadControl && rolControl && fechaInicioControl && fechaFinControl && cargoControl) {

      let experiencia = {
        empresa: empresaControl.value,
        pais: paisControl.value,
        ciudad: ciudadControl.value,
        cargo: cargoControl.value,
        rol: rolControl.value,
        fecha_fin: fechaFinControl.value,
        fecha_inicio: fechaInicioControl.value,
      }

      this.experience?.experiencia.push(experiencia)

      this.userService.updateExperience(this.experience as WorkExperience).subscribe({
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
