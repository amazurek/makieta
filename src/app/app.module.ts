import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JednostkiComponent } from './jednostki/jednostki.component';
import { MagazynyComponent } from './magazyny/magazyny.component';
import { JednostkiListaComponent } from './jednostki-lista/jednostki-lista.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppR],
  declarations: [AppComponent, HelloComponent, JednostkiComponent, MagazynyComponent, JednostkiListaComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
