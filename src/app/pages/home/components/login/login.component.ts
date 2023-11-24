import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { PublicService } from '../../services/public.service';
import { LanguageService } from 'src/app/core/template/services/language.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  role: string;
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private preloaderService: PreloaderService,
    private publicService: PublicService,
    private languageService: LanguageService,
    ) {
      this.role = ""
    }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.role = params.get('role') as string;

    });
    this.formBuilderGroup()
  }

  formBuilderGroup() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(){
    this.preloaderService.showPreloader();
      if (this.loginForm.valid) {
        const emailControl = this.loginForm.get('email');
        const passwordControl = this.loginForm.get('password');

      if (emailControl && passwordControl) {
        const loginData = {
          email: emailControl.value,
          password: passwordControl.value,
          role: this.role,
        };

        this.publicService.login(loginData).subscribe({
          next: (response) => {
            console.log(response)
            localStorage.setItem('token', response.token);
            localStorage.setItem('role', response.role);
            localStorage.setItem('name', response.name);
            localStorage.setItem('userKey', response.key);
            localStorage.setItem('userId', response.id);
            this.preloaderService.hidePreloader();

            console.log(this.role)
            if(this.role == "Candidate"){
              this.router.navigate(['/users']);
            }

            if(this.role == "Admin"){
              this.router.navigate(['/dashboard']);
            }

            if(this.role == "Company"){
              this.router.navigate(['/search']);
            }


          },
          error: (error) => {
            this.preloaderService.hidePreloader();
            console.error('Error login', error);
            let title = 'Error en login';
            let text = 'Email o password incorrectos'
            if(this.languageService.currentLanguage == "en"){
              title = 'Login error'
              text = 'Incorrect email or password'
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

  register(role: string){
    if(role == "Candidate"){
      this.router.navigate(['logup/user']);
    }

    if(role == "Company"){
      this.router.navigate(['logup/company']);
    }
  }

}
