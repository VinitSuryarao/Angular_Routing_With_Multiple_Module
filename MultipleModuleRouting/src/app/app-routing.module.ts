import { Component, NgModule } from '@angular/core';
import { ClientComponentComponent } from './ClientModule/client-component/client-component.component';
import { ExchangeComponentComponent } from './ExchangeModule/exchange-component/exchange-component.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ClientModule', component: ClientComponentComponent,
    children: [
      { path:'ClientComponent', component: ClientComponentComponent }
    ]
  },

  {
    path: 'ExchangeModule', component: ExchangeComponentComponent,
    children: [
      { path:'ExchangeComponent', component: ExchangeComponentComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
