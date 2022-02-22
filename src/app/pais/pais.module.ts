import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CapitalComponent } from './pages/capital/capital.component';
import { NombreComponent } from './pages/nombre/nombre.component';
import { PaisDetailsComponent } from './pages/pais-details/pais-details.component';
import { RegionComponent } from './pages/region/region.component';



@NgModule({
  declarations: [
    CapitalComponent,
    RegionComponent,
    PaisDetailsComponent,
    NombreComponent
  ],
  exports: [
    CapitalComponent,
    RegionComponent,
    PaisDetailsComponent,
    NombreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaisModule { }
