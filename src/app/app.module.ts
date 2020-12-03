import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules ->
import { AppRoutingModule } from './app-routing.module'; //Router
import { PagesModule } from './pages/pages.module'; //Internal pages
import { AuthModule } from './auth/auth.module'; // Login-register pages

// Components ->
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
