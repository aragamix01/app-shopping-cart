import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { GoodsComponent } from './goods/goods.component';
import { CartComponent } from './goods/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { CartService } from './goods/cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GoodsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
