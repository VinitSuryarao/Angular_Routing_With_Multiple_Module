import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponentComponent } from './ClientModule/client-component/client-component.component';
import { ExchangeComponentComponent } from './ExchangeModule/exchange-component/exchange-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponentComponent,
    ExchangeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
