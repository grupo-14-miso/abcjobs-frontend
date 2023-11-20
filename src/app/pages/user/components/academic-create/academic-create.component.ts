import { Component, Input, OnInit } from '@angular/core';
import { Academic } from '../../model/academic';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { UserService } from '../../services/user.service';
import { LanguageService } from 'src/app/core/template/services/language.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-academic-create',
  templateUrl: './academic-create.component.html',
  styleUrls: ['./academic-create.component.css']
})
export class AcademicCreateComponent implements OnInit {

  @Input() academic?: Academic;
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
      pais: ['', Validators.required],
      nivel: ['', Validators.required],
      institucion: ['', Validators.required],
      titulo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
    });
  }

  create() {
    this.preloaderService.showPreloader();
    if (this.createForm.valid) {
      const paisControl = this.createForm.get('pais');
      const nivelControl = this.createForm.get('nivel');
      const institucionControl = this.createForm.get('institucion');
      const tituloControl = this.createForm.get('titulo');
      const fechaInicioControl = this.createForm.get('fechaInicio');
      const fechaFinControl = this.createForm.get('fechaFin');

    if (paisControl && nivelControl && institucionControl && tituloControl && fechaInicioControl && fechaFinControl) {

      let education = {
        fecha_fin: fechaFinControl.value,
        fecha_inicio: fechaInicioControl.value,
        institucion: institucionControl.value,
        nivel_academico: nivelControl.value,
        titulo_obtenido: tituloControl.value,
        pais: paisControl.value
      }

      this.academic?.educacion.push(education)

      this.userService.updateAcademic(this.academic as Academic).subscribe({
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
