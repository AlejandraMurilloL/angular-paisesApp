import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styles: [
  ]
})
export class NombreComponent {

  termino: string = 'Hola mundo'; 

  constructor(private paisService: PaisService) { }

  buscar(): void {
    console.log(this.termino);
    this.paisService.buscarPaisByName(this.termino).subscribe(resp => {
      console.log(resp);
    });
  }
}
