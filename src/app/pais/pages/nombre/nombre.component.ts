import { Component } from '@angular/core';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styles: [
  ]
})
export class NombreComponent {

  termino: string = 'Hola mundo'; 

  constructor() { }

  buscar(): void {
    console.log(this.termino);
  }
}
