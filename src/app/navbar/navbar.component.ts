import { Component, EventEmitter, Output } from '@angular/core';
import { 
  faSearch, 
  faCartShopping, 
  faLaptop, 
  faMobile, 
  faClock, 
  faComputer, 
  faMouse, 
  faTablet, 
  faSimCard, 
  faHandshake,
  faUserClock
} 
  from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faSearch = faSearch;
  faCartShopping = faCartShopping;
  faLaptop = faLaptop;
  faMobile = faMobile;
  faClock = faClock;
  faComputer = faComputer;
  faMouse = faMouse;
  faTablet = faTablet;
  faSimCard = faSimCard;
  faService = faHandshake;
  faUserClock = faUserClock;

  @Output() searchEvent = new EventEmitter<string>();

  seachProduct(searchKey: string): void{
    this.searchEvent.emit(searchKey);
  }

  seachProductOnChange(e: any): void{
    let searchKey = e.target.value;
    console.log('navbar: ' + searchKey);
    this.searchEvent.emit(searchKey);
  }

}
