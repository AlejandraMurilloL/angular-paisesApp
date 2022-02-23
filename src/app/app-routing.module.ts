import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CapitalComponent } from './pais/pages/capital/capital.component';
import { NombreComponent } from './pais/pages/nombre/nombre.component';
import { PaisDetailsComponent } from './pais/pages/pais-details/pais-details.component';
import { RegionComponent } from './pais/pages/region/region.component';

const routes: Routes = [
    {
        path: '',
        component: NombreComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: RegionComponent,
    },
    {
        path: 'capital',
        component: CapitalComponent,
    },
    {
        path: 'pais/:id',
        component: PaisDetailsComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {
    
}