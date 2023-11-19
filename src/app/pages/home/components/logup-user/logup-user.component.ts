import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/core/template/services/language.service';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { PublicService } from 'src/app/pages/home/services/public.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logup-user',
  templateUrl: './logup-user.component.html',
  styleUrls: ['./logup-user.component.css']
})
export class LogupUserComponent implements OnInit {

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
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  create(){
      this.preloaderService.showPreloader();
      if (this.createForm.valid) {
        const emailControl = this.createForm.get('email');
        const nameControl = this.createForm.get('name');
        const lastNameControl = this.createForm.get('lastname');
        const passwordControl = this.createForm.get('password');

      if (emailControl && nameControl && lastNameControl && passwordControl) {
        const userData = {
          email: emailControl.value,
          password: passwordControl.value,
          role: "Candidate",
          Nombre: nameControl.value,
          apellido: lastNameControl.value,
          document_type: "",
          document_number: "",
          name: "",
          phone_number: "",
          country: ""
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
              this.router.navigate(['/login', "Candidate"]);
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
    this.router.navigate(['/login', "Candidate"]);
  }

}
