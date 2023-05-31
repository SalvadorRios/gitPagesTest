import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';

const routes: Routes = [
  // {path:'ruta1', component:Ejemplo1Component},
  {path:'ruta1/:id', component:Ejemplo1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
