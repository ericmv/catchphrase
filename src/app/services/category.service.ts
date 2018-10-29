import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  category: string
  constructor(private http: HttpClient) { }

  // let baseURL = "localhost:3000"
  getList(_category) {
    const url = '/assets/' + _category + '.txt'
    return this.http.get(url, { responseType: 'text' })

  }

  setCategory(_category) {
    this.category = _category;
  }
}
