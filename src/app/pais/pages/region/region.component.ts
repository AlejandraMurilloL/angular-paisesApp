import { Component } from '@angular/core';

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

  constructor() { }

  seleccionarRegion(region: string): void {
    this.regionSeleccionada = region;
    //TODO: Hacer llamado al servicio

  }
  
  getClaseCSSBtnRegion(region: string): string {
    return region === this.regionSeleccionada ? 'btn btn-primary' : 'btn btn-outline-primary';
  }
}
