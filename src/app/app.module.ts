import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JednostkiComponent } from './jednostki/jednostki.component';
import { MagazynyComponent } from './magazyny/magazyny.component';
import { JednostkiListaComponent } from './jednostki-lista/jednostki-lista.component';
import { AppRoutingModule } from './app-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { ScenariuszeComponent } from './scenariusze/scenariusze.component';
import { DataService } from './services/data.service';
const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatTableModule,
    MatListModule,
  ],

  declarations: [
    AppComponent,
    HelloComponent,
    JednostkiComponent,
    MagazynyComponent,
    JednostkiListaComponent,
    ScenariuszeComponent,
  ],
  bootstrap: [AppComponent],
  providers:[DataService]
})
export class AppModule {}
