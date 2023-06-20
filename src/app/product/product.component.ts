import { Component, Input } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Hero | undefined;
}
