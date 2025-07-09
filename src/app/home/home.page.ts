import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  mensaje = 'Hola desde el home.page.ts'

  constructor() {}

  saludar() {
    console.log(this.mensaje)
  }
}
