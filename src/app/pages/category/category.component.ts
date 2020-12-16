import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryName = ["Mobiliario", "Deportes", "Sonido", ""];
  products = [];

  categories = [
    {name: "Deportes", img: "../../../assets/barbell.svg"}, 
    {name: "Mobiliario", img: "../../../assets/home-flat.svg"}, 
    {name: "Ocio", img: "../../../assets/bullseye-flat.svg"}, 
    {name: "Informática y Móviles", img: "../../../assets/imac-flat.svg"},
    {name: "Fotografía y Vídeo", img: "../../../assets/camera-flat.svg"},
    {name: "Música e Instumentos", img: "../../../assets/guitar.svg"},
    {name: "Sonido", img: "../../../assets/sound-on-flat.svg"},
    {name: "Herramientas", img: "../../../assets/wrench-flat.svg"}
  
  ]
  
  constructor( private router: ActivatedRoute ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      console.log(params);
      console.log(params.params.name);
      console.log(this.categoryName);
      
      this.categoryName = params.get["categoryName"];


    })


    // https://medium.com/better-programming/angular-6-url-parameters-860db789db85
    // 
    // cuando se cargue esta URL y componente: 
    //  TODO Recojamos el NOMBRE de la categoría de la URL: accediendo al router coger el query los params etc
    // 
    // Llamada a un recurso de la API para traer los productos con el NOMBRE de categoría  que nos traemos con un servicio de Products y estos productso serán los que recorreremos en la vista (pasando un poco del 1er for que tengo de categorías en el html de categories)
    // filtraremos por categoria en la colección de productos where category sea el que llega por URL
  }

}
