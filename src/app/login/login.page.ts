import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class LoginPage implements OnInit {

  bgColor = 'var(--bg-color)';
  borderRadius = 'var(--input-border-radius)';
  titleColor = 'var(--title-color)';
  loginForm: FormGroup;

  validation_messages = {
    email: [
      {
        type: "required", mensaje: "El email es obligatorio."
      },
      {
        type: "email", mensaje: "Email invalido."
      }
    ],
    password: [
      {
        type: "required", mensaje: "La contraseña es obligatoria."
      },
      {
        type: "minLength", mensaje: "Contraseña invalida."
      }
    ]
  }

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '', Validators.compose([
        Validators.required, //Campo obligatorio
        Validators.email //Valida que sea correo electronico
      ])
    ),
      password: new FormControl('', Validators.compose([
        Validators.required,//Campo obligatorio
        Validators.minLength(6)
      ])
    )
    });
  }

  ngOnInit() {}

  loginUser(credentials: any) {
    console.log(credentials);
  }
}
