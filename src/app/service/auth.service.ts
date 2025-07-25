import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlServer = "https://music.fly.dev";

  constructor() { }

  loginUser(credentials: any){
    return new Promise((accept, reject) => {
      if (
        credentials.email == "luisdanielesq7@gmail.com" &&
        credentials.password == "123456789"
      ) {
        accept("login correcto")
      }else(
        reject("login incorrecto")
      )
    })
  }


  registerUser(data: any): Promise<any> {
    return fetch(`${this.urlServer}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => {
      if (!response.ok) {
        return response.json().then(err => Promise.reject(err));
      }
      return response.json();
    });
  }



}
