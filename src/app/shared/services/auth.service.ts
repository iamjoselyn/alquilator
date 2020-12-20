import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "http://localhost:3000";

  constructor( private http: HttpClient,
               private router: Router ) { }

  //llamamos a FormLogin que tiene el mail y password
  // aquí se puede llamar a una API 
  async login(formLogin: FormGroup) {
    console.log(formLogin.value.email);

    // Dentro del if puede ponerse un valor para el mail y password
    // formLogin.value.email === '' && formLogin.value.password === ''
    
    if (await this.callUsers(formLogin) === true) {
      // no podemos decirle if formLogin.valid porque lo que comprueba es que el form esté correcto en cuanto a validación no es base a lo que haya guardado en el back
      // POST REQUEST a NODE a /users/auth

      return true
    
      
    } else {
      return false;

    }
  }

  async callUsers(formLogin: FormGroup) {
    return await this.http.post(`${this.baseUrl}/users/auth`, {email: formLogin.value.email, pass: formLogin.value.password}).toPromise()
      .then( (data: any) => {
        console.log("token", data);
        console.log(formLogin.value.email);
        
        localStorage.setItem('auth', data)
        localStorage.setItem('email', formLogin.value.email)
        return true; 

      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }

  isAuth(): boolean {
    if (localStorage.getItem('auth') !== '') {
      // if (localStorage.getItem('') !== '') {}
      return true;
    } else {
      return false;
    }
  }

  logout() {
    console.log("Saliendo!");
    
    localStorage.removeItem("auth");
    this.router.navigateByUrl("/home")
  }
}
