import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = "http://localhost:3000";

  constructor( private http: HttpClient) { }

  //llamamos a FormLogin que tiene el mail y password
  // aquí se puede llamar a una API 
  login(formLogin: FormGroup) {
    console.log(formLogin.value.email);
    
    
    this.http.post(`${this.baseUrl}/users/auth`, {email: 'email@email.com', pass: 'email1Email'})
      .subscribe( (data: any) => {
        console.log("Datos del usuario", data);
          
        localStorage.setItem('auth', data)    
      }); 

    // Dentro del if puede ponerse un valor para el mail y password
    // formLogin.value.email === '' && formLogin.value.password === ''

    if (formLogin.valid) {
      // POST REQUEST a NODE a /users/auth
      this.http.post(`${this.baseUrl}/users/auth`, {email: 'email@email.com', pass: 'email1Email'})
      .subscribe( (data: any) => {
        console.log("Datos del usuario", data);
          
        localStorage.setItem('auth', data)    
      }); 
      return true; 
    } else {
      return false;
    }
  }

  isAuth(): boolean {
    if ( localStorage.getItem('auth') === 'true') {
      return true;
    } else {
      return false;
    }
  }
}
