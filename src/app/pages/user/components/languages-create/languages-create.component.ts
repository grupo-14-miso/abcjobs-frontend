import { Component, Input, OnInit } from '@angular/core';
import { Idiomas } from '../../model/idioms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { UserService } from '../../services/user.service';
import { LanguageService } from 'src/app/core/template/services/language.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-languages-create',
  templateUrl: './languages-create.component.html',
  styleUrls: ['./languages-create.component.css']
})
export class LanguagesCreateComponent implements OnInit {

  @Input() idioms?: Idiomas;

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
      idioma: ['', Validators.required],
      nivelConversacion: ['', Validators.required],
      nivelLectura: ['', Validators.required],
      nivelEscritura: ['', Validators.required],
      nativo: ['', Validators.required],
      fechaCertificacion: ['', Validators.required],
    });
  }

  create() {
    this.preloaderService.showPreloader();
    if (this.createForm.valid) {
      const idiomaControl = this.createForm.get('idioma');
      const nivelConversacionControl = this.createForm.get('nivelConversacion');
      const nivelLecturaControl = this.createForm.get('nivelLectura');
      const nivelEscrituraControl = this.createForm.get('nivelEscritura');
      const nativoControl = this.createForm.get('nativo');
      const fechaCertificacionControl = this.createForm.get('fechaCertificacion');

    if (idiomaControl && nivelConversacionControl && nivelLecturaControl && nivelEscrituraControl && nativoControl && fechaCertificacionControl) {

      let language = {
        idioma: idiomaControl.value,
        nivel_conversacion: nivelConversacionControl.value,
        nivel_lectura: nivelLecturaControl.value,
        nivel_escritura: nivelEscrituraControl.value,
        nativo: nativoControl.value,
        fecha_certificacion: fechaCertificacionControl.value,
      }

      this.idioms?.idiomas.push(language)

      this.userService.updateLanguage(this.idioms as Idiomas).subscribe({
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
