import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CapitalComponent } from './pages/capital/capital.component';
import { NombreComponent } from './pages/nombre/nombre.component';
import { PaisDetailsComponent } from './pages/pais-details/pais-details.component';
import { RegionComponent } from './pages/region/region.component';
import { PaisListComponent } from './components/pais-list/pais-list.component';
import { PaisSearchComponent } from './components/pais-search/pais-search.component';



@NgModule({
  declarations: [
    CapitalComponent,
    RegionComponent,
    PaisDetailsComponent,
    NombreComponent,
    PaisListComponent,
    PaisSearchComponent
  ],
  exports: [
    CapitalComponent,
    RegionComponent,
    PaisDetailsComponent,
    NombreComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
