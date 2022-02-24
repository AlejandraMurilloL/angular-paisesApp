import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPaisByName(nombre: string): Observable<any> {
    const url = `${this.apiUrl}/name/${nombre}`
    return this.http.get(url);
  }
}