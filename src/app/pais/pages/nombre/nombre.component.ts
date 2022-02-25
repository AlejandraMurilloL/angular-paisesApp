import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `
  ]
})
export class NombreComponent {

  nombre: string = '';
  hayError: boolean = false; 
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string): void {
    this.nombre = termino;
    this.hayError = false;    
    this.mostrarSugerencias = false;
    this.paisService.buscarPaisesByName(this.nombre).subscribe({ next: (paises) => {
      this.paises = paises;
    }, error: () => {
      this.hayError = true;
      this.paises = [];
    }});
  }

  mostrarListadoSugerencias(termino: string): void {
    this.hayError = false;
    this.nombre = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPaisesByName(termino).subscribe({
      next: paises => this.paisesSugeridos = paises.splice(0, 5),
      error: () => this.paisesSugeridos = []
    });
  }
}
