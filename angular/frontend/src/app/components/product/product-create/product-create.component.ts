import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  constructor(private productService: ProductService, private router: Router){ }

  ngOnInit(): void {
  }
  
  createProduct(): void {
    this.productService.showMessage('Produto Criado')
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
