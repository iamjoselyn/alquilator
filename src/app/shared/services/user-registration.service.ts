import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})

export class UserRegistrationService {
  
  user: any[] = [];

  baseUrl: string = "http://localhost:3000";

  constructor( private http: HttpClient ) { }

  getUsers(): void {
    this.http.get(`${this.baseUrl}/users`)
      .subscribe( (data: any) => {
        console.log("Datos del usuario", data);
        this.user = data
        
      }, error => {
        console.log("ERROR: ", error);
      });
  }

  // register(user: Users) {
  //   this.http.post(`${this.baseUrl}/users`, user)
  //     .subscribe( (data: any[]) => {
  //       console.log("Datos del usuario", data);
  //       this.user = data
        
  //     }, (error) => {
  //       console.log(error);
        
  //     });
  // }

  async register(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: { 
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    // return response.json();
    // si descomentamos da error: SyntaxError: Unexpected token T in JSON at position 0

  }

  // llamar a este método desde UserArea cuando se haya creado para borrar los datos de un usuario?
  async deleteUser(url = "", data = {}) {

  }

  // para modificar los datos, llamar desde UserArea
  async updateUser(url = "", data = {}) {

  }


  // signin(user: Users): any {
  //   this.http.post(`${this.baseUrl}/login`, user)
  //     .subscribe( (data: any) => {
  //       console.log("Datos del usuario", data);
  //       this.user = data
        
  //     });
  // }


}


