import { Component, Input} from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent{

  @Input() products: Hero[] | undefined;

}
