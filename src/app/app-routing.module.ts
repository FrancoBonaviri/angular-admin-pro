import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS ->
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

const route: Routes = [
  // 404 not found page ->
  { path: '', redirectTo:'/dashboard', pathMatch: "full" },
  { path: '**', component: NopagefoundComponent },

];




@NgModule({
  declarations: [],
  imports: [
    PagesRoutingModule, // Routes pages module
    AuthRoutingModule, // Routes auth module
    RouterModule.forRoot( route ),
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule { }
