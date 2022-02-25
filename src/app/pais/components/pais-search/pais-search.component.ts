import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-search',
  templateUrl: './pais-search.component.html',
})
export class PaisSearchComponent implements OnInit {

  @Input() placeholder: string = '';

  @Output() onSubmit: EventEmitter<string>  = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  termino: string = '';

  constructor() { }

  ngOnInit(): void {
      this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      })
  }

  buscar(): void {
    this.onSubmit.emit(this.termino);
  }

  onTeclaOprimida(): void {
    this.debouncer.next(this.termino);
  }
}
