import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-search',
  templateUrl: './pais-search.component.html',
})
export class PaisSearchComponent {

  @Output() onSubmit: EventEmitter<string>  = new EventEmitter();

  termino: string = '';

  constructor() { }

  buscar(): void {
    this.onSubmit.emit(this.termino);
  }
}
