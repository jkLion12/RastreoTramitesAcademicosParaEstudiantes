import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RastreoComponent } from './vistas/rastreo/rastreo.component'

const routes: Routes = [
  { path:'', redirectTo:'rastreo', pathMatch:'full' },
  { path:'rastreo', component:RastreoComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RastreoComponent];

