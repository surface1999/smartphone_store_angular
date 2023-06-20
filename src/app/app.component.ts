import { Component, OnInit } from '@angular/core';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Hero } from './Hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'smartphone-store';
  products: Hero[] = [];
  isSearch: boolean = false;
  searchResultMsg: string = '';

  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.isSearch = false;
    this.heroService.getHeroes().subscribe(products => this.products = products);
  }

  showSearchResult(searchKey: string): void{
    this.isSearch = true;
    if(searchKey.trim() === ''){
      this.heroService.getHeroes().subscribe(products => 
      {
        this.products = products;
        this.searchResultMsg = `There are ${products.length} ${products.length >1? 'results': 'result'}`;
      }
      );
    }
    else{
      this.heroService.searchHeroes(searchKey).subscribe(products => 
      {
        console.log('app: ' + searchKey);
        this.products = products;
        this.searchResultMsg = `There are ${products.length} ${products.length >1? 'results': 'result'}`;
      }
      );
    }
    
  }
}
