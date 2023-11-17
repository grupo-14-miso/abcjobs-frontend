import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/core/template/services/language.service';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { PublicService } from 'src/app/pages/home/services/public.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logoup-user',
  templateUrl: './logoup-user.component.html',
  styleUrls: ['./logoup-user.component.css']
})
export class LogoupUserComponent implements OnInit {

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
          apellido: lastNameControl.value
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
            console.error('Error al crear la entrevista', error);
          }
        });
      }
    }
  }

  login(){
    this.router.navigate(['/login', "Candidate"]);
  }

}
