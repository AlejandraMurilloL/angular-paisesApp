import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
})
export class PaisListComponent {

  @Input() paises: Country[] = [];
  
  constructor() { }

}
