import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from 'src/app/core/template/services/auth.service';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { Candidate } from 'src/app/pages/search-engine/model/candidate';
import { LanguageService } from 'src/app/core/template/services/language.service';
import Swal from 'sweetalert2';
import { Profile } from 'src/app/pages/search-engine/model/profile';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  personalForm!: FormGroup;
  candidate!: Candidate

  profiles: Profile[] = [];
  roles: string[] = [];
  languages: string[] = [];
  tools: string[] = [];
  skills: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private preloaderService: PreloaderService,
    private languageService: LanguageService
    ) { }

  ngOnInit() {
    this.formBuilderGroup()
    this.loadData()
    this.getProfiles();
  }

  formBuilderGroup() {
    this.personalForm = this.formBuilder.group({
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      telefono: ['', Validators.required],
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      firstLastName: ['', Validators.required],
      secondLastName: ['', Validators.required],
      paisNacimiento: ['', Validators.required],
      municipioNacimiento: ['', Validators.required],
      paisResidencia: ['', Validators.required],
      municipioResidencia: ['', Validators.required],
      rol: [''],
      lenguage: [''],
      skill: [''],
      tools: [''],
    });
  }

  loadData() {
    this.preloaderService.showPreloader()
    this.userService.getUserByKey(this.authService.getUserKey()).subscribe(data => {
      this.preloaderService.hidePreloader()
      this.candidate = data
      this.personalForm.patchValue({
        firstName: data.Nombre,
        secondName: data.segundo_nombre,
        firstLastName: data.apellido,
        secondLastName: data.segundo_apellido,
        documentType: data.tipo_documento,
        documentNumber: data.documento,
        gender: data.genero,
        nacionalidad: data.nacionalidad,
        estadoCivil: data.estado_civil,
        telefono: data.telefono,
        paisNacimiento: data.pais_nacimiento,
        municipioNacimiento: data.ciudad_nacimiento,
        paisResidencia: data.pais_residencia,
        municipioResidencia: data.ciudad_residencia,
        email: data.email,
        rol: data.rol,
        lenguage: data.lenguajes_programacion,
        tools: data.tecnologias_herramientas,
        skill: data.soft_skill
      });
    });
  }

  update() {
    this.preloaderService.showPreloader()
    const documentTypeControl = this.personalForm.get('documentType');
    const documentNumberControl = this.personalForm.get('documentNumber');
    const firstNameControl = this.personalForm.get('firstName');
    const secondNameControl = this.personalForm.get('secondName');
    const firstLastNameControl = this.personalForm.get('firstLastName');
    const secondLastNameControl = this.personalForm.get('secondLastName');
    const genderControl = this.personalForm.get('gender');
    const nacionalidadControl = this.personalForm.get('nacionalidad');
    const estadoCivilControl = this.personalForm.get('estadoCivil');
    const telefonoControl = this.personalForm.get('telefono');
    const paisNacimientoControl = this.personalForm.get('paisNacimiento');
    const municipioNacimientoControl = this.personalForm.get('municipioNacimiento');
    const paisResidenciaControl = this.personalForm.get('paisResidencia');
    const municipioResidenciaControl = this.personalForm.get('municipioResidencia');
    const emailControl = this.personalForm.get('email');
    const rolControl = this.personalForm.get('rol');
    const lenguajeControl = this.personalForm.get('lenguage');
    const toolsControl = this.personalForm.get('tools');
    const skillControl = this.personalForm.get('skill');
    if (rolControl) {
      this.candidate.rol = rolControl.value;
    }
    if (lenguajeControl) {
      this.candidate.lenguajes_programacion = lenguajeControl.value;
    }
    if (toolsControl) {
      this.candidate.tecnologias_herramientas = toolsControl.value;
    }
    if (skillControl) {
      this.candidate.soft_skill = skillControl.value;
    }
    if (documentTypeControl) {
      this.candidate.tipo_documento = documentTypeControl.value;
    }
    if (documentNumberControl) {
      this.candidate.documento = documentNumberControl.value;
    }
    if (firstNameControl) {
      this.candidate.Nombre = firstNameControl.value;
    }
    if (secondNameControl) {
      this.candidate.segundo_nombre = secondNameControl.value;
    }
    if (firstLastNameControl) {
      this.candidate.apellido = firstLastNameControl.value;
    }
    if (secondLastNameControl) {
      this.candidate.segundo_apellido = secondLastNameControl.value;
    }
    if (genderControl) {
      this.candidate.genero = genderControl.value;
    }
    if (nacionalidadControl) {
      this.candidate.nacionalidad = nacionalidadControl.value;
    }
    if (estadoCivilControl) {
      this.candidate.estado_civil = estadoCivilControl.value;
    }
    if (telefonoControl) {
      this.candidate.telefono = telefonoControl.value;
    }
    if (paisNacimientoControl) {
      this.candidate.pais_nacimiento = paisNacimientoControl.value;
    }
    if (municipioNacimientoControl) {
      this.candidate.ciudad_nacimiento = municipioNacimientoControl.value;
    }
    if (paisResidenciaControl) {
      this.candidate.pais_residencia = paisResidenciaControl.value;
    }
    if (municipioResidenciaControl) {
      this.candidate.ciudad_residencia = municipioResidenciaControl.value;
    }
    if (emailControl) {
      this.candidate.email = emailControl.value;
    }
    this.userService.updateUserPersonal(this.candidate).subscribe({
      next: (response) => {
        console.log(response)
        this.preloaderService.hidePreloader()
        this.preloaderService.hidePreloader();
        let title = 'Datos personales actualizados con exito';
        if(this.languageService.currentLanguage == "en"){
          title = 'Personal data successfully updated'
        }
        Swal.fire({
          title: title,
          icon: 'success',
          confirmButtonColor: '#3085d6',
        }).then((result) => {
          this.loadData()
        })

      },
      error: (error) => {
        console.error('Error servicio', error);
      }
    });
  }

  back(){
    this.router.navigate(['users']);
  }

  getProfiles() {
    this.preloaderService.showPreloader();
    this.userService.getProfiles().subscribe({
      next: (data) => {
        this.profiles = data;
        this.filterProfilesByType();
        this.preloaderService.hidePreloader();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  filterProfilesByType() {
    this.roles = this.getNamesByType('Rol');
    this.languages = this.getNamesByType('programming_languages');
    this.skills = this.getNamesByType('soft_skill');
    this.tools = this.getNamesByType('tools');
  }

  getNamesByType(type: string): string[] {
    return this.profiles
      .filter((profile) => profile.type === type)
      .map((profile) => profile.names)
      .reduce((acc, names) => acc.concat(names), []);
  }


}
