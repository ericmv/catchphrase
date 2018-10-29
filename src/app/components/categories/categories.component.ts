import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../../services/category.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories1: string[];
  categories2: string[];
  colors: any;
  @Output() toggleEvent = new EventEmitter<boolean>();
  route: Router;
  categoryService: CategoryService;

  constructor(categoryService: CategoryService, route: Router) {
    this.route = route;
    this.categoryService = categoryService;
  }

  ngOnInit() {
    this.categories1 = ['Travel', 'People', 'Food']
    this.categories2 = ['Household Items', 'Animals', 'General']


  }

  onPress() {
    this.toggleEvent.emit(false);
  }

  onClick(_category) {
    // console.log(_category)
    this.categoryService.setCategory(_category);
    this.route.navigate(['/play'])
  }

}
