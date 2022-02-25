import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent {

  capital: string = '';
  hayError: boolean = false; 
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string): void {
    this.capital = termino;
    this.hayError = false;
    this.paisService.buscarPaisesByCapital(this.capital).subscribe({ next: (paises) => {
      this.paises = paises;
    }, error: () => {
      this.hayError = true;
      this.paises = [];
    }});
  }
}
