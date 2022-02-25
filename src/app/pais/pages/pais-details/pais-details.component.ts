import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-details',
  templateUrl: './pais-details.component.html',
  styles: [
  ]
})
export class PaisDetailsComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, 
              private paisService: PaisService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.buscarPaisByAlpha(id)),
        tap(console.log)
      )
      .subscribe(paises => this.pais = paises[0]);

    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     this.paisService.buscarPaisByAlpha(id)
    //       .subscribe(paises => {
    //         console.log(paises);
    //       })
    //   });
  }

}
