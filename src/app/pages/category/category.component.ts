import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryName = null;
  products = [];
  
  constructor( private router: ActivatedRoute,
               private productService: ProductService ) { }

  ngOnInit(): void {

    this.router.paramMap.subscribe((params) => {
      // this.categoryName = params.params.name;

      this.serviceCall()
      
      console.log(this.categoryName);
      console.log(this.products);
      
    });

  };

  async serviceCall() {
    await this.productService.getProdcutsByCatName(this.categoryName)
    this.products = this.productService.products;
    console.log(this.products);

  };

}
