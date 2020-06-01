import { Component, OnInit } from '@angular/core';
import{Dish} from '../shared/dish';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes:Dish[] = [
    {
      id: '0',
      name: 'The Journey',
      image: '/assets/images/1.jpg',
      category: 'Main',
      featured: true,
      label: 'Hot',
      
      
      description: 'The journey of a thousand miles begins with a single step.'
    },
    {
      id: '1',
      name: 'Destinations',
      image: '/assets/images/5.jpg',
      category: 'places',
      featured: false,
      label: '',
      
      description: 'Travel all around the world along with your favourite destinations with us'
    },
    {
      id: '2',
      name: 'The Plan',
      image: '/assets/images/4.jpg',
      category: 'Planning',
      featured: false,
      label: 'New',
      
      description: 'Worried about planning? Then you have come to right place!'
    },
    {
      id: '3',
      name: 'Travel assistant',
      image: '/assets/images/2.jpg',
      category: 'Assistance',
      featured: false,
      label: '',
      
      description: 'We provide you all the solutions for your itenerary'
    }
   ];
  constructor() { }

  ngOnInit() {
  }

}
