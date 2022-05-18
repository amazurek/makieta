import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JednostkiComponent } from './jednostki/jednostki.component';
import { MagazynyComponent } from './magazyny/magazyny.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, JednostkiComponent, MagazynyComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
