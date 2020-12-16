import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:3000";

  products = [];

  constructor( private http: HttpClient ) { }

  async getProdcutsByCatName(catName) {

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
}
