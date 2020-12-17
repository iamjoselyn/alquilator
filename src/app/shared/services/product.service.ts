import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [];
  baseUrl: string = "http://localhost:3000";

  product = [];

  
  constructor( private http: HttpClient,
               private router: Router ) { }

  async getProductsByCatName(catName: string) {

    return await this.http.get(`${this.baseUrl}/products/${catName}`).toPromise()
      .then((data: any) => {
        console.log("Datosss", data);
        this.products = data;
        console.log(this.products)
  
      })
      .catch((error) => {
        console.log("Ha habido un ERROR: ", error); 
      })    
  }

  async getProductsById(id: string) {
    return await this.http.get(`${this.baseUrl}/products/product/${id}`).toPromise()
      .then((data2: any) => {
        console.log("PRODUCTO:", data2);
        this.product = data2
        console.log(this.product);
      })
      .catch((error) => {
        console.log("EEERRROOOOROR: ", error);
      })
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
  }
}
