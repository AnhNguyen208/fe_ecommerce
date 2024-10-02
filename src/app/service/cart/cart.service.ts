import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8080/api/v1/carts/1';

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  add(id: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, {
      book_id: id,
    })
  }

  update(id: number, quantity: number): Observable<any> {
    return this.http.put<any>(this.apiUrl, {
      book_id: id,
      quantity: quantity
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl, {
      body: {
        book_id: id
      }
    });
  }
}
