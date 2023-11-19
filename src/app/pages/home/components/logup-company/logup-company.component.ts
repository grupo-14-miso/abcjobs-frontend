import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicService } from '../../services/public.service';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { LanguageService } from 'src/app/core/template/services/language.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logup-company',
  templateUrl: './logup-company.component.html',
  styleUrls: ['./logup-company.component.css']
})
export class LogupCompanyComponent implements OnInit {

  createForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private publicService: PublicService,
    private preloaderService: PreloaderService,
    private languageService: LanguageService,
    ) { }

  ngOnInit() {
    this.formBuilderGroup()
  }

  formBuilderGroup() {
    this.createForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      nit: ['', Validators.required],
      phone: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  create(){
      this.preloaderService.showPreloader();
      if (this.createForm.valid) {
        const emailControl = this.createForm.get('email');
        const passwordControl = this.createForm.get('password');
        const nameControl = this.createForm.get('name');
        const nitControl = this.createForm.get('nit');
        const phoneControl = this.createForm.get('phone');
        const locationControl = this.createForm.get('location');

      if (emailControl && passwordControl && nameControl && nitControl && phoneControl && locationControl) {
        const userData = {
          email: emailControl.value,
          password: passwordControl.value,
          role: "Company",
          Nombre: "",
          apellido: "",
          document_type: "NIT",
          document_number: nitControl.value,
          name: nameControl.value,
          phone_number: phoneControl.value,
          country: locationControl.value,
        };

        this.publicService.register(userData).subscribe({
          next: (response) => {
            console.log(response)
            this.preloaderService.hidePreloader();
            var title = 'Usuario creado con exito';
            var text = 'A continuación puede iniciar sesión'
            if(this.languageService.currentLanguage == "en"){
              title = 'User created successfully'
              text = 'Below you can log in'
            }
            Swal.fire({
              title: title,
              text:  text,
              icon: 'success',
              confirmButtonColor: '#3085d6',
            }).then((result) => {
              this.router.navigate(['/login', "Company"]);
            })
          },
          error: (error) => {
            this.preloaderService.hidePreloader();
            console.error('Error register', error);
            let title = 'Error en el registro';
            let text = 'Usuario ya registrado'
            if(this.languageService.currentLanguage == "en"){
              title = 'Registration error'
              text = 'Already registered user'
            }
            Swal.fire({
              title: title,
              text:  text,
              icon: 'error',
              confirmButtonColor: '#3085d6',
            }).then((result) => {

            })
          }
        });
      }
    }
  }

  login(){
    this.router.navigate(['/login', "Company"]);
  }

}
