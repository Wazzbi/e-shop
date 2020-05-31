import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      ShopingCartComponent,
      HomePageComponent
   ],
   imports: [
      BrowserModule,
      NgbModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
