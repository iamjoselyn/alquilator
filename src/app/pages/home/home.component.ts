import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  categories = [
    {name: "Deportes", img: "../../../assets/barbell.svg"}, 
    {name: "Mobiliario", img: "../../../assets/home-flat.svg"}, 
    {name: "Ocio", img: "../../../assets/bullseye-flat.svg"}, 
    {name: "Informática y Móviles", img: "../../../assets/imac-flat.svg"},
    {name: "Fotografía y Vídeo", img: "../../../assets/camera-flat.svg"},
    {name: "Música e Instumentos", img: "../../../assets/guitar.svg"},
    {name: "Sonido", img: "../../../assets/sound-on-flat.svg"},
    {name: "Herramientas", img: "../../../assets/wrench-flat.svg" }
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
