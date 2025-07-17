import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
}
