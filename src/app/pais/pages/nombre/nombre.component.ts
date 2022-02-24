import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styles: [
  ]
})
export class NombreComponent {

  nombre: string = '';
  hayError: boolean = false; 

  constructor(private paisService: PaisService) { }

  buscar(): void {
    this.hayError = false;
    this.paisService.buscarPaisesByName(this.nombre).subscribe({ next: (paises) => {
      console.log(paises);
    }, error: () => {
      this.hayError = true;
    }});
  }
}
