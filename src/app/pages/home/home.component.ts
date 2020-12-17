import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    {name: "Informática", img: "../../../assets/imac-flat.svg"},
    {name: "Fotografía", img: "../../../assets/camera-flat.svg"},
    {name: "Instumentos", img: "../../../assets/guitar.svg"},
    {name: "Sonido", img: "../../../assets/sound-on-flat.svg"},
    {name: "Herramientas", img: "../../../assets/wrench-flat.svg"}
  
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  categoryRedirect(catName: string){
    this.router.navigateByUrl(`/category/${catName}`)
  }

}
