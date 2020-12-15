import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "http://localhost:3000";

  myData: any[] = [];
  constructor( private http: HttpClient ) { }

  //llamamos a FormLogin que tiene el mail y password
  // aquí se puede llamar a una API 
   async login(formLogin: FormGroup) {
    console.log(formLogin.value.email);
    console.log(this.myData);

    // Dentro del if puede ponerse un valor para el mail y password
    // formLogin.value.email === '' && formLogin.value.password === ''
    
    if (formLogin.valid) {
      // POST REQUEST a NODE a /users/auth
    
      return await this.http.post(`${this.baseUrl}/users/auth`, {email: formLogin.value.email, pass: formLogin.value.password}).toPromise()
      .then( (data: any) => {
        console.log("Datos del usuario", data);
        this.myData = data;
        localStorage.setItem('auth', data)
        
        return true; 

      })
      .catch((error) => {
        console.log(error);
        return false;
      });

      
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
