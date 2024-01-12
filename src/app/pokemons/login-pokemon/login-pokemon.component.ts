import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from "@angular/forms";

@Component({
  selector: 'app-login-pokemon',
  templateUrl: './login-pokemon.component.html',
  styleUrl: './login-pokemon.component.css'
})
export class LoginPokemonComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {  }

  passwordMatchValidator(password: string, passwordConfirm: string) : boolean {
    if (password === passwordConfirm) {
      return true;
    }
    return false;
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: this.fb.group({
        first: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(25)])],
        last: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(25)])]
      }),
      email: ['', Validators.pattern('^[a-z0-9._-] +@[a-z0-9._-]{2,}\.[a-z]{2,4}$')],
      verification: this.fb.group({
        password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
        passwordConfirm: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
      }, this.passwordMatchValidator)
    })
  }
}
