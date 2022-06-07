import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JednostkiListaComponent } from './jednostki-lista/jednostki-lista.component';
import { MagazynyComponent } from './magazyny/magazyny.component';
import { ScenariuszeComponent } from './scenariusze/scenariusze.component';

const routes: Routes = [
  {path:'', component: MagazynyComponent},
  {path:'jednostkiLista', component: JednostkiListaComponent},
  {path:'scenariusze', component:ScenariuszeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
