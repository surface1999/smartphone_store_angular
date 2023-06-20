import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './Hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'IPhone 14 Pro Max', price: "26.990.000", link: 'iphone-14-pro-max.jpg'},
      { id: 2, name: 'Samsung Galaxy S8', price: "18.990.000", link: 'galaxy-s8.jfif'},
      { id: 3, name: 'IPhone 6S Plus', price: "23.990.000", link: 'iphone-6s-plus.jfif'  },
      { id: 4, name: 'Samsung Galaxy S7 Edge', price: "18.490.000", link: 'galaxy-s7-edge.jfif'  },
      { id: 5, name: 'Samsung Galaxy Note 7', price: "18.990.000", link: 'galaxy-note7.jfif'  },
      { id: 6, name: 'Oppo F1S', price: "6.990.000", link: 'oppo-f1s.jfif'  },
      { id: 7, name: 'Samsung Galaxy Note 5', price: "18.990.000" , link: 'galaxy-note5.jfif'},
      { id: 8, name: 'Samsung Galaxy Note 8', price: "18.990.000", link: 'galaxy-note8.jfif'  },
      { id: 9, name: 'Samsung Galaxy Note 9', price: "18.990.000", link: 'galaxy-note9.jfif'},
      { id: 10, name: 'Samsung Galaxy Note 10', price: "18.990.000", link: 'galaxy-note10.jfif'},
      { id: 11, name: 'Samsung Galaxy Note 4', price: "18.990.000", link: 'galaxy-note4.jfif'},
      { id: 12, name: 'Samsung Galaxy Note 3', price: "18.990.000", link: 'galaxy-note5.jfif'},
      { id: 13, name: 'IPhone 13 Pro Max', price: "24.990.000", link: 'iphone-13-promax.jfif'},
      { id: 14, name: 'IPhone 11 Pro Max', price: "21.990.000", link: 'iphone-11-promax.jfif'},
      { id: 15, name: 'IPhone 8 Plus', price: "19.990.000", link: 'iphone-8-plus.jfif'},
      { id: 16, name: 'Samsung Galaxy A50', price: "6.990.000", link: 'galaxy-a50.jfif'},
      { id: 17, name: 'Samsung Galaxy A5 2016', price: "7.990.000", link: 'galaxy-a5-2016.jfif'},
      { id: 18, name: 'Samsung Galaxy A51', price: "7.990.000", link: 'galaxy-a51.jfif'},
      { id: 19, name: 'Samsung Galaxy S10 Plus', price: "22.990.000", link: 'galaxy-s10-plus.jfif'},
      { id: 21, name: 'Samsung Galaxy S9 Plus', price: "21.990.000", link: 'galaxy-s9-plus.jfif'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}