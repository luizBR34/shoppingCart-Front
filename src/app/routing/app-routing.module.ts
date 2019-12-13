import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rotas } from './rotas';


@NgModule({
  imports: [RouterModule.forRoot(rotas, {onSameUrlNavigation: 'reload'} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
