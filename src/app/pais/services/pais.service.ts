import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = 'https://restcountries.com/v3.1';

  get params(): HttpParams {
    return new HttpParams().set('fields', 'name,capital,flags,population,cca2');
  }

  constructor(private http: HttpClient) { }

  buscarPaisesByName(nombre: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${nombre}`
    return this.http.get<Country[]>(url, { params: this.params });
  }

  buscarPaisesByCapital(capital: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capital}`
    return this.http.get<Country[]>(url, { params: this.params });
  }

  buscarPaisesByRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url, { params: this.params });
  }

  buscarPaisByAlpha(code: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${code}`
    return this.http.get<Country[]>(url);
  }
}
