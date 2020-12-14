import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //llamamos a FormLogin que tiene el mail y password
  // aquí se puede llamar a una API 
  login(formLogin: FormGroup) {
    console.log(formLogin.value.email);

    // Dentro del if puede ponerse un valor para el mail y password
    // formLogin.value.email === '' && formLogin.value.password === ''
    
    if (formLogin.valid) {
      localStorage.setItem('auth', 'true')
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
