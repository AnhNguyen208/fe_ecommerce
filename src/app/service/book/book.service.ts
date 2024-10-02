import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8080/api/v1/books';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getByCategoryId(categoryId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/category/${categoryId}`);
  }

  add(book: Book): Observable<any> {
    return this.http.post<any>(this.apiUrl, book);
  }

  edit(id: number, book: Book): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, book);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
  }

  search(keyword: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search?keyword=${keyword}`)
  }

}
