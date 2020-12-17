import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [];
  baseUrl: string = "http://localhost:3000";

  constructor( private http: HttpClient ) { }

  async getProductsByCatName(catName) {

    return await this.http.get(`${this.baseUrl}/products/${catName}`).toPromise()
      .then((data: any) => {
        console.log("Datosss", data);
        this.products = data;
        console.log(this.products)
  
      })
      .catch((error) => {
        console.log("Ha habido un ERROR: ", error);

        
      })
  // con el nombre del parametro vemos la categoria a consultar y

  // Llamada a un recurso de la API para traer los productos con el NOMBRE de categoría - products que nos traemos con un servicio Products - y estos productso serán los que recorreremos en la vista (pasando un poco del 1er for que tengo de categorías en el html de categories - ¿hay que crear un componente para cada categoría? -, yendo directamente al for de productos)
  // filtraremos por categoria en la colección de productos where category sea el que llega por URL
    
  }

  async saveProduct(url = "", data = {}) {
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
}
