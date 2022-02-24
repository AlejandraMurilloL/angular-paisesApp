import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPaisesByName(nombre: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${nombre}`
    return this.http.get<Country[]>(url);
  }
}
