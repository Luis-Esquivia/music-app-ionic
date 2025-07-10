import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {
  //[Tarea]: Agregar infromacion de minimo 3 slides para mostrar en la vista
  genres = [
    {
      title: 'Música Clásica',
      image:
        'https://wallpapers.com/images/featured/musica-clasica-a58kbdl0oe9y9hxf.jpg',
      description:
        'La música clásica es una forma de arte refinada que abarca siglos de tradición y expresión emocional profunda. Es interpretada por orquestas, coros y solistas de todo el mundo.',
    },
    {
      title: 'Rock',
      image:
        'https://www.ifema.es/img/xl/grupo-rock-roll/grupo-rock-and-roll.jpeg',
      description:
        'El rock es un género potente y enérgico que ha marcado generaciones. Con guitarras eléctricas, baterías contundentes y letras poderosas, el rock nunca pasa de moda.',
    },
    {
      title: 'Jazz',
      image:
        'https://static.wikia.nocookie.net/los-generos-musicales/images/4/4f/Dixie_Jazz_5.jpg/revision/latest?cb=20210120233726&path-prefix=es',
      description:
        'El jazz es sinónimo de improvisación y libertad. Con raíces afroamericanas, este género mezcla ritmos complejos y melodías envolventes que transmiten alma y pasión.',
    },
  ];

  constructor() {}
}
