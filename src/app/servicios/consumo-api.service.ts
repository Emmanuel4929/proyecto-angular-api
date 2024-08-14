import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { commentarios } from '../modelos/comentarios';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ConsumoApiService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}
  getListadocomentarios(): Observable<commentarios[]> {
    return this.http.get<commentarios[]>(this.apiUrl);
  }
}
