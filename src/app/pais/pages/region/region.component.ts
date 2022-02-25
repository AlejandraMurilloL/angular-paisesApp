import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }  
  `
  ]
})
export class RegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionSeleccionada: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  seleccionarRegion(region: string): void {
    if (region === this.regionSeleccionada) { return; }

    this.paises = [];
    this.regionSeleccionada = region;
    this.paisService.buscarPaisesByRegion(region).subscribe(paises => this.paises = paises);
  }
  
  getClaseCSSBtnRegion(region: string): string {
    return region === this.regionSeleccionada ? 'btn btn-primary' : 'btn btn-outline-primary';
  }
}
