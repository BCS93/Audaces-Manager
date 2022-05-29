import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tela-de-login',
  templateUrl: './tela-de-login.component.html',
  styleUrls: ['./tela-de-login.component.scss']
})
export class TelaDeLoginComponent implements OnInit {

  _form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });


  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
  }

  submit() {
    this._form.valid ? console.log(this._form.value) : alert('Email/Senha inválido(a), digite novamente');
  

  }
}
