import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagazynyComponent } from './magazyny/magazyny.component';

const routes: Routes = [
  {path:'', component: MagazynyComponent},
  {path:'jednostki', component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
